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

    .table {
        width:100%;
    }

    .table-striped th {
        border-bottom: 2px solid rgba(55, 27, 9, 0.83);
    }

    .table td {
        padding: 5px;
    }

    .table-striped {
        border-collapse: collapse;
    }

    .table-striped tr:nth-child(even) td{
        border-top: 2px solid rgba(175, 121, 8, 0.52);
        border-bottom: 2px solid rgba(175, 121, 8, 0.52);
    }

    .table-striped tr:nth-child(even) {
        background-color: rgba(190, 165, 32, 0.73);
    }

    .table-striped tr:nth-child(odd) {
        background-color: rgba(255, 255, 255, 0.75);
    }

</style>
