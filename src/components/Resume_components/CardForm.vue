<template>
<form class="card card-w30" @submit.prevent="submit">
      <div class="form-control">
        <label for="type">Тип блока</label>
        <select id="type" @change="change">
          <option value="Title">Заголовок</option>
          <option value="Subtitle">Подзаголовок</option>
          <option value="Avatar">Аватар</option>
          <option value="Text">Текст</option>
        </select>
      </div>
      <div class="form-control">
        <label for="value">Значение</label>
        <textarea id="value"  rows="3" v-model="text"></textarea>
      </div>
       <app-button :disabled='text.length < 4'>Добавить</app-button>
    </form>
</template>

<script>
import AppButton from './AppButton.vue'
export default {
    
    emits:['add'],
    data(){
        return {
           type: 'Title',
           text: ''
        }
    },
    methods: {
        change(event){
            this.type = event.target.value
        },
        submit(){
            this.$emit('add', {
                type: this.type,
                text: this.text
            })
            this.type = ''
            this.text = ''
        }
    },
    components: {AppButton}
}
</script>