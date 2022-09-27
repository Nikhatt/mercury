<template>
<div>
    <router-link to="/"> Home </router-link> <br />
    <router-link to="/form"> Form</router-link> <br />
    <router-link to="/profile/nikhat"> Nikhat's Profile </router-link> <br />
    <router-link to="/profile/wakar"> Wakar's Profile </router-link> <br />
    <router-link to="/profile/alishba"> Alishba's Profile </router-link>
    <router-view /> <br />

    <!-- <h1> This is my first webpage </h1> -->
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
 </ul> -->
    <!-- <VueHtml /> -->
    <!-- <ClassBinding/> -->
    <!-- <ChildParent  :getname="getusername" />/ -->
    <!-- <Ref/>-->
    <!-- <Form /> -->
    <!-- <Profile /> -->
</div>
</template>

<script>
//import Ref from './components/Ref.vue';
// import Form from './components/Form.vue';
// import Profile from './components/Profile.vue';
//import HomePage from './components/HomePage.vue';
//import Condition from './components/Condition.vue';
//import VueHtml from './components/VueHtml.vue';
// import ClassBinding from './components/ClassBinding.vue';
// import ChildParent from './childParent.vue';

export default {
    name: 'App',
    components: {
        // Ref,
        // ClassBinding,
        // Form,
        // Profile
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

<style scoped>
/* // #app {
//     font-family: Avenir, Helvetica, Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-align: center;
//     color: #2c3e50;
//     margin-top: 60px;
// }
//  */
h1 {

    color: chocolate;
    width: -moz-fit-content;
    background-color: thistle;
    font-size: -webkit-xxx-large;
    text-align: center;
    margin: 50px;
}
</style>
