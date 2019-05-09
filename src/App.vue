<template>
    <div id="app">
        <navigation id="navigation"/>
        <router-view/>
    </div>
</template>

<script>
    import Navigation from './components/Navigation'

    export default {
        components:{Navigation}
    }
</script>

<style>
    body {
        background: #ffffff url('./assets/rockywall.png'); /* Background pattern from Subtle Patterns */
        margin:0px;
    }

    .container {
        width:1200px;
        margin:auto;

        display:flex;
        flex-wrap: wrap;
    }

    h2 {
        width:100%;
        text-align:center;
        text-transform: uppercase;
        font-family: fantasy;
        color: white;
        text-shadow: -2px 0 2px black, 0 2px 2px black, 2px 0 2px black, 0 -2px 2px black;
        font-size: 200%;
    }

    * {
    }
</style>
