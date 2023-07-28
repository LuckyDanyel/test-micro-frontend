<script lang="ts" setup>
    import { ref, toRefs } from 'vue';
    const props = defineProps(['count']);
    const emit = defineEmits();
    const { count } = toRefs(props);
    const handler = () => {
        emit('count', 1);
    }

</script>

<template>
    <div>
        <div class="button-click" @click="handler"> Нажми на меня </div>
        <div> {{ count }} </div>
    </div>
</template>

<style>
    .button-click {
        padding: 12px;
        border-radius: 6px;
        border: 1px solid black;
        cursor: pointer;
        display: inline-block;
    }
</style>

