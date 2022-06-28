import Vue from 'vue'
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import Divider from 'primevue/divider';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';


Vue.use(PrimeVue, { ripple: true });
Vue.use(ToastService)
Vue.component('Button', Button);
Vue.component('Password', Password);
Vue.component('InputText', InputText);
Vue.component('Divider', Divider);
Vue.component('Toast', Toast);
//other components that you need