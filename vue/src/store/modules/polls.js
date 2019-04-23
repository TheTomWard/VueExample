import axios from 'axios';

const state = {
    polls: []
};

const getters = {

};

const mutations = {
    updatePolls (state, polls) {
        state.polls = polls
    },
    addPoll (state, poll) {
        state.polls.push(poll);
    },
    removePoll (state, id) {
        state.polls.splice(obj => {obj.id == id}, 1);
    },
    voteOnChoice(state, choice) {
        state.polls.filter(obj => {obj.id == choice.question}).filter(obj => {obj.id == choice.id}).votes++;
    },
};

const actions = {
    fetchPolls ({ commit }) {
        axios.get('http://localhost:8000/questions/').then((response) => {
            commit('updatePolls', response.data);
        })
    },
    addPoll ({ commit }, payload) {
        console.log(payload.data);
        axios.post('http://localhost:8000/questions/', payload).then((response) => {
            commit('addPoll', response);
        })
    },
    removePoll ({ commit }, id) {
        axios.delete('http://localhost:8000/questions/' + id).then(() => {
            commit('removePoll', id);
        })
    },
    voteOnChoice({ commit }, payload) {
        payload.votes++;
        axios.put('http://localhost:8000/choices/' + payload.id + '/', payload).then(() => {
            commit('voteOnChoice', payload);
        })
    },
};

export default {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};