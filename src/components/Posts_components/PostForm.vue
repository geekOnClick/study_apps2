<template>
            <form @submit.prevent>
                <h4>Создание поста</h4>
                <input class="input"
                v-model="title"
                type="text" 
                placeholder="Название" />
                <input class="input"
                v-model="body"
                type="text" 
                placeholder="Описание" />

               <button-common
                class="btn"
                @click="createPost">Создать
               </button-common>
            </form>
</template>

<script>

export default {
    data(){
        return {
            title: '',
            body: '',
        }
    },
    methods: {
     createPost(){
        //   this.post.id = 'new Post'
          let post = {
              title: this.title,
              body: this.body,
              id: 'new Post'
          }
          this.$emit('create', post)
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
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}
</style>>

