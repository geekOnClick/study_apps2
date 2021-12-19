<template>
        <div class="post" >
            <div>
           <div><strong>Id</strong>: {{ post.id }}</div>
           <div><strong>Название</strong>: {{ post.title }}</div>
           <div><strong>Описание</strong>: {{ post.body }}</div>
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
.post {
    padding: 15px;
    margin-top: 15px;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:whitesmoke;
    text-align: start;
}
</style>