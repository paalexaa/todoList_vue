<script setup>
    defineProps({
        todo: { type: Object, required: true }
    });
</script>


<template>
  <li class="todoRow">
    <label class="todoLeft">
      <input type="checkbox" :checked="todo.completed" />
      <span>{{ todo.title }}</span>
    </label>

    <div class="todoActions">
      <button>
        <i class="far fa-edit"></i>
      </button>
      <button>
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  </li>
</template>


