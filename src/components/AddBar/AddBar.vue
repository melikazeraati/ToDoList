<template>
  <div class="text-danger d-flex m-0">
    <div :class="[$style.addBar, 'd-flex flex-grow-1']">
      <div
        :class="[
          $style.addTaskField,
          'w-100 m-3 rounded-pill d-flex alighn-items-center bg-white px-2',
        ]"
      >
        <add-task @addNewToDo="(todo) => $emit('addNewTask', todo)" />
      </div>
    </div>
  </div>
</template>
<script>
import AddTask from "./AddTask.vue";
export default {
  components: {
    AddTask,
  },
};
</script>

<style module lang="scss">
.addBar {
  background-color: #f2f2f2;
}
.addTaskField {
  border: 0.2rem solid #3e82c3;
  height: 60px;
}
</style>
