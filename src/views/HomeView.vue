<script setup>
import AppHeader from '@/components/AppHeader.vue';
import AppSection from '@/components/AppSection.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useTododStore } from '../stores/todo';
import { storeToRefs } from 'pinia';

// pinia의 store를 사용하려면 해당 store를 import
const todoStore = useTododStore();

const { filteredTodosByCategory } = storeToRefs(todoStore);

const dummyTodos = filteredTodosByCategory;

</script>

<template>
  <DefaultLayout>
    <AppHeader />
    <AppSection :todos="dummyTodos"/>
  </DefaultLayout>
</template>
