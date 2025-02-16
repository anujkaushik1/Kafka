const { connectProducer } = require("./producer_client");

async function main(){
    const producer = await connectProducer();

    const messageData = [
        {
            name: "anuj",
            value: "haha"
        },
        {
            name: "test_anuj",
            value: "hello-world"
        }
    ]

    await producer.send({
        topic: 'rider-updates',
        messages: [
            { key: 'key1', value: messageData  },
        ],
        partition: 0 // send this message to north
    })
}