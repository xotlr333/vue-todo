<template>
    <div>
        <TodoHeader :todos="todos"/>
        <TodoList :todos="todos"/>
    </div>
</template>

<script setup>
import TodoHeader from './todos/TodoHeader.vue';
import TodoList from './todos/TodoList.vue';

defineProps({
  todos: {
    type: Array,
    default() {
      return [];
    }
  }
})

</script>