<template>
  <div id="katakros">
    <div id="wounds">
      <label style="margin: 0 auto;">
        <strong>WOUNDS:</strong>
        <input v-model="wounds" type="number" min="1" max="20"/>
      </label>
    </div>
    <div id="attacks">
      <table>
        <thead>
        <tr>
          <th>MELEE WEAPONS</th>
          <th>Range</th>
          <th>Attacks</th>
          <th>To Hit</th>
          <th>To Wound</th>
          <th>Rend</th>
          <th>Damage</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Inda-Khaat</td>
          <td>1"</td>
          <td>{{inda}} (+1)</td>
          <td>3+</td>
          <td>3+</td>
          <td>-3</td>
          <td>3</td>
        </tr>
        <tr v-if="shield">
          <td>The Shield Immortis</td>
          <td>1"</td>
          <td>4 (+1)</td>
          <td>3+</td>
          <td>3+</td>
          <td>-2</td>
          <td>2</td>
        </tr>
        <tr v-if="alive('liege')" style="height: 10px"></tr>
        <tr class="combined" v-if="alive('liege')">
          <td>Nadirite Weapons</td>
          <td>1"</td>
          <td>{{alive('scrollbearer') + 6*alive('liege')}} (+{{alive('scrollbearer') + alive('liege')}})</td>
          <td>3+</td>
          <td>3+</td>
          <td>-1</td>
          <td>1</td>
        </tr>
        <tr class="combined" v-if="alive('aviarch')">
          <td>Normal Weapons</td>
          <td>1"</td>
          <td>{{3*(alive('necrophos') + alive('aviarch'))}} (+{{alive('necrophos') + alive('aviarch')}})</td>
          <td>3+</td>
          <td>3+</td>
          <td>-1</td>
          <td>1</td>
        </tr>
        <tr v-if="alive('liege')" style="height: 10px"></tr>
        <tr class="companion" v-if="alive('scrollbearer')">
          <td>Nadirite Dagger</td>
          <td>1"</td>
          <td>1 (+1)</td>
          <td>3+</td>
          <td>3+</td>
          <td>-1</td>
          <td>1</td>
        </tr>
        <tr class="companion" v-if="alive('liege')">
          <td>Nadirite Duelling Blades</td>
          <td>1"</td>
          <td>6 (+1)</td>
          <td>3+</td>
          <td>3+</td>
          <td>-1</td>
          <td>1</td>
        </tr>
        <tr v-if="alive('aviarch')" style="height: 10px"></tr>
        <tr class="companion" v-if="alive('necrophos')">
          <td>Soulreaver Greatblade</td>
          <td>1"</td>
          <td>3 (+1)</td>
          <td>3+</td>
          <td>3+</td>
          <td>-1</td>
          <td>1</td>
        </tr>
        <tr class="companion" v-if="alive('aviarch')">
          <td>Spirit Dagger</td>
          <td>1"</td>
          <td>3 (+1)</td>
          <td>3+</td>
          <td>3+</td>
          <td>-1</td>
          <td>1</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div id="abilities">
      <p class="aos-header">ABILITIES</p>
      <aos-ability :key="ability.name" v-for="ability in abilities" :ability="ability"></aos-ability>
      <p class="aos-header">COMMAND ABILITIES</p>
      <aos-ability :ability="endlessDuty"></aos-ability>
      <aos-ability :ability="supremeLord"></aos-ability>
    </div>
  </div>
</template>

