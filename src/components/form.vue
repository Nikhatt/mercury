<template>
<div>
    <h1> FILL FORM</h1>
   <ul>
     <li v-for="item in error" :key=" item">
    {{item}} is empty</li></ul>
    <form>
        <level> email:</level>
        <input type="text" placeholder="enter  your email address" v-model="form.email"> <br /><br />

        <level> password:</level>
        <input type="password" placeholder=" your password" v-model="form.password"> <br /><br />

        <level> Nationality</level>
        <select v-model="form.country">
            <option>India</option>
            <option>nepal</option>
        </select>

        <h3>gender</h3>
        <level> male:</level>
        <input type="radio" name="gender" value="male" v-model="form.gender">
        <level> female:</level>
        <input type="radio" name="gender" value="female" v-model="form.gender"> <br /><br />

        <h3> technology</h3>
        <level> java </level>
        <input type="checkbox" value="java" v-model="form.technology">
        <level> html</level>
        <input type="checkbox" value="html" v-model="form.technology">
        <level> vue </level>
        <input type="checkbox" value="vue" v-model="form.technology"> <br /><br />

        <button @click="login()" type="button"> login </button><br /><br />
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
            if (this.error.length ===0) {
                alert("data has been submitted")
            }
            console.log(this.error)
        }
    }

}
</script>
