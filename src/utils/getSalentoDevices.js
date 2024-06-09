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
        return error;
    }
}

export async function checkToken() {
    try {
        const token = sessionStorage.getItem('authToken');
        const url = `https://celsa.pdxeng.ch:8000/cms/api/v1.0/token?token=${token}`;
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.get(url, { headers });

        if (response.status === 200 && response.data.response_code === 200) {

            return true;
        }
    } catch (error) {
        console.error(`Error checking token: ${error}`);
        return false;
    }
}
export async function getZonesListTreeView() {
    try {
        const token = sessionStorage.getItem('authToken');
        const url = 'https://celsa.pdxeng.ch:8000/cms/api/v1.0/zones/treeView';
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.get(url, { headers });
        const zonesList = response.data.zones_treeview.children.map(zone => ({
            zone_id: zone.zone_id,
            name: zone.name,
            // Add more properties here as needed
        }));
        console.log('Zones list:', zonesList);
        return zonesList;
    } catch (error) {
        console.error(`Error executing getZonesList: ${error}`);
        return error;
    }
}
export async function getZonesList() {
    try {
        const token = sessionStorage.getItem('authToken');
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
        return error;
    }
}

export async function getDevicesByType(device_family_id = 1, zone_id = 1) {
    try {
        const token = sessionStorage.getItem('authToken');

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
        return error;
    }
}


export async function getDeviceInfo(device_uid) {
    try {
        const token = sessionStorage.getItem('authToken');

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
