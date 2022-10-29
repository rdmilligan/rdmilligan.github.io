
// alchemy mock
class Alchemy {
    constructor() {
        this.core = new class {
            getGasPrice() {
                return 0x3b2a9a02de;
            }
        }
    }
}

const alchemy = new Alchemy();
