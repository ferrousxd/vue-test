import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";

// В первую очередь необходимо зарегистрировать роутер как плагин
Vue.use(Router);

// А как результат мы просто экспортируем по дефолту новый экземпляр
// класса роутер, в конструктор которого мы передаем объект
export default new Router({
  // Первый параметр mode со значением 'history' для того, чтобы у нас были обычные слэши в путях
  mode: "history",
  // Массив routes, где каждый объект будет представлять из себя новую страницу
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/todos",
      // Мы сразу же можем применить Lazy Loading для каких-либо страниц
      // Мы в поле component передаем callback функцию, где указываем динамический импорт,
      // и в который мы передаем путь до страницы, которую нам нужно получить
      component: () => import("./views/Todos.vue"),
    },
  ],
});
