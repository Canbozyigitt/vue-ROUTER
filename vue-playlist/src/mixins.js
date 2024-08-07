export default {
    computed: {
        // 'filteredBlogs' adlı computed property, 'blogs' dizisindeki blog yazılarını filtreler.
        filteredBlogs() {
            // 'blogs' dizisini filtreler ve 'title' özelliğinde 'keyword' ile eşleşen blog yazılarını döndürür
            return this.blogs.filter(blog => blog.title.match(this.keyword));
        }
    }
}
