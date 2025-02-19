const { kafka } = require("./kafka_client");


async function main() {
  try {
    const consumer = kafka.consumer({
      groupId: "consumer_group_anuj1x",
    });

    await consumer.connect();

    // consumer subscribe on topic
    await consumer.subscribe({topic: "rider-updates", fromBeginning: false});

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log("key = ", message.key.toString());
            console.log("value = ", message.value.toString());
            console.log("parti = ", partition);
            console.log("topic = ", topic);
            console.log('');
            console.log('');
            console.log('');
            
        },
    })

  } catch (error) {
    console.log(`[CONSUMER] err:${error.message}`);
  }
}

main()
