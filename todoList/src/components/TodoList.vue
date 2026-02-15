<script setup>
    import { ref, computed } from 'vue';
    import TodoItem from './TodoItem.vue';
    import TodoFilters from './TodoFilters.vue';
    import TodoStats from './TodoStats.vue';
    import TodoForm from './TodoForm.vue';

    const todos = ref([
        { id: 1, title: 'Learn Vue JS', completed: false },
        { id: 2, title: 'Watch Netflix', completed: false },
    ]);

    const filter = ref('all');

    const filteredTodos = computed(() => {
        if (filter.value === 'active') return todos.value.filter(t => !t.completed)
        if (filter.value === 'done') return todos.value.filter(t => t.completed)
        return todos.value
    });

    const total = computed(() => todos.value.length);
    const completed = computed(() => todos.value.filter(t => t.completed).length);
    const pending = computed(() => total.value - completed.value);
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
    </div>
</template>