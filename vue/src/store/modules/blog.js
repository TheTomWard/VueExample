import axios from 'axios';

const state = {
    posts: []
};

const getters = {

};

const mutations = {
    updatePosts (state, posts) {
        state.posts = posts
    },
    addPost (state, post) {
        state.posts.push(post);
    },
    removePost (state, id) {
        state.posts.splice(obj => {obj.id == id}, 1);
    }
};

const actions = {
    fetchPosts ({ commit }) {
        axios.get('http://localhost:8000/posts/').then((response) => {
            commit('updatePosts', response.data);
        })
    },
    addPost ({ commit }, payload) {
        axios.post('http://localhost:8000/posts/', payload).then((response) => {
            commit('addPost', response.data);
        })
    },
    removePost ({ commit }, id) {
        axios.delete('http://localhost:8000/posts/' + id).then(() => {
            commit('removePost', id);
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