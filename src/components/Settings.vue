<template>
  <div>
    <div class="flex justify-center gap-4 py-4 font-semibold">
      <button
        @click="activeTab = 'profile'"
        :class="{'border-b-4 border-gray-600': activeTab === 'profile'}"
      >
        Profile
      </button>
      <button
        @click="activeTab = 'change_password'"
        :class="{'border-b-4 border-gray-600': activeTab === 'change_password'}"
      >
        Change Password
      </button>
    </div>
    <div>
      <div v-show="activeTab === 'profile'">Profile</div>
      <div v-show="activeTab === 'change_password'">Change Password</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const activeTab = ref('profile');

    return { activeTab };
  },
};
</script>


<style>

</style>