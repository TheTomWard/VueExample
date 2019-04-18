<template>
    <div class="blog">
        <h1>This is the blog page</h1>

        <div class="holder">
            <button type="button" v-if="!newBlog" v-on:click="newPostToggle()"><i class="fa fa-plus-circle"></i> Add a new post</button>
            <div v-else>
                <form @submit.prevent="addPost({title: title, content: content})">
                    <div class="new-post">
                        <div class="title">Title:</div>
                        <input type="text" placeholder="Title..." v-model="title" name="title">
                        <p/>
                        <div class="content">Content:</div>
                        <input type="text" placeholder="What do you want to say..." v-model="content" name="content">
                        <p/>
                        <button type="submit">Submit</button>
                        <button type="button" v-on:click="newPostToggle()"><i class="fa fa-minus-circle"></i> Cancel</button>
                    </div>
                </form>
            </div>

            <p/>

            <ul>
                <li v-for="data in posts" :key="data.id">
                    <div class="title">
                        {{ data.title }}
                    </div>
                    <p/>
                    <div class="content">
                        {{ data.content }}
                    </div>
                    <p/>
                    <div class="date-time">
                        {{ data.created_at }}
                    </div>
                    <p/>
                    <button type="button" v-on:click="removePost(data.id)"><i class="fa fa-minus-circle"></i> Remove this post</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

function initialState () {
    return {
        newBlog: false,
        title: '',
        content: ''
    }
}

export default {
    name: 'Blog',
    data: function (){
        return initialState();
    },
    computed: {
        ...mapState('blog', ['posts',])
    },
    methods: {
        ...mapActions('blog', ['addPost', 'removePost',]),
        newPostToggle() {
            this.newBlog = !this.newBlog;
        }
    },
	mounted: function () {
        this.$store.dispatch('blog/fetchPosts');
    },
    watch: {
        posts: function () {
            Object.assign(this.$data, initialState());
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>