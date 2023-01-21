<template>
  <div :class="[$style.content, 'bg-white text-black pt-3 px-4']">
    <div
      v-for="todo in todos"
      :key="todo.id"
      :class="[
        $style.toDoBox,
        'border border-2 d-flex justify-content-between p-2  rounded shadow-sm mt-2',
      ]"
    >
      <div>
        <button
          class="border-0 bg-transparent p-0"
          @click="$emit('toggleStatus', todo)"
        >
          <font-awesome-icon
            icon="fa-solid fa-circle-check"
            size="xl"
            :class="todo.status ? [$style.tasksNotDone] : [$style.tasksDone]"
          />
        </button>
        <span
          :class="['ps-3', { ['text-decoration-line-through']: todo.status }]"
          >{{ todo.text }}</span
        >
      </div>
      <!-- :value="isModalOpen"
        @input="(e) => (isModalOpen = e)" -->
      <edit-modal
        :todo="todo"
        :isLoading="isLoading"
        v-model="isModalOpen"
        @updateToDo="updateTask(todo.text, todo.id)"
      />
      <div :class="[$style.actions, 'align-items-center']">
        <edit-task @click.native="isModalOpen = !isModalOpen" />
        <delete-task @click.native="$emit('removeSelectedToDo', todo)" />
      </div>
    </div>
  </div>
</template>
<script>
import EditTask from "./EditTask.vue";
import DeleteTask from "./DeleteTask.vue";
import EditModal from "./EditModal.vue";

export default {
  components: {
    EditTask,
    DeleteTask,
    EditModal,
  },
  data: () => {
    return {
      selectedToDo: 0,
      isModalOpen: false,
      isLoading: false,
    };
  },
  props: {
    todos: {
      type: [],
      default: "",
    },
  },
  methods: {
    selectedToDoId(id) {
      this.selectedToDo = id;
    },
    closeModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    updateTask(text, id) {
      this.$emit("updateToDo", text, id);
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.isModalOpen = false;
      }, 1000);
    },
  },
};
</script>

<style module lang="scss">
.content {
  flex-grow: 1;
  max-height: 198px;
  overflow: scroll;
}
.tasksDone {
  color: #c3bbb6;
}
.tasksNotDone {
  color: #42b883;
}
.toDoBox {
  .actions {
    display: none;
  }
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.4);
  &:hover {
    background-color: #f2f2f2;
    .actions {
      display: flex;
    }
  }
}
</style>
