<template>
    <div>
        <h1> for-loop in vue .js</h1>
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
        </table>
    </div>


</template>
<script>
import PersonInfo from './PersonInfo.vue';

export default {
    name: "HomePage",
    components: { PersonInfo },
    data() {
        return {
            users: [
                { name: "Nikhat Jahan", age: 34, gender: "female", },
                { name: "Farhat Jahan", age: 30, gender: "female", },
                { name: "saquib Alam", age: 27, gender: "male", },
                { name: "Nusrat Jahan", age: 23, gender: "female", }
            ]
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
        }
    },
}

</script>