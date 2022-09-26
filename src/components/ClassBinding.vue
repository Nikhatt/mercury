<template>
<div>
    <H1 class="red" :class="adjustStyle">class binding</H1>
    <button v-on:click="box=!box">apply style</button>
</div>
</template>

<script>
export default {
    name: "classBinding",
    data() {
        return {
            box: true
        }
    },
    computed: {
        adjustStyle() {
            return {
                block: this.box,
                err: false
            }
        }

    }
}
</script>

<style lang="scss" scoped>
.block {
    color: blue;
    background-color: pink;
    width: 200px;
    padding: 10px
}

.red {
    color: red
}

.err{ color:brown}
</style>>
