import {RULE_TYPE_WEAPON, SPECIAL_RULES} from "./SpecialRules";

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

export const TROOP_TYPE_BAGGAGE              = 60;

export const UNIT_SIZE_TINY     = 0;
export const UNIT_SIZE_SMALL    = 1;
export const UNIT_SIZE_STANDARD = 2;
export const UNIT_SIZE_LARGE    = 3;

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
}
