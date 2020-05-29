<template>
    <div class="menu-list">
        <div class="navbar">
            <router-link class="nav-item home" to="/"  :class="$route.path === '/' ? 'current-page' : ''">
                <p class="nav-link home">Dashboard</p>
            </router-link>
            <router-link class="nav-item" to="/distance" :class="$route.path === '/distance' ? 'current-page' : ''">
                <span class="nav-link">Encounter Distance Generator</span>
            </router-link>
            <router-link class="nav-item" to="/mythic" :class="$route.path === '/mythic' ? 'current-page' : ''">
                <span class="nav-link">Game Master Emulator</span>
            </router-link>
            <router-link class="nav-item" to="/herbalism" :class="$route.path === '/herbalism' ? 'current-page' : ''">
                <span class="nav-link">Herbalism Generator</span>
            </router-link>
            <router-link class="nav-item" to="/npc" :class="$route.path === '/npc' ? 'current-page' : ''">
                <span class="nav-link">NPC Generator</span>
            </router-link>
            <router-link class="nav-item" to="/crit" :class="$route.path === '/crit' ? 'current-page' : ''">
                <span class="nav-link home">Critical Hit Generator</span>
            </router-link>
          <router-link class="nav-item" to="/aos" :class="$route.path === '/aos' ? 'current-page' : ''">
            <span class="nav-link home">Katakros</span>
          </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        mounted() {
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
        background-color: #443c37;
    }

    .nav-link {
        vertical-align: middle;
        color: white;
    }

    .current-page {
        background-color: #442111;
    }

</style>
