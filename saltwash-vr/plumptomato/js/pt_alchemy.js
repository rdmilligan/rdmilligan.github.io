
// alchemy mock
class Alchemy {
    constructor() {
        this.core = new class {
            getBalance(addressOrName, blockTag = 'latest') {
                return 0x02c68af0bb140000;
            }
        }
    }
}

const alchemy = new Alchemy();
