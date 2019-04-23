<template>
    <div class="polls">
        <h1>This is the polls page</h1>

        <div class="holder">
            <button type="button" v-if="!newPoll" v-on:click="addPollToggle()"><i class="fa fa-plus-circle"></i> Add a new poll</button>
            <div v-else>
                <form @submit.prevent="addPoll({question: question, choices: choices})">
                    <div class="new-post">
                        <div class="title">Question:</div>
                        <input type="text" placeholder="Question..." v-model="question" name="question">
                        <p/>
                        <div v-for="(data, index) in localChoices" :key="index">
                            <div>Choice {{index + 1}}: </div><input type="text" placeholder="Choice..." v-model="data.choice">
                            <button type="button" @click="deleteChoice(index)">Delete</button>
                        </div>
                        <button type="button" @click="addChoice()">Add choice</button>
                        <p/>
                        <button type="submit">Submit</button>
                        <button type="button" v-on:click="addPollToggle()"><i class="fa fa-minus-circle"></i> Cancel</button>
                    </div>
                </form>
            </div>

            <p/>

            <ul>
                <li v-for="poll in polls" :key="poll.id">
                    <div class="question">
                        {{ poll.question }}
                    </div>
                    <ul>
                        <li v-for="choice in poll.choices" :key="choice.id">
                            <div class="choice">
                                {{ choice.choice }} - {{ choice.votes }}
                            </div>
                            <button type="button" v-on:click="voteOnChoice(choice)">Vote</button>
                        </li>
                    </ul>
                    <div class="date-time">
                        {{ poll.added }}
                    </div>
                    <p/>
                    <button type="button" v-on:click="removePoll(poll.id)"><i class="fa fa-minus-circle"></i> Remove this poll</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

function initialState () {
    return {
        newPoll: false,
        question: '',
        choices: [{choice: ''}]
    }
}


export default {
    name: 'Polls',
    data: function (){
        return initialState();
    },
    computed: {
        ...mapState('polls', ['polls',])
    },
    methods: {
        ...mapActions('polls', ['addPoll', 'removePoll', 'voteOnChoice',]),
        addPollToggle() {
            this.newPoll = !this.newPoll;
        },
        addChoice() {
            this.choices.push({
                choice: ''
            });
        },
        deleteChoice(index) {
            this.choices.splice(index,1)
        },
    },
	mounted: function () {
        this.$store.dispatch('polls/fetchPolls');
    },
    watch: {
        polls: function () {
            Object.assign(this.$data, initialState());
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>