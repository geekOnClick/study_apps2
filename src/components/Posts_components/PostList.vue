<template>
<input-common  @checkInput="checkInput"></input-common>
<div v-if="posts.length > 0">
<h3>Список постов:</h3>
<post-item  v-for="post in posts" :key="post.id" :post="post" @open1="$emit('open1', post)" @remove="$emit('remove', post)"/>
</div>
<h2 v-else>Поcты отсутствуют</h2>  
</template>

<script>
import PostItem from "./PostItem"

export default {
    emits: ['remove', 'find', 'open1'],
    components: {PostItem},
     props: {
        posts: {
            type: Array,    
        }
     },
    data(){
        return {
           data: null
        }
    },
    methods: {
        checkInput(data) {
            this.data = data
            this.$emit('find', this.data)
        }
    },
       
}
</script>

<style scoped>

</style>