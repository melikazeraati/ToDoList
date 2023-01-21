<template>
    <button class="bg-transparent border-0 p-0 ms-3" >
      <font-awesome-icon
        icon="fa-solid fa-trash"
        size="lg"
        :class="[$style.deleteBtn]"
      />
    </button>
</template>
<script>
export default {
  props: {
    toDoId: {
      type: Number,
      default: 0,
    },
  },
};
</script>
<style module>
.deleteBtn {
  color: #f65050;
}
</style>
