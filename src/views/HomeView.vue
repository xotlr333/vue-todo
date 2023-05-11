<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppSection from '@/components/AppSection.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { ref } from 'vue';
import { useTododStore } from '../stores/todo';
import { storeToRefs } from 'pinia';

// pinia의 store를 사용하려면 해당 store를 import
const todoStore = useTododStore();

const { todos } = storeToRefs(todoStore);

const dummyTodos = todos;


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
