<template>
    <a href="#" @click="open()" >
    <img src="../assets/img/posts.png" alt="posts" >
    <h2>Посты в приложении</h2>
    </a>
</template>

<script>
export default {
    methods: {
        open(){
        this.$emit('update', 'posts');
      }   
    }
}
</script>

