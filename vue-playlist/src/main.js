// Vue ve Vue Router bileşenlerini içe aktarın
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

// Vue uygulamasını oluşturun
const app = createApp(App);

// Global özellikler içine bir filtre ekleyin
app.config.globalProperties.$filters = {
    // 'buyutFiltre' adında bir filtre tanımlayın, bu filtre metni büyük harfe çevirir
    buyutFiltre(title) {
        return title.toUpperCase();
    }
}

// Vue Router'ı uygulamaya ekleyin.
app.use(router);

// Vue uygulamasını belirtilen HTML elemanına bağlayın
app.mount("#app");
