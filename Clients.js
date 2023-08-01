export class Clients {
    constructor(){
        this.clientList = {};
        this.saveClient = this.saveClient.bind(this);
    }

    saveClient(clientId, client){
        this.clientList[clientId] = client;
    }
}