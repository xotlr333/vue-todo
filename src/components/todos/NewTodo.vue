<template>
    <form 
    @submit.prevent="addTodo"
    class="my-2">
        <p>
            <label class="block mb-2 text-xl text-white" htmlFor="title">Title</label>
            <input 
                v-model="title" 
                class="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded" 
                type="text" 
                id="title"
            />
        </p>
        <p>
            <label class="block mb-2 text-xl text-white" htmlFor="summary">Summary</label>
            <textarea 
                v-model="summary" 
                class="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded" 
                id="summary" 
                rows="5" 
            />
        </p>
        <p>
            <label class="block mb-2 text-xl text-white" htmlFor="category">Category</label>
            <select 
                v-model="category" 
                class="w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded" 
                id="category"
                defaultValue="moderate"
            >
                <option value="todo">📑 To do</option>
                <option value="progress">👀 On progress</option>
                <option value="done">😀 Done</option>
            </select>
        </p>
        <p v-if="isFromInValid" class="mt-2 text-red-500">
            Please fill out all forms!
        </p>
        <p class="flex justify-end gap-4">
            <button @click="emit('close-modal')" class="text-xl text-white" type="button" >Cancel</button>
            <button v-if="isAdd" class="px-6 py-3 text-xl text-red-200" type="submit">Add</button>
            <button v-else class="px-6 py-3 text-xl text-red-200" type="submit">Edit</button>
        </p>
    </form>
</template>

<script setup>
import { ref, toRefs } from 'vue';
import { useTododStore } from '../../stores/todo';

const props = defineProps({
    todo: {
        type: Object,
    }
})

const title = ref('');
const summary = ref('');
const category = ref('todo');
const isAdd = props.todo === undefined;
const todoProp = toRefs(props.todo);

if (!isAdd){
    
    title.value = todoProp.title.value;
    summary.value = todoProp.summary.value;
    category.value = todoProp.category.value;
}

const isFromInValid = ref(false);

const todoStore = useTododStore();

const emit = defineEmits(['close-modal', 'add-todo']);

const addTodo = () => {
    // 입력값 유효성 처리(검사) - Form Validation
    if (title.value.trim().length === 0 || summary.value.trim().length === 0) {
        isFromInValid.value = true;
        return;
    }

    const newTodo = {
        title: title.value,
        summary: summary.value,
        category: category.value,
    }
    isAdd ? todoStore.addTodo(newTodo) : todoStore.editTodo({id:todoProp.id.value, ...newTodo});
    emit('close-modal');
}

</script>