<script lang="ts">
    import { defineComponent, ref } from '@vue/composition-api'; 

    export default defineComponent({
        setup() {
            const counter = ref(0);
            return {
                counter,
            }
        }
    })

</script>

<template>
    <div>
        <div class="button-click" @click="() => counter++"> Нажми на меня </div>
        {{ counter }}
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

