<script setup>
    import { useTodoStore } from '@/stores/useTodoStore';
    
    const props = defineProps({
        todo: { type: Object, required: true }
    });
    const store = useTodoStore();

    function onEdit() {
        const res = window.prompt('Edit task:', props.todo.title)
        if (res === null) return
        store.editTask(props.todo.id, res)
    };
</script>


<template>
  <li class="todoRow">
    <label class="todoLeft">
      <input 
        type="checkbox" 
        :checked="todo.completed"
        @change="store.toggleCompleted(todo.id)" />
      <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
    </label>

    <div class="todoActions">
      <button @click="onEdit">
        <i class="far fa-edit"></i>
      </button>
      <button @click="store.deleteTask(todo.id)">
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  </li>
</template>


