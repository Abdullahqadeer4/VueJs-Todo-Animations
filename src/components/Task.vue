<template>
  <div class="container">
    <div class="task">
      <div class="title">
        <h1>To Do List</h1>
      </div>
      <div class="form">
        <input type="text" placeholder="New Task" v-model="AddTask" />
        <button @click="createtasks"><i class="fas fa-plus"></i></button>
      </div>
      <div class="taskItems">
        <div class="todo-list">
          <h3>To Do</h3>
          <ul>
            <li v-for="task in tasks" :key="task.id">
              <input type="checkbox" v-model="task.completed" @change="showForwardArrow(task)" />
              <span class="task-title">{{ task.title }}</span>
              <button v-if="task.showArrow" @click="moveToMarked(task)">
                <i class="fas fa-arrow-right"></i>
              </button>
            </li>
          </ul>
        </div>
        <div class="marked-tasks">
          <h3>Marked Tasks</h3>
          <ul>
            <li v-for="task in markedTasks" :key="task.id">
              <input type="checkbox" v-model="task.completed" @change="showBackwardArrow(task)" />
              <span class="task-title">{{ task.title }}</span>
              <button v-if="task.showArrow" @click="unmarkTask(task)">
                <i class="fas fa-arrow-left"></i>
                <!-- <span class="task-title">{{ task.title }}</span> -->
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="clearBtns">
        <button @click="clearCompleted">Clear completed</button>
        <button @click="clear">Clear all</button>
      </div>
      <div class="pendingTasks">
        <span>Pending Tasks: {{ incomplete }}</span> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["tasks"],
  data() {
    return {
      AddTask: "",
      markedTasks: [],
    };
  },
  computed: {
    incomplete() {
      return this.tasks.filter(this.inprogress).length;
    },
  },
  methods: {
    inprogress(task) {
      return !this.iscompleted(task);
    },
    iscompleted(task) {
      return task.completed;
    },
    clearCompleted() {
      this.tasks = this.tasks.filter(this.inprogress);
    },
    clear() {
      this.tasks = [];
    },
    createtasks() {
      if (this.AddTask) {
        this.tasks.push({
          title: this.AddTask,
          completed: false,
          showArrow: false, // Add a new property to control arrow visibility
        });
      }
      this.AddTask = "";
    },
    showForwardArrow(task) {
      task.showArrow = true;
    },
    showBackwardArrow(task){
      task.showArrow= true;
    },
    moveToMarked(task) {
      task.showArrow = false;
      this.markedTasks.push(task);
      this.tasks = this.tasks.filter((t) => t !== task);
    },
    unmarkTask(task) {
      task.showArrow = false;
      task.completed = false;
      this.tasks.push(task);
      this.markedTasks = this.markedTasks.filter((t) => t !== task);
    },
  },
};
</script>
<style>

.task-title {
  margin-left: 10px;
}

.todo-list,
.marked-tasks {
  width: 45%;
  float: left;
  margin-right: 5%;
}
</style>