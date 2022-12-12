
// azure mock
class Azure {
    getWaitTime() {
        return fetch('json/rtm_azure.json')
        .then(response => response.json())
        .then(json => json.waitTime)
    }
}

const azure = new Azure();
