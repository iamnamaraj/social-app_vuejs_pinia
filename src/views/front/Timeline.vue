<template>
  <!-- <div class="flex justify-center"> -->
  <div class="flex flex-col items-center">
    <Card v-for="i in 10 " :key="i"/>
  </div>
</template>

<script>
import Card from '../../components/Card.vue'

export default {
  components: { Card },
}
</script>

<style>

</style>