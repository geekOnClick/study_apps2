<template>
    <a href="#" @click="open()" >
    <img src="../assets/img/calculator.jpg" alt="calc" >
    <h2>Калькулятор</h2>
    </a>
</template>

<script>
export default {
    methods: {
        open(){
        this.$emit('update', 'calculator');
      }   
    }
}
</script>


