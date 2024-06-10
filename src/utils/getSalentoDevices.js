import axios from "axios";
const baseURL = 'https://celsa.pdxeng.ch:8000/cms/api/v1.0'


export async function getToken(username, password, cmsUid) {
    try {
        const url = `${baseURL}/token`;
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
        const url = `${baseURL}/token?token=${token}`;
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
        const url = `${baseURL}/zones`;
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

export async function getZoneInfo(zone_id) {
    try {
        const token = sessionStorage.getItem('authToken');
        const url = `${baseURL}/zones/${zone_id}`;
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.get(url, { headers });
        const zoneInfo = response.data.zone;
        console.log("zoneInfo:", zoneInfo, zoneInfo.center_lat, zoneInfo.center_lon);
        return zoneInfo
    } catch (error) {
        console.error(`Error executing getZoneInfo: ${error}`);
    }
};

export async function getDevicesByType(device_family_id = 1, zone_id = 1) {
    try {
        const token = sessionStorage.getItem('authToken');

        const url = `${baseURL}/zones/${zone_id}/devices`;
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
        const date = new Date(1718017204*1000);
        console.log('DATE:', date.toLocaleString('es-CO', { timeZone: 'UTC' }))
        const token = sessionStorage.getItem('authToken');
        const url = `${baseURL}/data/last/devices/${device_uid}/objects?page=1`;
        console.log(url);
        
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.get(url, { headers });
        console.log("Raw response:", response);

        const objects = response.data.objects;
        const relevantObjects = objects.filter(object => object.object_id === 27011 || object.object_id === 27027);
        
        const lightStatus = relevantObjects.reduce((acc, object) => {
            object.resources.forEach(resource => {
                acc[resource.name] = resource.value;
            });
            return acc;
        }, {});

        console.log('Light Status:', lightStatus);
        return lightStatus;
    } catch (error) {
        console.error(`Error executing getDeviceInfo: ${error}`);
        return null;
    }
}

export async function getDeviceCommandsByType (device_type_id) {
    try {
        const token = sessionStorage.getItem('authToken');

        const url = `${baseURL}/deviceTypes/${device_type_id}/commands`;
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const response = await axios.get(url, { headers });
        console.log(response)
    } catch (error) {
        console.error(`Error executing sebas_test: ${error}`);
        return error;
    }
}

export async function sendCommand (cmnd_nm, gw_mac, inst_id, dev_type_id, res_id, val) {
    try {
        const token = sessionStorage.getItem('authToken');

        const url = `${baseURL}/deviceTypes/${device_type_id}/commands`;
        const headers = {
            Authorization: `Bearer ${token}`
        };

        const requestBody = {
            command_name: cmnd_nm,
            gateway_mac: gw_mac,
            instance_id: inst_id,
            object_id: dev_type_id,
            Objects: [{
                instance_id: inst_id,
                object_id: dev_type_id,
                resource_id: res_id, //5851 for set dimming status
                resource_value: val
            }]
        }

        const response = await axios.post(url, { headers });
        console.log(response)
    } catch (error) {
        console.error(`Error executing sebas_test: ${error}`);
        return error;
    }
}
