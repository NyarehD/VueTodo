<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-5">
        <div class="card">
          <div class="card-header">
            <h1>Todo List</h1>
          </div>
          <div class="card-body">
            <Input @add="addTodo"></Input>
            <div class="d-flex justify-content-start my-2">
              <span class="badge rounded-pill bg-primary"
                    v-if="doneTotal!==todoList.length">Done  {{ doneTotal }}</span>
              <span class="badge rounded-pill bg-success float-end" v-else>All Done, Good Job</span>
            </div>
            <ul class="list-group rounded">
              <li v-for="todo in todoList" :key="todo.id" class="list-group-item created d-flex"
                  :class="{'deleted':todo.isDelete}" @dblclick.capture="todo.isEditing=true">
                <div class="col-9" v-if="todo.isEditing">
                  <input type="text" class="form-control" v-model="todo.task" @keypress.enter="todo.isEditing=false">
                </div>
                <div class="col-9"  v-else>
                  <input type="checkbox" class="form-check-input me-3" :id="'todoId'+todo.id" v-model="todo.isDone">
                  <label :for="'todoId'+todo.id" :class="['form-label',{'done':todo.isDone}]">{{ todo.task }}</label>
                </div>
                <button class="btn btn-danger btn-sm col-3" @click="removeTodo(todo.id)">Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Input from "@/components/Input";

export default {
  name: 'App',
  components: {
    Input,
    HelloWorld
  },
  data() {
    return {
      currentId:0,
      todoList: [
        {
          id: 0,
          task: "Do something",
          isDone: false,
          isDelete: false,
          isEditing: false
        }
      ],
    }
  },
  methods: {
    addTodo(data) {
      this.todoList.push({
        id: ++this.currentId,
        task: data,
        isDone: false,
        isDelete: false,
        isEditing: false
      });
    },
    removeTodo(id) {
      this.todoList.map(function (item) {
        if (item.id === id) {
          item.isDelete = true;
        }
      })
      setTimeout(() => this.todoList = this.todoList.filter(item => item.id !== id), 500)
    }
  },
  computed: {
    doneTotal() {
      return this.todoList.filter(item => item.isDone).length;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  text-align: left;
}

.done {
  text-decoration: line-through !important;
  color: #adadad !important;
  transition: color 0.5s ease-in;
}

.created {
  animation: 0.5s fadeInDown;
}

.deleted {
  animation: 0.5s zoomOut;
}
</style>
