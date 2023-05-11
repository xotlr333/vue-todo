<template>
    <li class="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
        <div>
            <span class="text-lg font-medium text-gray-300">{{ category_icons[todo.category] }}</span>
            <div>
                <h2 data-test="title" class="mb-0 text-lg font-bold text-gray-100 uppercase">{{ todo.title }}</h2>
                <p class="mt-2 text-base text-gray-200">{{ todo.summary }}</p>
            </div>
        </div>
        <div class="flex items-center gap-2">
            <button @click="openModal" class="w-8 text-xl font-semibold cursor-pointer">✏️</button>
            <button @click="() => deleteTodo(todo.id)" class="w-8 text-xl font-semibold text-red-300 cursor-pointer">X</button>
        </div>
        <Teleport to="body">
            <DefaultModal :show="isModalOpen"  @close-modal="closeModal">
                <template #header>
                    <h3>edit Todo</h3>
                </template>
                <template #body>
                    <NewTodo :todo="todo" @close-modal="closeModal" />
                </template>
            </DefaultModal>
        </Teleport>
    </li>
</template>

<script setup>
import { ref } from 'vue';
import { useTododStore } from '../../stores/todo';
import DefaultModal from '../DefaultModal.vue';
import NewTodo from './NewTodo.vue';

const todoStore = useTododStore();

const isModalOpen = ref(false);

// const emit = defineEmits(['delete-todo']);

defineProps({
    todo: {
        type: Object,
        default() {
            return {
                id: '',
                category: '',
                title: '',
                summary: '',
            }
        }
    }
});

const category_icons = {
    todo: '📑',
    progress: '👀',
    done: '😀',
}

const deleteTodo = (id) => {
    // emit('delete-todo', id);
    todoStore.deleteTodo(id);
}

const openModal = () => {
    isModalOpen.value = true;
}

const closeModal = () => {
    isModalOpen.value = false;
}

</script>

<style lang="scss" scoped>

</style>