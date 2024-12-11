### **Objective**

Develop a Fleet Management System.

---

### **Features of the System**

1. **Fleet Tracking**:
   - Enable the fleet owner(s) to track all vehicles in the fleet.

2. **Vehicle Data Communication**:
   - Vehicles must communicate all relevant data to the server using technologies like IoT, MQTT, or CAN protocols.

3. **Software/Firmware Updates**:
   - Local software/firmware on vehicles must support Over-The-Air (OTA) or Firmware Over-The-Air (FOTA) updates.
   - Updates should be deployable in batches with mechanisms to track:
     - Successful updates.
     - Failed updates.

4. **Live Monitoring**:
   - Provide real-time tracking of:
     - Vehicle health.
     - Live location.
     - Live speed.
   - Record and make available:
     - Travel history.
     - Regular maintenance history.
   - Notify fleet owners about:
     - Upcoming maintenance schedules.
     - Any due maintenance tasks requiring special attention.

5. **Emergency Handling**:
   - In case of a vehicle breakdown:
     - The vehicle should send SOS signals to:
       - Nearby vehicles.
       - The fleet owner.

---
