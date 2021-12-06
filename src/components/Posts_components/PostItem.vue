<template>
        <div class="post" >
            <div>
           <div><strong>Название</strong>: {{ post.title }}</div>
           <div><strong>Описание</strong>: {{ post.body }}</div>
            </div>
            <div class="post__btns">
                <button-common
                @click="$emit('remove', post)">Удалить</button-common>
            </div>
       </div>
</template>

<script>
export default {
     props: {
        post: {
            type: Object,
            required: true
        }
     },
    data(){
        return {
           
        }
    },
    methods: {
     
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