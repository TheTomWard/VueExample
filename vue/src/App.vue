<template>
    <div id="app">
        <div class="outer-menu">
            <div class="inner-menu">

            </div>
        </div>
        <div class="outer-content">
            <div class="outer-header">
                <div class="inner-header">
                    <h1>Woahhh! Radical Vue.js website dude!</h1>
                </div>
            </div>
            <div class="outer-nav">
                <div class="inner-nav">
                    <nav>
                        <div>
                            <router-link to="/">Home</router-link>
                        </div>
                        <div>
                            <router-link to="/skills">Skills</router-link>
                        </div>
                        <div>
                            <router-link to="/blog">Blog</router-link>
                        </div>
                        <div>
                            <router-link to="/polls">Polls</router-link>
                        </div>
                        <div>
                            <router-link to="/about">About</router-link>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="mid-content">
                <div class="inner-content">
                    <router-view />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'app',
    components: {
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
    @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

    /** {*/
        /*outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;*/
    /*}*/

    html {
        background-color: #222;
        font-family: 'Montserrat', sans-serif;
        color: whitesmoke;
    }

    body {
        margin: 0;
    }

    .outer-menu {
        height: 100%;
        width: 5%;
        position: fixed;
        background-color: mediumpurple;
        z-index: 3;
    }

    .inner-menu {
        height: 100%;
        padding: 20px;
    }

    .outer-content {
        height: 100%;
        width: 95%;
        position: fixed;
        right: 0;
    }

    .outer-header {
        height: 10%;
        width: 95%;
        position: fixed;
        border-bottom: 1px solid whitesmoke;
        z-index: 2;
    }

    .inner-header {
        padding: 0px 20px;
    }

    .outer-nav {
        height: 90%;
        width: 15%;
        left: 0;
        bottom: 0;
        position: absolute;
        z-index: 1;
    }

    .inner-nav {
        height: 95%;
        margin: 20px 0px;
        padding: 0px 20px;
        border-right: 1px solid #DDD;
    }

    .mid-content {
        height: 90%;
        width: 85%;
        right: 0;
        bottom: 0;
        position: absolute;
        overflow:scroll;
    }

    .inner-content {
        padding: 0px 20px;
    }

    nav a {
        margin: 5px 0px;
        color: #DDD;
    }
</style>
