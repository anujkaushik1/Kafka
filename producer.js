const { connectProducer } = require("./producer_client");

async function main(){
    const producer = await connectProducer();

    const messageData = [
        {
            name: "anuj",
            value: "haha",
            location: "north"
        },
        {
            name: "test_anuj",
            value: "hello-world",
            location: "north"
 
        }
    ]

    await producer.send({
        topic: 'rider-updates',
        messages: [
            { key: 'key1', value: JSON.stringify(messageData)  },
        ],
        partition: 0 // send this message to north
    })
    
    console.log('Producer message sent');
    

    await producer.disconnect(); 
}

main();