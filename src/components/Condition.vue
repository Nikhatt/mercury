<template>
<!-- <div> -->
    <div class="design">
        <!-- <h1 v-if="show"> condition</h1> -->
        <h4> user= {{info.name}} </h4>
        <h4> email = {{info.email}} </h4>
        <!-- <button v-on:click="getData(info.name)"> click me</button> -->
        <button v-on:click="$emit('getData')"> click me</button>
    </div>

    <!-- <ul>
    <li v-for="item in technology" :key="item">{{item}}</li>
  </ul> 
  
  <ul>
    <li v-for="item in users" :key="item.name"> username :{{item.name}}  and  email:  {{item.email}} </li>

  </ul>
 
<button @click="show =!show"> click me</button> -->

<!-- </div> -->
</template>

<script>
export default {
    name: "conditionCase",
    props: {
        name: String,
        info: Object,
        //getData: Function,
    },
    // data() {
    //     return {
    //         show: true,
    //         technology: ["java", "php", "node", "html"],
    //         users: [{
    //                 name: "nikhat",
    //                 email: "nikhat@jahan.com"
    //             },
    //             {
    //                 name: "farhat",
    //                 email: "farhat@jahan.com"
    //             },
    //             {
    //                 name: "nusrat",
    //                 email: "nusrat@jahan.com"
    //             },
    //         ]
    //     }
    // },
    // methods: {
    //     getData() {
    //         alert("user name");
    //     }}
}

</script>

<style lang="scss" scoped>
.design {
    background-color: crimson;
    border-color: black;
    border-bottom: 2px solid;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: initial;
    margin: 10px;
    padding: 10px;

}
</style>
