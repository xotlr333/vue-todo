<template>
    <div>
        <TodoHeader @add-todo="addTodo" :todos="todos"/>
        <TodoList @delete-todo="deleteTodo" :todos="todos"/>
    </div>
</template>

<script setup>
import TodoHeader from './todos/TodoHeader.vue';
import TodoList from './todos/TodoList.vue';

const emit = defineEmits(['add-todo', 'delete-todo']);

defineProps({
  todos: {
    type: Array,
    default() {
      return [];
    }
  }
})

const addTodo = (todo) => {
    emit('add-todo', todo);
}

const deleteTodo = (id) => {
  emit('delete-todo', id);
}

</script>