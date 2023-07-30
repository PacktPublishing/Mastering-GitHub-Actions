@description('Container image to deploy. Should be of the form repoName/imagename:tag')
param image string = 'mcr.microsoft.com/azuredocs/aci-helloworld'

@description('Location for all resources.')
param location string = resourceGroup().location

@description('the name of the acr with no azurecr.io name')
param acrName string = ''

module aci 'container.bicep' = {
  name: 'app-container'
  params: {
    location: location
    name: 'counter-app'
    image: image
    acrName: acrName
  }
}
