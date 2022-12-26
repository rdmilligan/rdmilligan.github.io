
// azure mock
class Azure {
    getSecurityCameraPositions() {
        return fetch('json/mfs_azure.json')
        .then(response => response.json())
            .then(json => json.securityCameraPositions)
    }
}

const azure = new Azure();
