<template>
    <a href="#" @click="open()" >
    <img src="../assets/img/plan.png" alt="plan" >
    <h2>Учебный план</h2>
    </a>
</template>

<script>
export default {
    methods: {
        open(){
        this.$emit('update', 'study-plan');
      }   
    }
}
</script>
