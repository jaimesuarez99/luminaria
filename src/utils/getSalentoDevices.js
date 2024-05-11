import axios from "axios";

export async function getToken(username, password, cmsUid) {
    try {
        const url = 'https://celsa.pdxeng.ch:8000/cms/api/v1.0/token';
        const requestBody = {
            username: username,
            password: password,
            cms_uid: cmsUid
        };

        const response = await axios.post(url, requestBody);

        const token = response.data.token;
        console.log(token);
        return token;
    } catch (error) {
        console.error(`Error obtaining token: ${error}`);
        return null;
    }
}

export async function getZonesList(token) {
    try {
        const url = 'https://celsa.pdxeng.ch:8000/cms/api/v1.0/zones';
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.get(url, { headers });

        const zonesList = response.data.zones.map(zone => ({
            zone_id: zone.zone_id,
            name: zone.name,
            // Add more properties here as needed
        }));
        console.log('Zones list:', zonesList);
        return zonesList;
    } catch (error) {
        console.error(`Error executing getZonesList: ${error}`);
        return null;
    }
}

export async function getDevicesByType(token, device_family_id, zone_id) {
    try {
        const url = `https://celsa.pdxeng.ch:8000/cms/api/v1.0/zones/${zone_id}/devices`;
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.get(url, { headers });

        const devices = response.data.devices;
        console.log('Devices:', devices);

        const filteredDevices = devices.filter(device => device.device_family_id === device_family_id);
        console.log('Filtered Devices:', filteredDevices);
        return filteredDevices;
    } catch (error) {
        console.error(`Error executing sebas_test: ${error}`);
        return null;
    }
}


export async function getDeviceInfo(token, device_uid) {
    try {
        const url = `https://celsa.pdxeng.ch:8000/cms/api/v1.0/data/last/devices/${device_uid}/objects?page=1`;
        console.log(url);
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.get(url, { headers });

        const objects = response.data.objects;
        const relevantLightInfo = objects.find(object => object.object_id === 27011);
        const lightResources = relevantLightInfo.resources;

        const lightStatus = {};

        lightResources.forEach(resource => {
            lightStatus[resource.name] = resource.value;
        });

        console.log('Light Status:', lightStatus);
        return lightStatus;
    } catch (error) {
        console.error(`Error executing getDeviceInfo: ${error}`);
        return null;
    }
}

// const token = 'eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIn0.i9B8uQwp8XjffRNixJO6_UpaFjeIxbEVd8AtQsYrziBv9LjEg3rEdAcN_tCm4X0XTQZ8g5NG2kghhownrmCGFjotz-7UmtHi.v18odDC2YnAeZU9w6Z-VJg.hLiDPXKbf7N6sOM_-uPQRN-eWfi4edLvlb10vvbodgsoFIEzpD72CaStBGan28BWESOHjHnFvi871JeLCKypDY7S1ypdGA0NbXzkwC6O-7dQXOyH8IzVNKvM4rw6mlazKguSgu3x0Ze4lHnkRWT477-I2nIK69kRpQ0tnYNBRy7naHwi50l02jyMggt1wVHZbdTwvxk9UlrsmKW4t2YOnXdNgDlRW7UgEEGwdWa65ygW2kWmn4NVAVAS6s5ChEdQ.Ou5mN3PmsCkygKvMbq96V4vP64noaFAqMBH9MMhIPXQ';

// getDeviceInfo(token, '0103279E240CEF00');
// getZonesList(token);
// (async () => {
//   if (token) {
//       await getDevicesByType(token, 1, 11);
//   }
// })();
