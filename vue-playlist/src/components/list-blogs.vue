<script setup>
// Rastgele renkler için bir direktif tanımlayın
const vRainbow = {
    mounted: (el) => el.style.color = "#" + Math.random().toString().slice(2, 8)
}
</script>

<template>
    <div id="show-blogs">
        <h1>Tüm Blog Gönderileri Başlıkları</h1>
        <!-- Bloglarda arama yapmak için input -->
        <input type="text" v-model="keyword" placeholder="Bloglarda ara...">

        <!-- Filtrelenmiş blogları göster -->
        <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
            <!-- Başlıkları büyük harfe çevirir ve rastgele renk verir -->
            <h2 v-rainbow>{{ $filters.buyutFiltre(blog.title) }}</h2>
        </div>
    </div>
</template>

<script>
// Karışımları içe aktar
import mixins from '../mixins'

export default {
    data() {
        return {
            blogs: [],          // Blog verilerini saklar
            keyword: ""         // Arama anahtar kelimesini saklar
        }
    },
    methods: {
        // Başlıkları büyük harfe çevirir
        buyut(title) {
            return title.toUpperCase();
        }
    },
    computed: {
        // Başlıkları büyük harfe çeviren computed property
        buyutComputed() {
            return (title) => title.toUpperCase();
        },
        // Arama anahtar kelimesine göre blogları filtreler
        filteredBlogs() {
            return this.blogs.filter(blog => blog.title.match(this.keyword));
        }
    },
    created() {
        // Bileşen oluşturulduğunda çalışır
        // Blog verilerini almak için API çağrısı yapar
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'GET',                    // GET isteği, veri almak için
            headers: {
                'Content-Type': 'application/json' // Gönderilen içeriğin JSON formatında olduğunu belirtir
            }
        })
        .then(res => res.json())              // Yanıtı JSON formatına dönüştür
        .then(json => {
            console.log(json);               // API yanıtını konsola yazdırır
            this.blogs = json.slice(0, 10); // İlk 10 blog gönderisini alır ve blogs dizisine atar
        })
        .catch(err => {
            console.log(err);                // Hata oluşursa konsola yazdırır
        });
    },
    mixins: [mixins]                        // Karışımları (mixins) içe aktarır
}
</script>

<style scoped>
#show-blogs {
    max-width: 800px;
    margin: 0px auto;
}
.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: #e2e2e2;
    border-radius: 5px;
}
input:hover {
    border: 3px solid #ccc;
}
</style>
