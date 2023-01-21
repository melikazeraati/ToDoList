<template>
  <div :class="[$style.notifBar, 'w-100']">
    <div class="d-flex justify-content-end">
      <number-of-tasks> <span slot="title">Tasks Done</span> <span slot="number">{{doneToDos}}</span> </number-of-tasks>
      <number-of-tasks> <span slot="title">Tasks</span> <span slot="number">{{allToDos}}</span> </number-of-tasks>
    </div>
    <div class="d-flex justify-content-end">
      <remove-tasks-btn @click.native="$emit('removeAllToDos')"> Tasks </remove-tasks-btn>
      <remove-tasks-btn @click.native="$emit('removeDoneToDos')"> Tasks Done </remove-tasks-btn>
    </div>
  </div>
</template>
<script>
import RemoveTasksBtn from "./RemoveTasksBtn.vue";
import NumberOfTasks from "./NumberOfTasks.vue";

export default {
  components: {
    RemoveTasksBtn,
    NumberOfTasks,
  },
  props: {
    allToDos: {
      type: Number,
      default: 0,
    },
    doneToDos: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style module>
.notifBar {
  min-height: 48.5px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: flex-end;
}
@media only screen and (max-width: 491px) {
  .notifBar {
    display: block;
  }
}
</style>
