<template>
  <div class="d-flex align-items-center justify-content-right">
    <input
      @keyup.enter="submitByEnter"
      v-model="newToDo"
      :class="[$style.addTaskInput, 'border-0 px-3 w-100']"
      placeholder="New task"
      type="text"
      size="100"
    />
    <button
      :class="[$style.btnn, 'border-0 bg-transparent p-0']"
      @click="handleAddTodo"
    >
      <font-awesome-icon
        icon="fa-solid fa-circle-plus"
        size="2xl"
        :class="[$style.addBtn]"
      />
    </button>
  </div>
</template>
<script>
export default {
  data: () => ({
    newToDo: "",
  }),
  methods: {
    submitByEnter(event) {
      if (event.key == "Enter") {
        this.handleAddTodo();
      }
    },
    handleAddTodo() {
      if (this.newToDo) {
        this.$emit("addNewToDo", this.newToDo);
        this.newToDo = "";
      }
    },
  },
};
</script>
<style lang="scss" module>
.addTaskInput {
  &.error {
    border-color: red;
  }
  outline: none;
  color: #3e82c3;
}
.addBtn {
  color: #3e82c3;
}
</style>
