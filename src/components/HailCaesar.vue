<template>
  <div class="container">
    <div id="armyChoice">
      <div  v-for="(_, army) in armies" :key="army"
            class="chooseArmyButton"
            :class="{selected: selectedArmy === army}"
            @click="selectedArmy = army;selectedUnit=0"
            v-html="army"
      ></div>
    </div>
    <h2>Army Units</h2>
    <div id="armyUnits">
      <table>
        <thead>
        <tr>
          <th class="ta-left">Unit</th>
          <th>Clash</th>
          <th>Sustained</th>
          <th>Short Range</th>
          <th>Long Range</th>
          <th>Morale Save</th>
          <th>Stamina</th>
          <th>Special</th>
          <th>Points</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(unit, index) in units" :key="index" @click="selectedUnit=index" class="clickable">
          <td class="unitName ta-left">{{unit.unitName}}</td>
          <td>{{unit.clash}}</td>
          <td>{{unit.sustained}}</td>
          <td>{{unit.short}}</td>
          <td>{{unit.long}}</td>
          <td>{{unit.moraleSave}}</td>
          <td>{{unit.stamina}}</td>
          <td>{{unit.specialRules.join(', ')}}</td>
          <td>{{unit.points}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <h2>Unit Info</h2>
    <div id="unitInfo" :set="unit=units[selectedUnit]" v-if="units[selectedUnit]">
      <div class="column" id="unitRules" :set="rules=unit.specialList">
        <h3>Special</h3>
        <div v-if="!Object.keys(rules).length"><i>No special rules</i></div>
        <div v-for="(rule, ruleName) in rules">
          <h4>{{ruleName}}</h4>
          <ul>
            <li v-for="bullet in rule.bullets">{{bullet}}</li>
          </ul>
          <div v-html="rule.description"></div>
        </div>
      </div>
      <div class="column" id="unitFormations" :set="formations=unit.formations">
        <h3>Formations</h3>
        <div v-for="(formation, formationName) in formations">
          <h4>{{formationName}}</h4>
          <ul>
            <li v-for="bullet in formation.bullets">{{bullet}}</li>
          </ul>
          <div v-html="formation.description"></div>
        </div>
      </div>
    </div>
    <div id="generalRules">

    </div>
  </div>
</template>

<script>
import ImperialRoman from "../controllers/caesar/ImperialRoman";
import AncientBriton from "../controllers/caesar/AncientBriton";

export default {
  name: "HailCaesar",
  data() {
    return {
      armies: {
        'Ancient Briton': AncientBriton,
        'Imperial Roman': ImperialRoman,
      },
      selectedArmy: 'Ancient Briton',
      selectedUnit: 0,
    }
  },
  computed: {
    units() {
      if (!this.selectedArmy) return [];
      else return this.armies[this.selectedArmy];
    },
  }
}
</script>

<style scoped>
.container {
  margin-top: 30px;
}

#armyChoice {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.chooseArmyButton {
  width: 110px;
  height: 110px;
  margin: 5px;
  vertical-align: middle;
  text-align: center;
  border: darkslategrey solid 5px;
  border-radius: 30px;
  cursor: pointer;

  text-transform: uppercase;
  color: white;
  font-size: 150%;
  font-family: fantasy;
  text-shadow: -2px 0 2px black, 0 2px 2px black, 2px 0 2px black, 0 -2px 2px black;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.selected {
  background-color: rgba(255, 0, 0, 0.5);
}

#armyUnits table {
  width: 100%;
}

#armyUnits table th, #armyUnits table td {
  padding: 5px;
}

#armyUnits table td {
  text-align: center;
}

#armyUnits table .ta-left{
  text-align: left;
}

.unitName:first-letter {
  text-transform: capitalize;
}

.clickable {
  cursor: pointer;
}

h3 {
  width:100%;
  text-align:center;
  text-transform: uppercase;
  font-family: fantasy;
  color: white;
  text-shadow: -2px 0 2px black, 0 2px 2px black, 2px 0 2px black, 0 -2px 2px black;
}

#unitInfo {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5vh;
}

.column {
  width: 45%;
}
</style>
