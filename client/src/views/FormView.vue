<script setup>
import TheForm from '@/components/TheForm.vue'
</script>

<template>

    <form @submit.prevent="handleSubmit">
      <TheForm />
    </form>

</template>
