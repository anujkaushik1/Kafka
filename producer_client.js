const { kafka } = require("./kafka_client");

async function connectProducer(){
    try {
        const producer = kafka.producer();
        await producer.connect();
    
        console.log('Producer connected successfully ...');

        return producer;

    } catch (error) {
        console.log(`[producer] connection_err:${error.message }`);
        
    }
    
}

module.exports = {connectProducer};