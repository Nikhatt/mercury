<template>
 <div>
<h1>HTML Binding</h1>
 {{name}}
 {{tag}}
 <div v-html="tag + tag3"></div>
 <div v-html="tag2"></div>
 </div>
</template>

<script>
export default {
    name: "vueHtml",
    data(){
        return { name: "nikhat jahan",
                tag :" <h2> alishba ayat </h2>",
                tag2 :" <h2> diya ayat </h2>",
                tag3:" <h2> suman ayat </h2>"
                 }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    color: red;
}
</style>
