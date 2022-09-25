<template>
<div>
    <h1> this is my first vue.js </h1>
    <!-- <h1> user name is: {{name}} </h1> 
    <HomePage  msg= 'table of person-information' /> -->
    <!-- <Condition :name="veg" :info="user"  /> -->
    <!-- <ul>
     <li v-for="item  in users" :key="item.name"  > 
        <condition :info="item" :getData="hello" />
    </li> -->
    <!-- <li v-for="item  in users" :key="item.name"  > 
        <condition :info="item" @getData="hello(item.name)" />
    </li>
 </ul> --> -->
    <!-- <VueHtml /> -->
    <ClassBinding/>
    <!-- <ChildParent  :getname="getusername" />/ -->
 <!-- <Ref/>-->
 <Form/>
</div>
</template>

<script>
//import Ref from './components/ref.vue';
import Form from './components/form.vue';
//import HomePage from './components/HomePage.vue';
//import Condition from './components/condition.vue';
//import VueHtml from './components/vueHtml.vue';

import ClassBinding from './components/classBinding.vue';

// import ChildParent from './childParent.vue';

export default {
    name: 'App',
    components: {
    // Ref,
    ClassBinding,
    Form
},
    // data() {
    //     return {
    //         name: ""
    //     }
    // },
    // methods: {
    //     getusername(name) {
    //         this.name=name;
    //     }
    // }
    // data() {
    //     return {
    //         veg: "potato",
    //         users:[ {
    //             name: "nikhat",
    //             email: "nikhat@gmail.com"
    //         },
    //         {
    //             name: "sam",
    //             email: "sam@gmail.com"
    //         },
    //         {
    //             name: "anil",
    //             email: "anil@gmail.com"
    //         },]
    //     }
    // },
    // methods: {
    //     hello(name) {
    //         alert(name);
    //     }}
}
</script>

<!-- // 

<style>
// #app {
//     font-family: Avenir, Helvetica, Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-align: center;
//     color: #2c3e50;
//     margin-top: 60px;
// }
// 
</style> -->
