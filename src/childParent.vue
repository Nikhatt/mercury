<template>
<div>
    <h1> child </h1>
    <button @click="getname(username)"> get name from child</button>
</div>
</template>
<script>
    export default{
        name: "ChildParent",
        props:{
            getname:Function,
        },
        data(){
            return{
                username:"peter"
            }
        }
    }
</script>
