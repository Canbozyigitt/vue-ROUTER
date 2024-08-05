<template>
  <div>
    <!-- Header bileşeni burada render edilir -->
    <app-header></app-header>
    <!-- router-view, Vue Router tarafından dinamik olarak bileşenlerin render edilmesini sağlar -->
    <router-view></router-view>
  </div>
</template>

<script>
// Bileşenleri import eder
import AddBlog from './components/add-blog.vue'
import ShowBlogs from './components/show-blogs.vue'
import ListBlogs from './components/list-blogs.vue'
import Header from './components/header.vue'

export default {
  // Bileşenleri tanımlar
  components: {
    "add-blog": AddBlog,
    "show-blogs": ShowBlogs,
    'list-blogs': ListBlogs,
    'app-header': Header,
  },
  data() {
    return {
      // Veri tanımları burada yapılabilir (şu anda boş)
    }
  }
}
</script>

<style scoped>
/* Stil tanımlamaları buraya eklenebilir */
</style>
