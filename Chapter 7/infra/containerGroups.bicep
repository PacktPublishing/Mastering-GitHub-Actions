@description('Name for the container group')
param name string = 'acilinuxpublicipcontainergroup'

@description('Name for the acr where the image is sourced')
param acrName string

@description('Name for the resource group where the ACR is located')
param acrResourceGroupName string

@description('Location for all resources.')
param location string = resourceGroup().location

@description('Container image to deploy. Should be of the form repoName/imagename:tag for images stored in public Docker Hub, or a fully qualified URI for other registries. Images from private registries require additional registry credentials.')
param image string = 'mcr.microsoft.com/azuredocs/aci-helloworld'

@description('Port to open on the container and the public IP address.')
param port int = 80

@description('The number of CPU cores to allocate to the container.')
param cpuCores int = 1

@description('The amount of memory to allocate to the container in gigabytes.')
param memoryInGb int = 2

@description('The behavior of Azure runtime if container has stopped.')
@allowed([
  'Always'
  'Never'
  'OnFailure'
])
param restartPolicy string = 'Always'

resource acr 'Microsoft.ContainerRegistry/registries@2022-12-01' existing = {
  name: acrName
  scope: resourceGroup(acrResourceGroupName)
}

resource name_resource 'Microsoft.ContainerInstance/containerGroups@2022-12-01' = {
  name: name
  location: location
  properties: {
    containers: [
      {
        name: name
        properties: {
          image: image
          ports: [
            {
              port: port
              protocol: 'TCP'
            }
          ]
          resources: {
            requests: {
              cpu: cpuCores
              memoryInGB: memoryInGb
            }
          }
        }
      }
    ]
    imageRegistryCredentials: [
      {
        server: '${acrName}.azurecr.io'
        username: acrName
        password: listKeys(resourceId(acrResourceGroupName, 'Microsoft.ContainerRegistry/registries', acrName), '2021-07-01-preview').passwords[0].value
      }
    ]
    osType: 'Linux'
    restartPolicy: restartPolicy
    ipAddress: {
      type: 'Public'
      ports: [
        {
          port: port
          protocol: 'TCP'
        }
      ]
    }
  }
  dependsOn: [
    acr
  ]
}

output containerIPv4Address string = name_resource.properties.ipAddress.ip
