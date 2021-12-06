<template>
            <form @submit.prevent>
                <h4>Создание поста</h4>
                <input-common 
                v-model="post.title"
                type="text" 
                placeholder="Название" />
                <input-common 
                v-model="post.body"
                type="text" 
                placeholder="Описание" />

               <button-common
                class="btn"
                @click="createPost">Создать
               </button-common>
            </form>
</template>

<script>
import InputCommon from './UI/InputCommon.vue'
export default {
  components: { InputCommon },   
    data(){
        return {
           post: {
               title: '',
               body: ''
           }
        }
    },
    methods: {
     createPost(){
          this.post.id = Date.now(),
          this.$emit('create', this.post),
          this.post = {
              title:'',
              body:''
          }
      }
    },  
}
</script>

<style scoped>

form {
    display: flex;
    flex-direction: column;
}
.btn {
    align-self: flex-end;
    margin-top: 15px;
}
h4 {
    color: tomato;
}
</style>>

