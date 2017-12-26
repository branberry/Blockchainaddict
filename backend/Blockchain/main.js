const sha256 = require('crypto-js/sha256');
const diff = 4;

class Block {
    constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    /*
        This function takes in an integer to calculate mining difficulty
        Goal of mining is to randomly generate a hash value starting with a number of zeros based on the difficulty
        because the value of the current hash is contigent on the previous hash value and the rest of the data of the block such as the data, timestamp, and index,
        re-calcuating the hash will only change the value once.  To solve this, a 'nonce' value is introduced and is incremented so when the block is being mined, it does not
        get stuck in an infinite loop.
    */
    mineBlock(difficulty) {
        while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block mined: " + this.hash);
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = diff;
    }

    /*
        The genesis block is the first block in the chain.  This function generates our genesis block
    */
    createGenesisBlock() {
        return new Block(0,'2017-12-22', 'Genesis block', '0');
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1]
    }

    /* 
        Generates the block  using the mining algorithm with the given difficulty which is a part of the block chain
    */
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid() {
        for(let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if(currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }

            if(previousBlock.hash !== previousBlock.calculateHash()){
                return false;
            }
        }
        return true;
    }
}

let brandoCoin = new Blockchain();

console.log('mining block 1...');
brandoCoin.addBlock(new Block(1,'2017-12-23',{amount: 12}));