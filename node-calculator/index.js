const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server-service', //specify the name used in the list of services in the docker compose file.
  port: 6379            //this is not necessary but it is the default port
});
client.set('visits',0);

app.get('/', (req,res)=>{
  //process.exit(0);
  res.send('micky mouse and Axa snaxa');
})

app.get('/visits',(req,res)=>{
  client.get('visits', (err, visits)=> {
    res.status(200).json({
      visits: visits
    });
    client.set('visits', parseInt(visits) + 1);
  });
});
 
app.listen(8080, () => {
  console.log('Listening on port 8080');
});


