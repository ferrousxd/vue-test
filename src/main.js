// Главный файл, который запускает все приложение

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// Создаем новый instance Vue
new Vue({
  router,
  render: (h) => h(App), // И с помощью метода render мы рендерим App компонент
}).$mount("#app"); // После этого, мы маунтим все в дивку с айди app
