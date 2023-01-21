<template>
  <div>
    <modal :title="title" v-on="$listeners" v-bind="$attrs">
      <p class="text-start px-4 pt-2">Task Name</p>
      <div class="px-4">
        <input
          type="text"
          :class="[$style.editInput, 'rounded p-2 ']"
          v-model="todo.text"
        />
      </div>
      <div class="text-end mx-4 my-3">
        <button
          :class="[$style.saveBtn, 'border-0 text-white px-3 py-2']"
          @click="$emit('updateToDo', todo.text)"
        >
          <span
            :class="isLoading ? 'spinner-border spinner-border-sm' : 'mt-3'"
            role="status"
            aria-hidden="true"
            >{{ isLoading ? "" : "save" }}</span
          >
        </button>
      </div>
    </modal>
  </div>
</template>
<script>
import Modal from "../common/Modal.vue";

export default {
  components: {
    Modal,
  },
  data: () => {
    return {
      title: "Edit Task",
    };
  },
  props: {
    todo: {
      type: [],
      default: "",
    },
    isLoading: Boolean,
  },
};
</script>
<style lang="scss" module>
.editInput {
  border: 2px solid #3e82c3;
  width: 100%;
  outline: 0;
}
.saveBtn {
  background-color: #3e82c3;
  &:hover {
    background-color: #356fa6;
  }
}
</style>
