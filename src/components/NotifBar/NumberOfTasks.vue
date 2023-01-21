<template>
  <div class="d-flex align-items-center">
    <div
      :class="[
        $style.removeTask,
        'text-white d-flex align-items-center border-0 rounded-pill',
      ]"
    >
      <span class="px-2 my-0">
        <slot name="title"> </slot>
      </span>
      <span
        :class="[
          $style.counterCircle,
          'bg-white text-primary rounded-circle border-1 px-2',
        ]"
        > <slot name="number"></slot> </span
      >
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style module>
.removeTask {
  background-color: #3e82c3;
  font-size: 0.96rem;
  margin: 5px 5px;
  padding: 2px 0;
}
.counterCircle {
  margin: 0 2px;
}
</style>