<script>
  import Ability from "./Ability";

  export default {
    components: {
      'aos-ability': Ability
    },
    data() {
      return {
        endlessDuty: {
          name: 'Endless Duty',
          description: 'The service an Ossiarch Boneaper owes their liege never, ever ends; if so ordered, they will continue striking at the foe with relentless regularity until no one is left to oppose them.',
          effect: 'You can use this command ability in your shooting phase or any combat phase. If you do so, pick 1 friendly <strong>OSSIARCH BONEREAPERS</strong> unit that is wholly within 12" of a model with this command ability. Add 1 to the Attacks characteristic of weapons used by that unit in that phase. You cannot pick the same unit to benefit from this command ability more than once per phase.'
        },
        wounds: 20,
        woundBreakpoints: [
          {breakpoint: 1, dead: [], inda: 1, shield: false},
          {breakpoint: 3, dead: ['scrollbearer'], inda: 1, shield: false},
          {breakpoint: 8, dead: ['scrollbearer', 'necrophos'], inda: 2, shield: false},
          {breakpoint: 12, dead: ['scrollbearer', 'necrophos', 'aviarch'], inda: 2, shield: false},
          {breakpoint: 20, dead: ['scrollbearer', 'necrophos', 'aviarch', 'liege'], inda: 4, shield: true},
        ]
      }
    },
    computed: {
      abilities() {
        return [
          {
            active: this.shield,
            name: 'Deadly Combination',
            description: 'Katakros can send a foe staggering with a blow from the Shield Immortis and exploit the opening with a follow-up strike from his glaive, Inda-Khaat.',
            effect: 'If the unmodified hit roll for an attack made with the Shield Immorts is 6, that attack inflicts 2 mortal wounds on the target in addition to any normal damage.'
          },
          {
            active: true,
            name: 'Mortarch of the Necropolis',
            description: 'Katakros is the most perfect of Nagash’s constructs and ruler of the Ossiarch Empire.',
            effect: 'At the start of your hero phase, if this model is on the battlefield you can pick up to 3 different friendly <strong>OSSIARCH BONEREAPERS</strong> units wholly within 24" of this model. For each of those units, you can either heal up to 3 wounds allocated to that unit or, if no wounds are allocated to it, you can return a number of slain models to that unit with a combined Wounds characteristic of 3 or less.',
          },
          {
            active: this.alive('liege'),
            name: 'Nadirite Weapons',
            description: 'Nadirite weapons can steal an opponent’s life-force.',
            effect: 'If the unmodified hit roll for an attack made with a Nadirite weapon is 6, that attack scores 2 hits on the target instead of 1. Make a wound and save roll for each hit.',
          },
          {
            active: this.alive('aviarch'),
            name: 'Aviarch Spymaster',
            description: 'The Aviarch Spymaster can use their spy network to disrupt the plans of Katakros’ enemies.',
            effect: 'Once per turn you can roll a dice when your opponent receives a command point. If you do so, on a 4+ that command point is lost.',
          },
          {
            active: this.alive('scrollbearer'),
            name: 'Gnosis Scrollbearer',
            description: 'The Gnosis Scrollbearer that accompanies Katakros transcribes his edicts onto binding contracts that cannot be refused.',
            effect: 'At the start of your hero phase, you can pick 1 enemy unit that is on the battlefield. Until your next hero phase, subtract 1 from hit rolls for attacks made by that unit that target friendly <strong>OSSIARCH BONEREAPERS</strong> units.',
          }
        ].filter(ability => {
          return ability.active;
        }).sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      },
      woundsSuffered() {
        return 20 - this.wounds;
      },
      currentBracket() {
        return this.woundBreakpoints.find(breakpoint => {
          return this.woundsSuffered <= breakpoint.breakpoint;
        });
      },
      inda() {
        return this.currentBracket.inda;
      },
      shield() {
        return this.currentBracket.shield;
      },
      dead() {
        return this.currentBracket.dead;
      },
      supremeLord() {
        return {
          name: 'Supreme Lord of the Bonereaper Legions',
          description: 'An Ossiarch force personally led by Katakros is said to be worth ten times the number of an identical force led by his generals.',
          effect: 'You can use this command ability in your hero phase if <strong>KATAKROS</strong> is your general. If you do so, until your next hero phase, add 1 to hit rolls for attacks made by friendly <strong>OSSIARCH BONEREAPERS</strong> units while they are wholly within ' + (18*(1+this.alive('necrophos'))) + '" of this model, and add 1 to save rolls for attacks that target friendly <strong>MORTIS PRAETORIAN</strong> units while they are wholly within ' + (18*(1+this.alive('necrophos'))) + '" of this model. You can only use this command ability once per hero phase.'
        }
      },
    },
    methods: {
      alive(key) {
        return !this.dead.includes(key);
      }
    }
  }
</script>

<style scoped>
  #katakros {
    width: 850px;

    padding: 0 18px;

    margin: 0 auto 0 auto;
    justify-content: center;
    text-align: center;
  }

  #wounds {
    margin-bottom: 10px;
  }

  #attacks {
    height: 210px;
  }

  #attacks table {
    margin: 0 auto;
    width: 800px;
  }

  .combined {
    color: darkblue;
  }

  .companion {
    color: lightgray;
  }

  .aos-header {
    text-align: left;
    font-weight: bolder;
    font-size: x-large;
    margin-top: 0;
    margin-bottom: 5px;
  }

  #abilities {
    column-count: 3;
    column-gap: 30px;
    margin-top: 30px;
  }
</style>
