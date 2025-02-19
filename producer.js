const { connectProducer } = require("./producer_client");

function getFormattedDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

async function main(){
    const producer = await connectProducer();

    const messageData = [
        {
            name: "anuj",
            value: "haha",
            location: "north",
            date: getFormattedDate(),
        },
        {
            name: "test_anuj",
            value: "hello-world",
            location: "north",
            date: getFormattedDate()

 
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