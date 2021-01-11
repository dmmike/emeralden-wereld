<template>
  <div style="max-width: 1200px; margin:auto;">
    <h3>Treasure</h3>
    <div id="types_container">
      <div class="treasure_type" v-for="(status, type) in treasureTypes" :key="type" @click="generateLoot(type)" v-html="type" :class="status"></div>
    </div>
  </div>
</template>

<script>
import lootdata from "../controllers/lootdata";
import DieRoller from "../controllers/DieRoller";
import Jewellery from "../controllers/tables/Jewellery";

export default {
  name: "WHFRPLoot",
  data() {
    return {
      treasureTypes: {
          'Small Monster': 'silver',
      }
    }
  },
  computed: {
    lootTable() {return lootdata}
  },
  methods: {
    generateLoot(type) {
      const data = this.lootTable[type];
      const moneyData = data.money, valuablesData = data.valuables, itemsData = data.items;
      const tier = this.treasureTypes[type];

      //Step 1: Generate money
      let loot = {money: {}, valuables: {}, items: {}};
      if (moneyData) {
        Object.keys(moneyData).forEach(coin => {
          if (DieRoller.d100() <= moneyData[coin].chance) {
            loot.money[coin] = DieRoller.roll(moneyData[coin].value);
          }
        })
      }

      //Step 2: Generate valuables
      Object.keys(valuablesData).forEach(valuable => {
        const v = valuablesData[valuable];
        if (DieRoller.d100() <= v.chance) {
          loot.valuables[valuable] = this.generateValuables(valuable, tier, DieRoller.roll(v.number));
        }
      })

      //Step 3: Generate items
      Object.keys(itemsData).forEach(item => {
        const i = itemsData[item];
        if (DieRoller.d100() <= i.chance) {
          loot.items[item] = this.generateItems(item, DieRoller.roll(i.number));
        }
      })

      console.log(JSON.stringify(loot));
    },
    generateValuables(type, tier, number) {
      let valuables = [], callback, params = {};
      switch(type) {
        case 'gems':
          params.tier = tier;
          callback = this.generateGem;
      }
      while (valuables.length < number) {
        valuables.push(callback(params));
      }

      return valuables;
    },
    generateDomestic() {},
    generateGem({tier}) {
      let obj;
      if(DieRoller.d10() <= 5) {
        obj = _.sample({
          brass: ['Amber', 'Agate', 'Hematite', 'Lapis Lazuli', 'Malachite', 'Rhodocrosite', 'Obsidian', 'Quartz', 'Tiger Eye', 'Turqoise'],
          silver: ['Amethyst', 'Aquamarine', 'Bloodstone', 'Citrine', 'Jasper', 'Moonstone', 'Onyx', 'Peridot', 'Topaz', 'Zircon'],
          gold: ['Beryl', 'Diamond', 'Emerald', 'Garnet', 'Jade', 'Opal', 'Pearl', 'Ruby', 'Sapphire', 'Spinel'],
        }[tier]);
      }
      else {
        obj = Jewellery.roll();
      }

      return `${obj} (${DieRoller.roll('2d10')} ${tier})`;
    },
    generateArt() {},
    generateCloth() {},
    generateItems(type, number) {
      let items = [], callback, params = {};
      switch(type) {
        case 'scrolls':
          callback = this.generateScroll;
      }
      while (items.length < number) {
        items.push(callback(params));
      }

      return items;
    },
    generateScroll() {

    },
    generateGrimoire() {

    },
    generateRandomItem() {

    },
  },
}
</script>

<style scoped>

</style>
