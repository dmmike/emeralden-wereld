import {
  TROOP_TYPE_ARTILLERY_LIGHT,
  TROOP_TYPE_CAVALRY_LIGHT,
  TROOP_TYPE_INFANTRY_HEAVY,
  Unit,
  UNIT_SIZE_SMALL, UNIT_SIZE_STANDARD
} from "./Unit";

export default [
  new Unit('legionary', 'pila and swords', TROOP_TYPE_INFANTRY_HEAVY, 7, 7, 3, 0, 4, 6, ['Drilled', 'Pilum', 'Testudo'], 32, UNIT_SIZE_STANDARD),

  new Unit('auxiliary', 'javelins', TROOP_TYPE_CAVALRY_LIGHT, 5, 3, 2, 0, 6, 4, [], 17, UNIT_SIZE_SMALL),

  new Unit('scorpion bolt throwers', null, TROOP_TYPE_ARTILLERY_LIGHT, 1, 1, 2, 2, 0, 3, ['Drilled'], 18)
]
