<template>
<div>
    <h1> ref in vue</h1>
    <input type="text" ref="nikhat" />
    <button @click="getData"> click me</button>
</div>
</template>

<script>
export default {
    name: "refVue",

methods: {
    getData()
     {
        this.$refs.nikhat.focus();
        //this.$refs.nikhat.value="i love u";
        this.$refs.nikhat.style.color="red";
        console.log(this.$refs.nikhat.value);
    }
}
}
</script>
