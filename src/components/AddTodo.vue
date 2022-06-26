<template>
  <!-- Для того, чтобы превентить обычное поведение при сабмита формы, мы можем использовать следующий синтаксис -->
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  // Для получения данных с формы во Vue используются модели
  data() {
    return {
      // Для того, чтобы превратить поле title в модель, необходимо добавить новый атрибут v-model к input
      title: "",
    };
  },
  methods: {
    onSubmit() {
      // Для того, чтобы достать значение модели, мы можем достать его через this
      // (все, что возвращает метод data(), доступно через this)
      console.log("Submit", this.title);
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };

        // Сообщаем компоненту App, что мы добавили новый Todo
        this.$emit("add-todo", newTodo);
        // Чистим поле title
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input {
  width: 400px;
}
</style>