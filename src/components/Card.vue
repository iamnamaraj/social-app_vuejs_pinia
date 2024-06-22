<template>
  <div class="flex flex-col bg-white w-[90%] min-h-64 rounded-lg px-4 py-2">
    <CardHeader :post = "post"/>
    <CardBody :post = "post" />
    <CardFooter />
  </div>
</template>

<script>
import CardHeader from './card/CardHeader.vue';
import CardBody from './card/CardBody.vue';
import CardFooter from './card/CardFooter.vue';


export default {
  props: [ 'post'],
  components: { CardHeader, CardBody, CardFooter },

};
</script>

<style>

</style>
