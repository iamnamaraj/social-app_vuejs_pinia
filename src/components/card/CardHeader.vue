<template>
    <div class="flex h-18 justify-start">
        <span class="flex justify-center items-center w-12 h-12 bg-gray-400 rounded-full text-white">{{ initials }}</span>
        <div class="flex flex-col px-2 py-1">
            <span class="font-semibold">{{ fullName }}</span>
            <span class="text-gray-400 text-sm">{{  formattedTime }}</span>
        </div>
    </div>
</template>

<script>
import { formatDate } from '@/composables/moment'
import { computed } from 'vue';
export default {
    props: ['post'],

    setup(props){
        const initials = computed(() => {
            const firstName = props.post.user.first_name || '';
            const lastName = props.post.user.last_name || '';
            const firstLetterFirstName = firstName.charAt(0).toUpperCase();
            const lastLetterLastName = lastName.charAt(0).toUpperCase();
            return `${firstLetterFirstName}${lastLetterLastName}`;
        });

        const formattedTime = computed(() => {
            return formatDate(props.post.created_at);
        });

        const fullName = computed(() => {
            return `${props.post.user.first_name} ${props.post.user.last_name}`;
        });

        return { formattedTime, initials, fullName }

    }

}
</script>

<style>

</style>