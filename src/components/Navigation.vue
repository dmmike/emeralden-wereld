<template>
    <div class="menu-list">
        <div class="navbar">
            <router-link class="nav-item home" to="/">
                <p class="nav-link home">Dashboard</p>
            </router-link>
            <router-link class="nav-item" to="/distance">
                <span class="nav-link home">Encounter Distance Generator</span>
            </router-link>
            <router-link class="nav-item" to="/mythic">
                <span class="nav-link home">Game Master Emulator</span>
            </router-link>
            <router-link class="nav-item" to="/herbalism">
                <span class="nav-link home">Herbalism Generator</span>
            </router-link>
<!--            <router-link class="nav-item" to="/npc">-->
<!--                <span class="nav-link home">NPC Generator</span>-->
<!--            </router-link>-->
<!--            <router-link class="nav-item" to="/crit">-->
<!--                <span class="nav-link home">Critical Hit Generator</span>-->
<!--            </router-link>-->
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .menu-list {
        width:100%;
        height:40px;
        background-color: #635b55;
        margin-bottom: 30px;
    }

    .navbar {
        list-style-type: none;
        flex-wrap: wrap;
        display:flex;
    }

    .nav-item {
        font-family: fantasy;
        color: #8d9393;
        height: 40px;
        margin:0px;
        padding:0px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }

    .nav-item:hover {
        background: #443c37;
    }

    .nav-link {
        vertical-align: middle;
        color: white;
    }

</style>
