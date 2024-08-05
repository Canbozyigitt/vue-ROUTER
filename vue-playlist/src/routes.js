// Vue Router'ı ve Web History'yi içe aktarın
import { createRouter, createWebHistory } from 'vue-router'

// Rotaları tanımladığınız bileşenleri içe aktarın
import ShowBlogs from './components/show-blogs.vue'
import AddBlog from './components/add-blog.vue'
import SingleBlog from './components/single-blog.vue'

// Router'ı oluşturun ve yapılandırın
const router = createRouter({
    // Tarayıcı tarihini kullanarak tarayıcı URL'sini yönetir
    history: createWebHistory(),
    // Rotaları tanımlayın
    routes: [
        // Ana sayfa rotası, ShowBlogs bileşenini gösterir
        { path: '/', component: ShowBlogs },
        // '/ekle' rotası, AddBlog bileşenini gösterir
        { path: '/ekle', component: AddBlog },
        // '/blog/:id' rotası, SingleBlog bileşenini gösterir ve ':id' dinamik bir parametredir
        { path: '/blog/:id', component: SingleBlog },
    ]
});

// Oluşturulan router'ı dışa aktarın
export default router
