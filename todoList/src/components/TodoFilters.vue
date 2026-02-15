<script setup>
    defineProps({
    filter: { type: String, required: true }
    });

    defineEmits(['changeFilter']);
</script>

<template>
  <div class="clearBtns">
    <button
      :class="{ chipActive: filter === 'all' }"
      @click="$emit('changeFilter', 'all')"
    >
      All
    </button>

    <button
      :class="{ chipActive: filter === 'active' }"
      @click="$emit('changeFilter', 'active')"
    >
      Active
    </button>

    <button
      :class="{ chipActive: filter === 'done' }"
      @click="$emit('changeFilter', 'done')"
    >
      Done
    </button>
  </div>
</template>
