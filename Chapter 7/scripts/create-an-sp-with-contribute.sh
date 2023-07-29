#!/bin/bash

# Set variables
resource_group_name="<YOUR_RESOURCE_GROUP>"
custom_role_name="github deployment role"
sp_name="sp-gha-deployer"
sub_id=$(az account show --query id --output tsv)

# Step 1: Create a Service Principal
sp_info=$(az ad sp create-for-rbac --name "$sp_name" --skip-assignment --output json)
sp_app_id=$(echo "$sp_info" | jq -r '.appId')

# Step 2: Provide contribute access on the specified resource group
az role assignment create --role "Contributor" --assignee "$sp_app_id" --scope "/subscriptions/$sub_id/resourceGroups/$resource_group_name"

# Step 3: Create a custom role definition
role_definition=$(cat <<EOF
{
  "Name": "$custom_role_name",
  "Description": "Custom role that allows GitHub deployments",
  "Actions": [
    "Microsoft.Resources/deployments/write",
    "Microsoft.Resources/deployments/validate/action"
  ],
  "AssignableScopes": ["/subscriptions/$sub_id"]
}
EOF
)

role_definition=$(echo "$role_definition")
az role definition create --role-definition "$role_definition"

# Step 4: Assign the custom role to the Service Principal
az role assignment create --role "$custom_role_name" --assignee "$sp_app_id" --scope "/subscriptions/$sub_id"  

# Get output for Secret
az ad sp create-for-rbac --name "$sp_name" --skip-assignment --sdk-auth
