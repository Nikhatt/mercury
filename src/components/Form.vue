<template>
<div>
    <h1> FILL FORM</h1>
   
    <form>
        <label> Email : </label>
        <input type="text" placeholder="enter  your email address" v-model="form.email"> <br /><br />

        <label> Password : </label>
        <input type="password" placeholder=" your password" v-model="form.password"> <br /><br />

        <label> Nationality : </label>
        <select v-model="form.country">
            <option>India</option>
            <option>nepal</option>
        </select>

        <h3>Gender</h3>
        <label> Male </label>
        <input type="radio" name="gender" value="male" v-model="form.gender">
        <label> Female </label>
        <input type="radio" name="gender" value="female" v-model="form.gender"> <br /><br />

        <h3> Technology</h3>
        <label> java </label>
        <input type="checkbox" value="java" v-model="form.technology">
        <label> html</label>
        <input type="checkbox" value="html" v-model="form.technology">
        <label> vue </label>
        <input type="checkbox" value="vue" v-model="form.technology"> <br /><br /><br/>

        <button @click="login()" type="button" > login </button><br /><br />
        <ul>
        <li v-for="item in error" :key=" item">
            {{item}} is empty</li>
    </ul>
    </form>
</div>
</template>

<script>
export default {
    name: "FormFill",
    data() {
        return {
            form: {
                email: "",
                password: "",
                country: "",
                gender: "",
                technology: []
            },
            error: []
        }
    },
    methods: {
        login() {

            this.error = []
            for (const item in this.form) {
                if (this.form[item] === "" || this.form[item].length === 0) {
                    this.error.push(item)
                }

            }
            if (this.error.length === 0) {
                alert("data has been submitted")
            }
            console.log(this.error)
        }
    }

}
</script>

<style scoped>
 h1 {
     text-align: center;
     color: aquamarine;
     background-color: rgb(119, 116, 116);
 }

 form {text-align: center; }
 h3{
    background-color: rgb(192, 187, 187);
    
 }
 button{
 
    font-size: x-large;
    background-color: aquamarine;
    box-shadow: skyblue;
    border: inset;}
</style>
