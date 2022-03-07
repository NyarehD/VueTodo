<template>
  <li :class="['list-group-item','created','d-flex','justify-content-between',{'deleted':todoItem.isDeleted}]">
    <div class="col-8" v-if="todoItem.isEditing">
      <input type="text" v-model="todoItem.task" class="form-control" @keypress.enter="todoItem.isEditing=false">
    </div>
    <div class="col-8" v-else>
      <input type="checkbox" class="me-3 form-check-input" :id="todoItem.id" v-model="todoItem.isDone">
      <label :for="todoItem.id" @dblclick="todoItem.isEditing=true"
             :class="['form-label',{'done':todoItem.isDone}]">{{ todoItem.task }}</label>
    </div>
    <button class="btn btn-danger btn-sm col-3" @click.prevent="$emit('delete',todoItem.id)">Delete</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    todoItem: Object
  }

}
</script>

<style scoped>

</style>