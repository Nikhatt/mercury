<template>
    <div>
        
        <!-- <h1 @mousemove="getConsole()"> for-loop in vue .js {{email="saquib@gmail.com"}} </h1> -->
        <h1> {{getname()}}</h1>
        <h2> {{msg}} </h2>
        <h2> {{count}} </h2>
        <input type="text" placeholder="enter email" v-model="emaill"/> <br/><br/>
         <input type="password" placeholder="enter   password" v-model="password"/>
        <h3>{{data}}</h3>
        <!-- <h2> {{hello()}} </h2> -->
        

        <button @click="hello()"> click me</button><br/><br/>
        <button @click="getData()"> getData</button>
        <table border="1px">
            <tr>
                <td>name</td>
                <td>age</td>
                <td>gender</td>
                <td>button</td>
                <td>button</td>
                <td>button</td>
            </tr>
            <PersonInfo :name="user.name" :age="user.age" :gender=" user.gender"  v-for=" user, i in users" :key="i" 
            @OnIncrease="increase(user.age,i)"
            @OnDecrease="decrease(user.age,i)"
            @OnFlipName="flipName(user.name, i)"/>

            <!-- <tr v-for=" user, i in users" :key="user.name">
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
                <td>{{user.gender}}</td>
                <td><button v-on:click="increase(user.age,i)">increase</button></td>
                <td><button v-on:click="decrease(user.age,i)">decrease</button></td>
                <td><button v-on:click="">FlipName</button></td>
            </tr> -->
        </table><br/>


        <!-- <input type="checkbox" value = "java"  v-model="technology" />
        <label for="java">java</label> <br/>

        <input type="checkbox"  v-model="technology" value = node />
        <label for="node">node</label> <br/>

        <input type="checkbox"  v-model="technology"  value = vue />
        <label for="vue">vue</label> 
        
        <h4> technology = {{technology}}</h4> -->


        <input type="radio" value = "java"  v-model="technology" name=" know" />
        <label for="java">java</label> <br/>

        <input type="radio"  v-model="technology" value = node name=" know" />
        <label for="node">node</label> <br/>

        <input type="radio"  v-model="technology"  value = vue name=" know" />
        <label for="vue">vue</label> 
        
        <h4> technology = {{technology}}</h4>
    </div>


</template>
<script>
import PersonInfo from './PersonInfo.vue';

export default {
    name: "HomePage",
    components: { PersonInfo },
    props:{
        msg: String,
    },
    data() {
        return {
            users: [
                { name: "Nikhat Jahan", age: 34, gender: "female", },
                { name: "Farhat Jahan", age: 30, gender: "female", },
                { name: "saquib Alam", age: 27, gender: "male", },
                { name: "Nusrat Jahan", age: 23, gender: "female", }
            ], 
            email:" nikhat.gmail.com",
            count :0,
            data : 0,
            emaill :"",
            password : null,
            technology:[],
            getname(){
                return "nikhat"
            }
        };

    },
    methods: {
        increase(age, i) {
            this.users[i].age = age + 1;
        },
        decrease(age, i) {
            this.users[i].age = age - 1;
        },
        flipName(name, n) {
            var firstName = name.slice(0, name.lastIndexOf(" "));
            var lastName = name.slice(name.lastIndexOf(" ") + 1);
            var flipName = lastName.concat(" ", firstName);
            this.users[n].name = flipName;
        },
        hello(){
             //return this.email;
             //alert('function called');
             this.count= this.count  + 1;
        },
        getConsole(){
            console.log("i am nikhat")
        },
        getData(){
            console.log(this.emaill, this.password)
        }
    },
}

</script>
<style lang="scss" scoped>
div{
    h1{
        color: aqua;
    }
    h2{
        background-color: red;
        border: 2px;
        border-color: rgb(27, 25, 25);
    }
}
</style>