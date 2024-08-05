<template>
    <nav>
        <ul>
            <!-- Blog'ları Göster sayfasına yönlendiren bağlantı -->
            <li><router-link to="/">Blog'ları Göster</router-link></li>
            <!-- Blog Ekle sayfasına yönlendiren bağlantı -->
            <li><router-link to="/ekle">Blog Ekle</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
/* Liste stilini ayarla */
ul {
    list-style-type: none; /* Liste madde işaretlerini kaldır */
    text-align: center;    /* Listeyi ortala */
    margin: 0;             /* Margin'i sıfırla */
}

/* Liste öğelerini satır içi blok olarak düzenle */
li {
    display: inline-block;
    margin: 0 10px;        /* Sol ve sağda boşluk bırak */
}

/* Bağlantı stilini ayarla */
a {
    color: #fff;           /* Bağlantı rengi beyaz */
    text-decoration: none; /* Bağlantı altını çizme */
    padding: 6px 8px;     /* İçeride boşluk bırak */
    border-radius: 10px;  /* Köşeleri yuvarla */
}

/* Navigasyon menüsü stilini ayarla */
nav {
    background: #444;     /* Arka plan rengini koyu gri yap */
    padding: 14px 0;      /* Üst ve alt padding */
    margin-bottom: 40px;  /* Alt boşluk bırak */
}

/* Aktif bağlantı için stil */
.router-link-active {
    background: #eee;     /* Arka plan rengini açık gri yap */
    color: #444;          /* Yazı rengini koyu gri yap */
}
</style>
