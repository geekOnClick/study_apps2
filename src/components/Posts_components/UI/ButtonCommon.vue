<template>
   <button class="btn">
       <slot />
   </button>
</template>

<script>
export default {
    
    name: 'button-common'   
}
</script>

<style scoped>
.btn {
    padding: 10px 15px;
    background: none;
    border: 1px solid teal;
    text-align: center;
}
</style>