<template >
  <div>
    <h1>Data of Employees</h1>
    
    <button v-on:click =" display()" >click me</button>
    <ChildPage/>
  </div>
  
</template>
<script>
 import ChildPage from './ChildPage.vue'   

 export default{
    name:"MainHome",
    components: { 
   ChildPage },
   method:{
    display(){
     return 
   }
  }
 }
</script>
<style >
     h1{ background-color: aqua;
        color: orange;}
</style>