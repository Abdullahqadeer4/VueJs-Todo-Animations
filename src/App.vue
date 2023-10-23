<template>
  <div id="app">
    <Login></Login>
    <task v-bind:tasks="tasks"></task>
  </div>
</template>

<script>
import Task from "./components/Task";
import Login from "./components/Login"; 

export default {
  name: "App",
  components: {
    Task,
    Login,
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Learn Vue JS",
          completed: true,
        },
        {
          id: 2,
          title: "Watch netflix",
          completed: true,
        },
        {
          id: 3,
          title: "Go shopping",
          completed: false,
        },
        {
          id: 4,
          title: "Learn guitar",
          completed: false,
        },
        {
          id: 5,
          title: "Send email",
          completed: false,
        },
      ],
    };
  },
};
</script>