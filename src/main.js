import './assets/main.css'
import 'primevue/resources/themes/aura-light-blue/theme.css'
import '/node_modules/primeflex/primeflex.css'



import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

//primeVue
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue);
app.use(router)

app.component('Button', Button);
app.component('Card', Card);
app.component('Column', Column);
app.component('Row', Row);
app.component('DataTable', DataTable);
app.component('ColumnGroup', ColumnGroup);
app.component('Dropdown', Dropdown);

app.mount('#app')
