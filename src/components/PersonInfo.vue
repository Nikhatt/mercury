<template>
<tr class="row">
    <td>{{name}}</td>
    <td>{{age}}</td>
    <td>{{gender}}</td>
    <td><button @click="$emit('OnIncrease')">increase</button></td>
    <td><button @click="$emit('OnDecrease')">decrease</button></td>
    <td><button @click="$emit('OnFlipName')">FlipName</button></td>
  
</tr>
</template>

<script>
export default {
    props: { name:String,
             age:Number,
             gender: String,
        // patient: {
        //     type: Object,
        //     default () {
        //         return {
        //             name: "nikat",
        //             age: 34,
        //             gender: "female"
        //         }
        //     }
        // }
    },
}
</script>
<style scoped>
.row{ background-color: aqua;}
</style>
