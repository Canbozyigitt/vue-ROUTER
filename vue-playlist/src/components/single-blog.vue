<script setup>
// Rastgele renkler için bir direktif tanımlayın
const vRainbow = {
    mounted: (el) => el.style.color = "#" + Math.random().toString().slice(2, 8)
}
</script>

<template>
    <div id="single-blog">
        <!-- Blog başlığını büyük harfe çevirir ve rastgele renk verir -->
        <h2 v-rainbow>{{ $filters.buyutFiltre(blog.title) }}</h2>
        <!-- Blog içeriğini gösterir -->
        <p>{{ blog.body }}</p>
    </div>
</template>

<script>
// Karışımları içe aktar
import mixins from '../mixins' 

export default {
    data() {
        return {
            id: this.$route.params.id, // URL parametresinden blog ID'sini alır
            blog: {}                  // Tekil blog verisini saklar
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
        }
    },
    created() {
        // Bileşen oluşturulduğunda çalışır
        // Tekil blog verisini almak için API çağrısı yapar
        fetch("https://jsonplaceholder.typicode.com/posts/" + this.id, {
            method: 'GET',                    // GET isteği, veri almak için
            headers: {
                'Content-Type': 'application/json' // Gönderilen içeriğin JSON formatında olduğunu belirtir
            }
        })
        .then(res => res.json())              // Yanıtı JSON formatına dönüştür
        .then(json => {
            console.log(json);               // API yanıtını konsola yazdırır
            this.blog = json;               // Gelen veriyi blog objesine atar
        })
        .catch(err => {
            console.log(err);                // Hata oluşursa konsola yazdırır
        });
    },
    mixins: [mixins]                        // Karışımları (mixins) içe aktarır
}
</script>

<style scoped>
#single-blog {
    width: 960px;                
    margin: 10px auto;          
}
</style>
