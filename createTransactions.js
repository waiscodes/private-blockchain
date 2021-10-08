const Blockchain = require('./blockchain');
const Block = require('./block');

const chainz = new Blockchain()
// console log Genesis block
console.log(chainz.chain[0])

const createNewBlock = () => {
    chainz.addBlock(new Block("Some transactions"))

    console.log(chainz.chain[chainz.chain.length - 1])
}

setInterval(createNewBlock, 5000);
