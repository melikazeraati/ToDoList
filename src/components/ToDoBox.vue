<template>
  <card>
    <div :class="[$style.box, 'bg-white d-flex flex-column']">
      <notif-bar
        :doneToDos="doneToDosCounter"
        :allToDos="toDosCounter"
        @removeAllToDos="removeAllToDos"
        @removeDoneToDos="removeDoneToDos"
      />
      <to-dos
        :todos="todos"
        @removeSelectedToDo="removeSelectedToDo"
        @toggleStatus="toggleStatus"
        @updateToDo="updateToDo"
      />
      <add-bar @addNewTask="addNewTask" />
    </div>
  </card>
</template>
<script>
import AddBar from "./AddBar/AddBar.vue";
import Card from "./common/Card.vue";
import ToDos from "./Tasks/ToDos.vue";
import NotifBar from "./NotifBar/NotifBar.vue";

export default {
  name: "ToDobBox",
  components: {
    AddBar,
    Card,
    ToDos,
    NotifBar,
  },
  data: () => {
    return {
      todo: {
        text: "",
        status: false,
        id: 0,
      },
      todos: [],
      doneToDos: 0,
      allToDos: 0,
    };
  },
  computed: {
    lastId() {
      if (this.todos.length) {
        var lastTodo = this.todos.slice(-1);
        return lastTodo[0].id;
      }
      return 0;
    },
    doneToDosCounter() {
      return this.todos.filter((item) => item.status).length;
    },
    toDosCounter() {
      return this.todos.length;
    },
  },
  methods: {
    addNewTask(todo) {
      this.todos = Object.assign([
        ...this.todos,
        {
          text: todo,
          status: false,
          id: this.lastId + 1,
        },
      ]);
    },
    removeSelectedToDo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    toggleStatus(todo) {
      todo.status = !todo.status;
    },
    removeAllToDos() {
      this.todos.splice(0, this.todos.length);
    },
    removeDoneToDos() {
      const filterToDo = this.todos.filter((item) => !item.status);
      this.todos = filterToDo;
    },
    updateToDo(text, id) {
      this.todos.find((item) => item.id === id).text = text;
    },
  },
};
</script>

<style module>
.box {
  width: 500px;
  min-height: 339px;
}
@media only screen and (max-width: 768px) {
  .box {
    width: 100%;
  }
}
</style>
