targetScope = 'subscription'

param resourceGroupName string
param resourceGroupLocation string = 'eastus'

resource newRG 'Microsoft.Resources/resourceGroups@2021-01-01' = {
  name: '${resourceGroupName}-rg'
  location: resourceGroupLocation
}
