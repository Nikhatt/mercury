<template>
<div>
<h1> PROFILE </h1>
<p>

I am {{profile}} <br/>
Nationality : <br/>
Gender:<br/>
technology :<br/>
</p>

</div>
</template>

<script>
import {useRoute}   from 'vue-router';

export default {
    name: " YourProfile",
    data(){
        return{ profile:""}
    },

    mounted()
    {
        const route = useRoute();
        console.log('route',route.params.name);
        this.profile = route.params.name;
    }
}
</script>
<style scoped>
 h1 {
     text-align: center;
     color: aquamarine;
     background-color: rgb(119, 116, 116);
 }
 p{
    font-size: large;
    color: brown;
 }
</style>
