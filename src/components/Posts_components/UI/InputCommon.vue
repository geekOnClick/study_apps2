<template>
   <input @keyup.enter="checkInput" class="input" type="text" v-model="data" placeholder="Поиск по названию...">
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
    width: 40%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
    box-shadow: 20px -15px 10px 5px rgba(0, 0, 0, .2);
    border-radius: 5px;

}
</style>