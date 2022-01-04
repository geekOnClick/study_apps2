<template>
    <button-common class="home" @click="$router.push('/')"
        >На главную</button-common
    >
    <div class="appPosts">
        <h1>Открытый пост с помощью emit+props</h1>
        <div v-if="opened !== null">
            <div class="post" >
            <div>
           <div><strong>Id</strong>: {{ opened.id }}</div>
           <div><strong>Название</strong>: {{ opened.title }}</div>
           <div><strong>Описание</strong>: {{ opened.body }}</div>
            </div>
        </div>
        </div>
        <br>
        <h1>Открытый пост с помощью $store</h1>
        <div v-if="openedPostWithStore !== null">
            <div class="post" >
            <div>
           <div><strong>Id</strong>: {{ openedPostWithStore.id }}</div>
           <div><strong>Название</strong>: {{ openedPostWithStore.title }}</div>
           <div><strong>Описание</strong>: {{ openedPostWithStore.body }}</div>
            </div>
        </div>
        </div>
    </div>
</template>

<script> 
import ButtonCommon from '../components/Posts_components/UI/ButtonCommon.vue';
// import { mapState } from 'vuex'
export default {
  components: { ButtonCommon },
    emits: ['open1'],
    props: ['openedMess'],
    data() {
        return {
            openedPostWithStore: this.$store.state.postStore.openedPost,
            opened: this.openedMess
        };
    },
    methods: {
        
    },
    
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.appPosts {
    padding: 20px;
    color: whitesmoke;
}
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
