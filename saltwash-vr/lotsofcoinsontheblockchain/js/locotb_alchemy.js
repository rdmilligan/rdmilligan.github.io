
// alchemy mock
class Alchemy {
    constructor() {
        this.core = new class {
            constructor() {
                this.state = { blockNumber: 15567265 };
            }

            getBlockNumber() {
                this.state.blockNumber++;
                return this.state.blockNumber;
            }
        }
    }
}

class AlchemyState {
    constructor() {
        this.blockNumber = 0;
    }
}

const alchemy = new Alchemy();
const alchemyState = new AlchemyState();
