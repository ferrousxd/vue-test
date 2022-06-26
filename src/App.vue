В файлах с расширением Vue существует 3 секции:
1 - секция template, которая написана, как HTML тег, и здесь мы пишем шаблон для компонента
2 - секция script, где мы по дефолту экспортируем какой-то объект (объект, представляющий весь функционал данного компонента)
2 - секция style, где мы описываем стили для этого компонента

<template>
  <div id="app">
    <h1>Todo Application</h1>
    <hr />
    <!--
      Для того, чтобы указать Vue.js куда нам рендерить страницу,
      мы пользуемся специальным компонентом, который называется router-view
      (именно сюда у нас будет попадать какая-либо страница)
    -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
