const mqtt = require('mqtt');

// Configuration
const options = {
  host: 'broker.hivemq.com',
  port: 1883, // Default MQTT port
  protocol: 'mqtt',
  clientId: `mqtt_client_${Math.random().toString(16).slice(3)}`,
};

const client = mqtt.connect(options);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  // Example telemetry data
  const telemetryData = JSON.stringify({
    vehicleId: 'EV-001',
    battery: 85,
    speed: 50,
    location: { lat: 28.6139, lng: 77.209 },
    timestamp: new Date().toISOString(),
  });

  client.publish('vehicle/data', telemetryData, { qos: 1 }, (err) => {
    if (err) console.error('Publish Error:', err);
    else console.log('Telemetry data published');
  });
});

// Graceful shutdown
process.on('SIGINT', () => {
  client.end(() => console.log('Disconnected from MQTT broker'));
});
