<template>
  <ul class="text-white px-0 my-8">
      <TodoItem 
        v-for="item in todos"
        :key="item.id"
        class="text-white" 
        :todo="item"
      />
  </ul>
</template>

<script setup>
// import { ref } from 'vue';
import TodoItem from './TodoItem.vue';

defineProps({
  todos:{
    type: Array,
    default() {
      return [];
    }
  }
});

</script>

<style lang="scss" scoped>

</style>
