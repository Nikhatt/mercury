<template>
    <div>
       
        <table border="1px">
            <tr>
                <td>name</td>
                <td>age</td>
                <td>gender</td>
                <td>button</td>
                <td>button</td>
                <td>button</td>
                
              </tr>


            <tr v-for=" user, i in users" :key="user.name">
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
                <td>{{user.gender}}</td>
                <td><button v-on:click="increase(user.age,i)">increase</button></td>
                <td><button v-on:click="decrease(user.age,i)">decrease</button></td>
                <td><button v-on:click="flipName(user.name,i)">FlipName</button></td>
                
                </tr>
        </table>
    </div>


</template>
<script>



export default {
         name: 'ChildPage',
    data() {
        return {
            users: [
                { name: "Nikhat Jahan", age: "31", gender: "female", },
                { name: "Farhat Jahan", age: "30", gender: "female", },
                { name: "saquib Alam", age: "27", gender: "male", },
                { name: "Nusrat Jahan", age: "23", gender: "female", }
            ]

        }

    },
    methods: {
        increase(i, n) {
            i++;
            this.users[n].age = i;
        },


        decrease(i, n) {
            i--;
            this.users[n].age = i;

        },

        flipName(name,n){

        var firstName =  name.slice( 0 , name.lastIndexOf(" ") );
        var lastName =  name.slice( name.lastIndexOf(" ")+1 );
        var flipName = lastName.concat( " " ,firstName );
        this.users[n].name = flipName;
        }
    }

}

</script>
<style scoped>
  table { background-color: aquamarine;
    color: rgb(167, 39, 39);
  }
</style>