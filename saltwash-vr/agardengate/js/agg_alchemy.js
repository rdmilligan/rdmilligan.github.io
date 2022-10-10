
// alchemy mock
class Alchemy {
    constructor() {
        this.core = new class {
            getTransaction(transactionHash) {
                return {from: '0x4B631dA32DDBb757CAdf4b257E72daF6cCB21914'};
            }
        }
    }
}

const alchemy = new Alchemy();
