<template>
  <div class="flex flex-col items-center gap-4">
    <Card v-for="post in posts" :key="post.id" :post="post"/>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { usePostStore } from '../../stores/postStore';
import Card from '../../components/Card.vue';

export default {
  components: { Card },
  setup() {
    const postStore = usePostStore();
    const posts = ref([]);

    onMounted(async () => {
      try {
        const response = await postStore.getPosts();
        console.log('API response:', response);
        posts.value = response.data.data.data;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    });

    return { posts };
  }
};
</script>

<style>
/* Your styles here */
</style>
