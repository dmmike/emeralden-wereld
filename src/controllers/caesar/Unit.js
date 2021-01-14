import {RULE_TYPE_FORMATION, RULE_TYPE_WEAPON, SPECIAL_RULES} from "./SpecialRules";

export const TROOP_TYPE_INFANTRY_SKIRMISHER = 10;
export const TROOP_TYPE_INFANTRY_LIGHT      = 11;
export const TROOP_TYPE_INFANTRY_MEDIUM     = 12;
export const TROOP_TYPE_INFANTRY_HEAVY      = 13;

export const TROOP_TYPE_CAVALRY_ARCHERS     = 20;
export const TROOP_TYPE_CAVALRY_LIGHT       = 21;
export const TROOP_TYPE_CAVALRY_MEDIUM      = 22;
export const TROOP_TYPE_CAVALRY_HEAVY       = 23;
export const TROOP_TYPE_CAVALRY_CATAPHRACTS = 24;

export const TROOP_TYPE_ARTILLERY_LIGHT     = 31;
export const TROOP_TYPE_ARTILLERY_MEDIUM    = 32;
export const TROOP_TYPE_ARTILLERY_HEAVY     = 33;

export const TROOP_TYPE_CHARIOTS_LIGHT      = 41;
export const TROOP_TYPE_CHARIOTS_HEAVY      = 43;

export const TROOP_TYPE_ELEPHANTS           = 50;

export const TROOP_TYPE_BAGGAGE             = 60;

export const UNIT_SIZE_TINY     = 0;
export const UNIT_SIZE_SMALL    = 1;
export const UNIT_SIZE_STANDARD = 2;
export const UNIT_SIZE_LARGE    = 3;

const SPECIAL_RULES_FOR_TYPE = {
  10: ['Column', 'Open Order', 'Evade',],
  11: ['Battle Line', 'Column', 'Open Order', 'Square',],
  12: ['Battle Line', 'Column', 'Open Order', 'Square',],
  13: ['Battle Line', 'Column', 'Open Order', 'Square', 'Heavy Infantry'],
  20: ['Column', 'Open Order', 'Evade',],
  21: ['Battle Line', 'Column', 'Open Order', 'Evade', 'Countercharge', 'Turn to Face'],
  22: ['Battle Line', 'Column', 'Open Order', 'Evade', 'Countercharge', 'Turn to Face'],
  23: ['Battle Line', 'Column', 'Open Order', 'Evade', 'Countercharge', 'Turn to Face'],
  24: ['Battle Line', 'Column', 'Open Order', 'Evade', 'Countercharge', 'Turn to Face', 'Cataphract'],
  31: ['Battle Line', 'Column', 'Artillery'],
  32: ['Battle Line', 'Column', 'Artillery'],
  33: ['Battle Line', 'Column', 'Artillery'],
  41: ['Battle Line', 'Column', 'Open Order', 'Evade', 'Countercharge',],
  43: ['Battle Line', 'Column', 'Countercharge',],
  50: ['Battle Line', 'Column', 'Turn to Face'],
  60: [],
}

export class Unit {
  constructor(name, weapons, type, clash, sustained, short, long, morale, stamina, special, points, size = UNIT_SIZE_STANDARD) {
    this.name = name;
    this.weapons = weapons;
    this.type = type;
    this.weapons = weapons;
    this.clash = clash;
    this.sustained = sustained;
    this.short = short;
    this.long = long;
    this.morale = morale;
    this.stamina = stamina;
    this.special = special;
    this.points = points;
    this.size = size;
  }

  get unitName() {
    let troopType = '',
      special = false,
      weight = this.type%10,
      weaponsPart = this.weapons ? ' armed with ' + this.weapons : '',
      sizePart = this.size !== UNIT_SIZE_STANDARD ? ` fielded as a ${this.unitSize} unit` : '',
      unitName;

    if (weight < 1 || weight > 3) {
      switch (this.type) {
        case 10: troopType = 'skirmisher infantry'; break;
        case 20: troopType = 'horse archers'; break;
        case 24: troopType = 'cataphract cavalry'; break;
        case 50: troopType = 'elephants'; break;
        case 60: troopType = 'baggage'; break;
      }
    }
    else {
      switch (weight) {
        case 1: troopType += 'light'; break;
        case 2: troopType += 'medium'; break;
        case 3: troopType += 'heavy'; break;
      }

      switch(Math.floor(this.type/10)) {
        case 1: troopType += ' infantry'; break;
        case 2: troopType += ' cavalry'; break;
        case 3: troopType += ' artillery'; break;
        case 4: troopType += ' chariots'; break;
      }
    }

    return (this.name ? `${this.name}${weaponsPart}, ${troopType}`: `${troopType}${weaponsPart}`) + sizePart;
  }

  get unitSize() {
    switch(this.size) {
      case 0: return 'tiny';
      case 1: return 'small';
      case 2: return 'standard';
      case 3: return 'large';
    }
  }

  get moraleSave() {
    return this.morale > 0 ? this.morale + '+' : '-';
  }

  get specialRules() {
    return this.special.filter(rule => SPECIAL_RULES[rule].type !== RULE_TYPE_WEAPON);
  }

  get specialList() {
    const specialRules = this.special
      .concat(SPECIAL_RULES_FOR_TYPE[this.type])
      .filter(rule => SPECIAL_RULES[rule].type !== RULE_TYPE_FORMATION)
      .sort();

    let rulesByName = {};
    specialRules.forEach(rule => rulesByName[rule] = SPECIAL_RULES[rule]);
    return rulesByName;
  }

  get formations() {
    let specialRules;

    if (this.size === UNIT_SIZE_TINY) {
      specialRules = ['Open Order', 'Column'];
    }
    else {
      specialRules = this.special
        .concat(SPECIAL_RULES_FOR_TYPE[this.type])
        .filter(rule => SPECIAL_RULES[rule].type === RULE_TYPE_FORMATION);

      if (specialRules.includes('Warband')) {
        specialRules = specialRules.filter(formation => formation !== 'Battle Line')
      }
    }
    specialRules.sort();
    let formationsByName = {};
    specialRules.forEach(rule => formationsByName[rule] = SPECIAL_RULES[rule]);
    return formationsByName;  }
}
