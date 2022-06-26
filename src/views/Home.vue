<template>
  <div>
    <h2>Home Page</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio consequatur
      illum quasi rem alias, aspernatur ullam eligendi. Repellendus quaerat
      asperiores adipisci optio laborum, sapiente minima illo deleniti error.
      Nemo, ut.
    </p>
    <!--
      Для того, чтобы переход между страницами был плавный и проходил без перезагрузок,
      необходимо использовать компонент router-link
    -->
    <router-link to="/todos">Todos</router-link>
  </div>
</template>