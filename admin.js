const { kafka } = require("./kafka_client");

async function main() {
  try {
    const admin = kafka.admin();
    await admin.connect();
    console.log("admin connection success...  ");

    await createTopic(admin);

  } catch (error) {
    console.log(`[admin] connection failure: ${error.message}`);
    
  }
}

async function createTopic(admin){
    try {      
        await admin.createTopics({
            topics: [
                {
                    topic: 'rider-updates',
                    numPartitions: 2 // one for north and other for south
    
                }
            ]
        })
        console.log('Topic created successfully');

        await admin.disconnect();
        
    } catch (error) {   
        console.log(`[createTopic], err: ${error.message}`);
        
    }

}

main();
