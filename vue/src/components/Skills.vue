<template>
    <div class="skills">
        <h1>This is the skills page</h1>

        <div class="holder">
            <form @submit.prevent="addSkill({skill: skill})">
                <input type="text" placeholder="Enter a skill you have..." v-model="skill" v-validate="'min:5'" name="skill">

                <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>

            </form>

            <ul>
                <li v-for="data in skills" :key="data.id">
                    {{ data.skill }}
                    <button type="button" v-on:click="removeSkill(data.id)"><i class="fa fa-minus-circle"></i> Delete</button>
                </li>
            </ul>

            <p>These are the skills that you possess.</p>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

function initialState () {
    return {
        skill: ''
    }
}

export default {
    name: 'Skills',
    data: function (){
        return initialState();
    },
    computed: {
        ...mapState('skills', ['skills',])
    },
    methods: {
        ...mapActions('skills', ['addSkill', 'removeSkill',]),
    },
	mounted: function () {
        this.$store.dispatch('skills/fetchSkills');
    },
    watch: {
        skills: function () {
            Object.assign(this.$data, initialState());
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>