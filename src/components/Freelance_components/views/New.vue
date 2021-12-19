<template>
  <form class="card" @submit.prevent>
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="name">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!name&&!date&&!description" @click="addNewData('primary')">
      Создать </button>
  </form>
</template>


<script>
export default {
  data() {
      return {
        name: null,
        date: null,
        description: null,
        newData: {}
    }
  },
  methods: {
    addNewData(status) {
      this.newData = {
        name: this.name,
        date: new Date(this.date).toLocaleDateString(),
        description: this.description,
        status: status,
        text: 'Создан'
      }
      this.$store.commit('freelanceStore/collectNewData', this.newData)
      if(new Date(this.date) < new Date()){
        this.newData.status = "danger"
        this.newData.text = 'Отменен'
        this.$store.commit('freelanceStore/deductionActiveTasks')
      }
      this.$router.push('/freelance')
    }
  }
}
</script>

<style scoped>
.card {
    overflow: hidden;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
    background: #fff;
}
.form-control {
    position: relative;
    margin-bottom: 0.5rem;
}

.form-control input,
.form-control select,
.form-control textarea{
    font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
    margin: 0;
    outline: none;
    border: 2px solid #ccc;
    display: block;
    width: 100%;
    color: #2c3e50;
    padding: 0.5rem 1.5rem;
    border-radius: 3px;
    font-size: 1rem;
    resize: none;
}

.form-control small {
    color: #e53935;
}

.form-control.invalid input {
    border-color: #e53935;
}

.form-checkbox {
    margin-bottom: 1rem;
}

.form-checkbox .label {
    display: block;
    margin: 0 0 0.3rem 0.3rem;
    font-weight: 500;
}

.form-checkbox .checkbox input {
    margin-right: 1rem;
}

.form-control label {
    display: block;
    margin: 0 0 0.3rem 0.3rem;
    font-weight: 500;
}

.form-control input:active,
.form-control input:focus {
    transition: border 0.22s;
    border: 2px solid #42b983;
}
</style>