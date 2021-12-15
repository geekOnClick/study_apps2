<template>
<div class="card card-w70">  
  <h3 v-if="info.length == 0">Добавьте первый блок, чтобы увидеть результат</h3>
  <component
    v-else 
    v-for="infoBlock in info" 
    :key="infoBlock" 
    :is="'resume' + infoBlock.type"
    v-bind="{value: infoBlock.text}"
  ></component>
  <br>
    <app-button @click="$emit('save')">Сохранить резюме</app-button>
    <app-button @click="$emit('load')">Загрузить резюме</app-button>
    <app-button @click="$emit('refresh')">Внести изменения</app-button>
 </div>
</template>

<script>
import resumeTitle from './options/resumeTitle.vue'
import resumeSubtitle from './options/resumeSubtitle.vue'
import resumeAvatar from './options/resumeAvatar.vue'
import resumeText from './options/resumeText.vue'
import AppButton from './AppButton.vue'

export default {
    emits:['save', 'load', 'refresh'],
    props:['info', 'CVExist'],
    data(){
        return {
            

        }
    },
    methods: {
    
    },
    components: {resumeTitle, resumeSubtitle, resumeAvatar, resumeText, AppButton}
}
</script>