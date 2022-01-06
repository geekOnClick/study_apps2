<template>
        <div class="wrapper">
            <div class="id"><strong>#{{ post.id }}</strong></div>
        <div class="post" >
            <div>
           <div><strong>{{ post.title }}</strong></div>
           <div>{{ post.body }}</div>
            </div>
       </div>
       <div class="post__btns">
                <button-common @click="$emit('open1', post)">$emit-props</button-common>
                <button-common @click="$store.commit('postStore/openNewPost', post)">$store</button-common>
                <button-common
                @click="$emit('remove', post)">Удалить</button-common>
        </div>
       </div>
</template>

<script>
export default {
    emits: ['remove', 'open1'],
     props: {
        post: {
            type: Object,
            required: true
        }
     },
    data(){
        return {
           postId: null,
           selectedPost: null
        }
    },
    methods: {
     selectPost(id){
         this.postId = id
     },
    },  
}
</script>

<style scoped>
.wrapper {
    height: 300px;
    padding: 15px;
    margin-top: 15px;
    border: 1px solid grey;
    box-shadow: 20px -15px 10px 5px rgba(0, 0, 0, .2);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 10px;
    background: whitesmoke radial-gradient(circle at 50% 0, rgba(255,255,255,.65), rgba(255,255,255,.35));
}
.post {
    border: 0;
    color:black;
    text-align: start;
    border-left: 1px solid lightgrey;
    line-height: 1.5;
    min-width: 670px;
}
.id {
    color: black;
}
</style>