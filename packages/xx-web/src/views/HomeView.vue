<script setup lang="ts">
import {$,$$} from "vue/macros"
import {XButton} from "xx-ui"
import {ref} from "vue";

let a = ref({name:1})
let b = $(a)

console.log(a,b);
</script>

<template>
    <div>
        <XButton/>
    </div>
</template>
