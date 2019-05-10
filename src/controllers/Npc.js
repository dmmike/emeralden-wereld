import Races from "@/controllers/tables/Races"
import Classes from "@/controllers/tables/Classes"

export default class Npc {
    constructor () {
        let race = Races.roll()

        this.sex = race.sex()
        this.gender = race.gender()
        this.species = race.species

        if(race.hasOwnProperty('subspecies')) {
            this.subspecies = race.subspecies.roll()
        }

        this.urls = race.urls

        this.cclss = Classes.roll();
    }
}
