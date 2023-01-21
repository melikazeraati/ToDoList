<template>
  <div><h1 :class="[$style.title, 'text-white']">Vue ToDo List</h1></div>
</template>
<style module>
.title {
  font-size: 65px;
  font-weight: 550;
}
@media only screen and (max-width: 576px) {
  .title {
    font-size: 11vw;
  }
}
</style>
