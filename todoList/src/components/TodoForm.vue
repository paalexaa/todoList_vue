<script setup>
    import { useTodoStore } from '@/stores/useTodoStore';
    import { ref } from 'vue';

    const newTask = ref('');

    const store = useTodoStore();

    function addTask() {
        store.addTask(newTask.value)
        newTask.value = '';
    }
</script>

<template>
  <div class="form">
    <input
        v-model="newTask" 
        type="text" 
        placeholder="Add a new task..."
        @keyup.enter="addTask"/>
    <button @click="addTask" type="button"><i class="fas fa-plus"></i></button>
  </div>
</template>
