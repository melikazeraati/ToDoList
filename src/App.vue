<template>
  <div id="app">
    <to-do-title />
    <to-do-box />
  </div>
</template>

<script>
import ToDoTitle from "./components/ToDoTitle.vue";
import ToDoBox from "./components/ToDoBox.vue";

export default {
  name: "App",
  components: {
    ToDoTitle,
    ToDoBox,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background: linear-gradient(180deg, #42b883 0, #35495e);
  min-height: 100vh;
  padding:2.5rem 1.5rem;
}
</style>
