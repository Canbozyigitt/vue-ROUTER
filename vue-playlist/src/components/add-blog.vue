<template>
    <div id="add-blog">
        <!-- Blog formu gösterimi, 'submitted' false olduğunda görüntülenir -->
        <h2 v-if="!submitted">Yeni Blog Post Ekleme Formu</h2>
        <form v-if="!submitted" action="#">
            <!-- Blog başlığı girişi -->
            <label for="title">Blog Başlığı</label>
            <input type="text" v-model.lazy="blog.title" required>

            <!-- Blog içeriği girişi -->
            <label for="content">Blog İçeriği</label>
            <textarea v-model.lazy="blog.content"></textarea>

            <!-- Kategoriler için checkbox'lar -->
            <div id="checkboxes">
                <label>Çizgi Roman</label>
                <input type="checkbox" value="Çizgi Roman" v-model="blog.categories">

                <label>Hikaye</label>
                <input type="checkbox" value="Hikaye" v-model="blog.categories">

                <label>Masal</label>
                <input type="checkbox" value="Masal" v-model="blog.categories">

                <label>Şiir</label>
                <input type="checkbox" value="Şiir" v-model="blog.categories">
            </div>

            <!-- Yazar seçimi için select -->
            <label for="author">Yazar:</label>
            <select v-model="blog.author">
                <option value="">Lütfen Yazar Seçiniz</option>
                <option v-for="author in authors" v-bind:value="author">{{ author }}</option>
            </select>

            <!-- Gönder butonu -->
            <p><button v-on:click.prevent="gonder">Blog'lara Ekle</button></p>
        </form>

        <!-- Başarıyla gönderildiğinde gösterilen mesaj ve buton -->
        <div v-if="submitted">Tebrikler, mesajınız başarı ile alındı. <button v-on:click="newblog">Yeni Blog Ekle</button></div>

        <!-- Blog ön izleme, 'submitted' false olduğunda gösterilir -->
        <div id="preview" v-if="!submitted">
            <h3>Blog Ön İzleme</h3>
            <p>Blog Başlığı: {{ blog.title }}</p>
            <p>Blog İçeriği:</p>
            <p>{{ blog.content }}</p>
            <ul>
                <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>Yazar: {{ blog.author }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blog: {
                title: "",
                content: "",
                categories: [], // Seçilen kategoriler
                author: ""
            },
            authors: ["Gökhun", "Elif", "Han", "Alper", "Yağız", "Melih"], // Yazar seçenekleri
            submitted: false // Form gönderildi mi?
        }
    },
    methods: {
        gonder: function() {
            // Form verilerini JSON formatında gönderir
            var self = this;

            fetch("https://vue-playlist-6ba34-default-rtdb.firebaseio.com/posts.json", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.blog)
            }).then((res) => res.json())
              .then(function(json) {
                  console.log(json);
                  self.submitted = true;
              }).catch(function(err) {
                  console.log(err);
                  self.submitted = false;
              });
        },
        newblog: function() {
            // Formu yeniden başlatır
            this.submitted = false;
            this.blog = {
                title: "",
                content: "",
                categories: [],
                author: ""
            };
        }
    }
}
</script>

<style scoped>
#add-blog * {
    box-sizing: border-box;
}
#add-blog {
    margin: 20px auto;
    max-width: 500px;
}
label {
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea {
    display: block;
    width: 100%;
    padding: 8px;
}
#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3 {
    margin-top: 10px;
}
#checkboxes input {
    display: inline-block;
    margin-right: 15px;
}
#checkboxes label {
    display: inline-block;
}
</style>
