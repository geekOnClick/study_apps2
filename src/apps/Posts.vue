<template>
    <button-common class="home" @click="$router.push('/')">На главную</button-common>
    <div class="appPosts">
        <h1>Страница постов</h1>
        <button-common style="margin: 15px 0;" @click="showDialog">Создать пост</button-common>
        <dialog-common v-model:show="dialogVisible">
        <post-form 
            @create='createPost' 
        />
        </dialog-common>
        
        <post-list 
        :posts='posts'
        @remove="removePost"
        />    
    </div>
</template>

<script>
import PostForm from '../components/Posts_components/PostForm.vue'
import PostList from '../components/Posts_components/PostList.vue'
import DialogCommon from '../components/Posts_components/UI/DialogCommon.vue'

export default {
    components: {
        PostList, PostForm,
        DialogCommon
    },
    data(){
        return {
            posts: [
                {id:1, title: 'Javascript 1', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sapiente!'},
                {id:2, title: 'Javascript 2', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sapiente!'},
                {id:3, title: 'Javascript 3', body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sapiente!'}
            ],
            dialogVisible: false,
        }
    },
    methods: {
      createPost(post){
          this.posts.push(post)
          this.dialogVisible = false
      },
      removePost(post){
          this.posts.splice(this.posts.indexOf(post), 1)
      },
      showDialog() {
          this.dialogVisible = true 
      }
      
    }    
}
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
</style>