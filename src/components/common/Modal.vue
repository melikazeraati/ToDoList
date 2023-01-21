<template>
  <div
    v-if="$attrs.value"
    :class="[
      $style.modalStyle,
      'position-fixed d-flex justify-content-center align-items-center',
    ]"
  >
    <div
      :class="[
        $style.modalContext,
        'border border-1 rounded py-3 position-relative bg-white',
      ]"
    >
      <button
        :class="[$style.closeBtn, 'border-0 bg-white position-absolute']"
        @click="$emit('input', false)"
      >
        <font-awesome-icon icon="fa-solid fa-circle-xmark" size="xl" />
      </button>
      <h3 v-if="title" class="text-start px-4 pt-3 fw-bold">{{ title }}</h3>
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<style module lang="scss">
.modalStyle {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
}
.modalContext {
  max-width: 400px;
  width: 100%;
  z-index: 9999;
}
.closeBtn {
  &:hover {
    color: red;
  }
  right: 1rem;
  top: 1rem;
}
</style>
