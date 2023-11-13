<template>
    <nav>
        <router-link to="/">Task One</router-link> |
        <router-link to="/two-task">Task Two</router-link>
    </nav>
    <router-view />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none;
    color: inherit;
}
li {
    list-style: none;
}
img {
    vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: inherit;
    font-size: inherit;
}
html,
body {
    height: 100%;
    line-height: 1;
}
textarea,
button,
input {
    font-weight: inherit;
    font-size: inherit;
    color: inherit;
    font-family: inherit;
}
button {
    cursor: pointer;
    background-color: inherit;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
