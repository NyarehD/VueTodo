<template>
  <form>
    <div class="row">
      <div class="col-9">
        <input type="text" class="form-control rounded-pill" v-model="todo">
      </div>
      <div class="col-3">
        <button @click.prevent="add" class="btn btn-success rounded-pill">Add Task</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      todo: ""
    }
  },
  emits: ["add"],
  methods: {
    add() {
      this.$emit("add", this.todo)
      this.todo = ""
    }
  },
}
</script>

<style scoped>

</style>