<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppSection from '@/components/AppSection.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { ref } from 'vue';

const dummyTodos = ref([
  {
    id: 1,
    title: "물 마시기",
    summary: '물을 마신다',
    category: 'todo',
  },
  {
    id: 2,
    title: "콜라 마시기",
    summary: '콜라를 마신다',
    category: 'progress',
  },
  {
    id: 3,
    title: "우유 마시기",
    summary: '우유를 마신다',
    category: 'done',
  }
]);


const addTodo = (todo) => {
  dummyTodos.value.push({id: new Date().getTime(), ...todo});
}

const deleteTodo = (id) => {
  dummyTodos.value = dummyTodos.value.filter((todo) => todo.id !== id);
}

</script>

<template>
  <DefaultLayout>
    <AppHeader />
    <AppSection @add-todo="addTodo" @delete-todo="deleteTodo" :todos="dummyTodos"/>
  </DefaultLayout>
</template>
