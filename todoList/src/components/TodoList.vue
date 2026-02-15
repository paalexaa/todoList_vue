<script setup>
    import { ref, computed, onMounted } from 'vue';
    import TodoItem from './TodoItem.vue';
    import TodoFilters from './TodoFilters.vue';
    import TodoStats from './TodoStats.vue';
    import TodoForm from './TodoForm.vue';

    import { useTodoStore } from '@/stores/useTodoStore';
    import { storeToRefs } from 'pinia';
    import axios from 'axios';

    const store = useTodoStore();
    const { todoList } = storeToRefs(store);

    onMounted(() => {
        store.init()
    });

    const filter = ref('all');

    const filteredTodos = computed(() => {
        if (filter.value === 'all') return todoList.value
        if (filter.value === 'active') return todoList.value.filter(t => !t.completed)
        if (filter.value === 'done') return todoList.value.filter(t => t.completed)
        return todoList.value
    });

    const total = computed(() => todoList.value.length);
    const completed = computed(() => todoList.value.filter(t => t.completed).length);
    const pending = computed(() => total.value - completed.value);

    const page = ref(1);
    const loading = ref(false);

    const fetchMoreItems = async () => {
        if (loading.value) return
        loading.value = true

        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/todos?_limit=20&_page=${page.value}`
        )

        todoList.value.push(...res.data)

        loading.value = false
        page.value++
    }
</script>

<template>
    <div class="task">
        <div class="header">
            <div class="title">
                <h1>To Do List</h1>
            </div>

            <TodoStats :total="total" :completed="completed" :pending="pending" />
        </div>

        <TodoForm />

        <TodoFilters :filter="filter" @changeFilter="filter = $event" />

        <div class="taskItems">
            <ul>
                <TodoItem
                    v-for="t in filteredTodos"
                    :key="t.id"
                    :todo="t"
                />
            </ul>
        </div>

        <div class="clearBtns">
            <button @click="fetchMoreItems" :disabled="loading">Load More</button>
        </div>
    </div>
</template>