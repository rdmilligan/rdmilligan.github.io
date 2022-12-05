
// azure mock
class Azure {
    getWashTime() {
        return fetch('json/las_azure.json')
        .then(response => response.json())
        .then(json => json.washTime)
    }
}

const azure = new Azure();
