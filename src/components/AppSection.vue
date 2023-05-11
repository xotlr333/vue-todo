<template>
    <div>
        <TodoHeader :todos="todos"/>
        <TodoList :todos="todos"/>
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

</script>