class Block {
    constructor(data) {
        this.hash = "",
        this.height = "",
        this.tx = data,
        this.time = new Date(),
        this.previousblockhash = ""
    }
}

module.exports = Block;
