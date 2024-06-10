import './assets/main.css'
import 'primevue/resources/themes/aura-light-blue/theme.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import VueApexCharts from "vue3-apexcharts";

//primeVue
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import ProgressBar from 'primevue/progressbar';
import Divider from 'primevue/divider';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Slider from 'primevue/slider';
import VueGoogleMaps from 'vue-google-maps-community-fork'

import App from './App.vue'

import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue);
app.use(router);
app.use(VueApexCharts);

app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBIabUI1KSokfaH7IMICXnOP4dQqdIbdtw',
  },
});
app.component('Button', Button);
app.component('Card', Card);
app.component('Column', Column);
app.component('Row', Row);
app.component('DataTable', DataTable);
app.component('ColumnGroup', ColumnGroup);
app.component('Dropdown', Dropdown);
app.component('ProgressBar', ProgressBar);
app.component('Divider', Divider);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('Slider', Slider);

app.mount('#app')
