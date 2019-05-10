import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import EncounterDistance from '@/components/EncounterDistance'
import GameMasterEngine from "@/components/GameMasterEngine"
import Herbalism from "@/components/Herbalism"
import NpcGenerator from "@/components/NpcGenerator"
import CriticalGenerator from "@/components/CriticalGenerator"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/distance',
            name: 'EncounterDistance',
            component: EncounterDistance
        },
        {
            path: '/mythic',
            name: 'GameMasterEngine',
            component: GameMasterEngine
        },
        {
            path: '/herbalism',
            name: 'Herbalism',
            component: Herbalism
        },
        {
            path: '/npc',
            name: 'NpcGenerator',
            component: NpcGenerator
        },
        {
            path: '/crit',
            name: 'CritGenerator',
            component: CriticalGenerator
        }
    ]
})
