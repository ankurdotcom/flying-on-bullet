const mqtt = require('mqtt'); // MQTT for lightweight IoT communication

const broker = 'mqtt://broker.hivemq.com';
const client = mqtt.connect(broker);

client.on('connect', () => {
    console.log('Connected to broker');
    const sensorData = {
        battery: 85,
        location: { lat: 28.6139, lng: 77.209 },
        speed: 40
    };
    client.publish('vehicle/data', JSON.stringify(sensorData));
    console.log('Data published');
});
