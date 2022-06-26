<template>
  <div>
    <h2>Todo Application</h2>
    <router-link to="/">Home</router-link>
    <AddTodo @add-todo="addTodo" />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <hr />
    <!-- Если сейчас идет загрузка, то показываем Loader -->
    <Loader v-if="loading" />
    <!--
      Для передачи данных в компонент TodoList (в данном случае массив todos) необходимо использовать атрибут v-bind
      Через двоеточие мы указываем название переменной, которую мы хотим передать
      И в качестве значения мы передаем тот массив todos внутри объекта, который возвращается методом data() 
      Для получения доступа к переменной в дочерних компонентах необходимо использовать имя, которое указано после двоеточия

      Директиву v-on можно заменить @ для более краткой записи

      С помощью директивы v-if мы можем проверить есть ли что-то в массиве todos,
      и в случае если он пустой, то мы не будем отображать компонент TodoList
    -->
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
    />
    <!-- А если в нем ничего нет, то с помощью директивы v-else мы покажем определенный текст -->
    <p v-else>No todos!</p>
  </div>
</template>

<script>
// Значок @ всегда указывает в папку src
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "App",
  // Для хранения данных, необходимо реализовать метод data(), который будет возвращать объект с данными
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all",
    };
  },
  // У любого компонента во Vue есть lifecycle хуки, которые позволяют определить
  // на каком этапе построения сейчас находится компонент
  // И мы можем сделать HTTP запрос, когда весь компонент уже подготовил HTML шаблон и поместил его в DOM дерево
  mounted() {
    fetch("http://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 1000);
      });
  },
  // С помощью поля watch мы можем создать функции, название которых должно
  // совпадать с той моделью, за которой мы следим или за любой другой переменной
  // Т.е. если мы хотим смотреть за изменениями поля loading, то мы должны создать функцию loading()
  // watch: {
  //   filter(value) {
  //     console.log(value);
  //   },
  // },
  // В вычисляемых свойствах мы можем написать функции, в которых мы обычно прописываем логику,
  // которая зависит от каких-либо моделей или переменных, которые меняются во Vue
  computed: {
    // Данная функция будет зависеть от модели this.filter и будет откликаться при его изменении
    // На самом деле, данная функция является переменной, значит мы можем пользоваться ею в коде, как переменной
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }

      if (this.filter === "completed") {
        return this.todos.filter((t) => t.completed);
      }

      if (this.filter === "not-completed") {
        return this.todos.filter((t) => !t.completed);
      }
    },
  },
  methods: {
    // Что-то похожее (как в TodoList) мы делаем и в компоненте App
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
  components: {
    // Теперь нам необходимо зарегистрировать импортированный объект, чтобы мы могли им воспользоваться внутри template
    TodoList,
    AddTodo,
    Loader,
  },
};
</script>