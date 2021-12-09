<template>
  <div class="wrap">
    <router-view @open1="open" :openedMess="openedMess"></router-view>
  </div>
</template>

<script>
export default {
    
    data(){
        return {
           openedMess: null
        }
    },
    methods: {
     open(post){
       this.openedMess = post
     }
    },  
}
</script>

