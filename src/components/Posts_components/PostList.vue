<template>
<div v-if="posts.length > 0">
<h3>Список постов:</h3>
<post-item  v-for="post in posts" :key="post.id" :post="post" @remove="$emit('remove', post)"/>
</div>
<h2 v-else>Поcты отсутствуют</h2>    
</template>

<script>
import PostItem from "./PostItem"
export default {
    components: {PostItem},
     props: {
        posts: {
            type: Array,    
        }
     },
    data(){
        return {
           
        }
    },
    methods: {
     
    }    
}
</script>

<style scoped>

</style>