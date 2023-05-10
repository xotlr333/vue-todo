<template>
  <ul class="text-white px-0 my-8">
      <TodoItem 
        v-for="item in todos"
        :key="item.id"
        class="text-white" 
        :todo="item"
        @delete-todo="deleteTodo"
      />
  </ul>
</template>

<script setup>
// import { ref } from 'vue';
import TodoItem from './TodoItem.vue';

const emit = defineEmits(['delete-todo']);

defineProps({
  todos:{
    type: Array,
    default() {
      return [];
    }
  }
});

const deleteTodo = (id) => {
  emit('delete-todo', id)
}

</script>

<style lang="scss" scoped>

</style>
