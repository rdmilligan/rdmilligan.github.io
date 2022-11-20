
// azure mock
class Azure {
    getCommand() {
        return fetch('json/spihd_azure.json')
        .then(response => response.json())
        .then(json => {return json.command;})
    }
}

const azure = new Azure();
