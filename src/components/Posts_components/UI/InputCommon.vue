<template>
   <input @keyup.enter="checkInput" class="input" type="text">
</template>

<script>
export default {
    emits: ["checkInput"],
    name: 'input-common',
     data(){
        return {
           data: null
        }
    },
    methods: {
        checkInput(event) {
            this.data = event.target.value
            this.$emit('checkInput', this.data)
        }
    }
 
}
</script>

<style scoped>
.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}
</style>