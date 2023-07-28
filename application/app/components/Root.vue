<script lang="js" setup>    
    import { onMounted, defineAsyncComponent, ref } from 'vue';
    import Counter from 'vue2App/Counter';
    import HelloWorld from 'vue2App/HelloWorld';
    const rootCounter = ref(0);

    const handler = (count) => {
        rootCounter.value = rootCounter.value + count;
    }
</script>

<template>
    <div>
        <div id="counter"></div>
        <counter @count="handler" :count="rootCounter"></counter>
        <hello-world></hello-world>
    </div>
</template>