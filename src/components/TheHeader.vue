<template>
    <header class="header">
   <p>Учебные проекты Козлова А.В.</p>
   <h3>на {{ makeActualDate() }}</h3>
   </header>
</template>

<script>
export default {
   data(){
      return {
         title: 'Header from Data'
      }
   },
    methods: {
     makeActualDate(){
      let today = new Date();
      let mm = String(today.getMonth() + 1).padStart(2, '0');
      let yyyy = today.getFullYear();
      let dd = String(today.getDate()).padStart(2, '0');
      today = dd + '.' + mm + '.' + yyyy;
      return today;
     }
   },
}
</script>