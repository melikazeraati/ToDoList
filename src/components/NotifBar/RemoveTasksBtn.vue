<template>
  <div class="d-flex align-items-center">
    <button
      :class="[
        $style.removeTask,
        'text-white d-flex align-items-center border-0 pt-1 me-2',
      ]"
    >
      <span>
        <font-awesome-icon icon="fa-solid fa-trash" class="ps-1 pe-2"
      /></span>
      <slot> </slot>
    </button>
  </div>
</template>
<style module>
.removeTask {
  background-color: #f65050;
  font-size: 0.96rem;
  margin: 5px 5px;
}
</style>
