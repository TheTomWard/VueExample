import axios from 'axios';

const state = {
    skills: []
};

const getters = {

};

const mutations = {
    updateSkills (state, skills) {
        state.skills = skills
    },
    addSkill (state, skill) {
        state.skills.push(skill);
    },
    removeSkill (state, id) {
        state.skills.splice(obj => {obj.id == id}, 1);
    }
};

const actions = {
    fetchSkills ({ commit }) {
        axios.get('http://localhost:8000/skills/').then((response) => {
            commit('updateSkills', response.data);
        })
    },
    addSkill ({ commit }, payload) {
        axios.post('http://localhost:8000/skills/', payload).then((response) => {
            commit('addSkill', response.data);
        })
    },
    removeSkill ({ commit }, id) {
        axios.delete('http://localhost:8000/skills/' + id).then(() => {
            commit('removeSkill', id);
        })
    },
};

export default {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
}