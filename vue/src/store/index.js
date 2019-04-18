import Vue from 'vue';
import Vuex from 'vuex';

import skills from './modules/skills'
import blog from './modules/blog'
import polls from './modules/polls'

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        skills,
        blog,
        polls,
    }
});

export default store;