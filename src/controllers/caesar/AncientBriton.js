import {
  Unit,
  TROOP_TYPE_CAVALRY_LIGHT, TROOP_TYPE_CAVALRY_MEDIUM, TROOP_TYPE_CHARIOTS_LIGHT,
  TROOP_TYPE_INFANTRY_MEDIUM,
  TROOP_TYPE_INFANTRY_SKIRMISHER,
  UNIT_SIZE_LARGE,
  UNIT_SIZE_SMALL
} from "./Unit";

export default [
  new Unit('warband', 'swords and javelins', TROOP_TYPE_INFANTRY_MEDIUM, 9, 6, 2, 0, 5, 6, ['Wild Fighters'], 28),
  // TODO: Better way to deal with upgrades
  // new Unit('warband', 'swords and javelins', TROOP_TYPE_INFANTRY_MEDIUM, 11, 8, 3, 0, 5, 8, ['Wild Fighters'], 35, UNIT_SIZE_LARGE),
  new Unit('naked fanatics', 'swords and javelins', TROOP_TYPE_INFANTRY_MEDIUM, 9, 6, 2, 0, 5, 6, ['Wild Fighters', 'Fanatic', 'Frenzied Charge'], 32),

  // new Unit(null, 'javelins', TROOP_TYPE_INFANTRY_SKIRMISHER, 3, 2, 2, 0, 0, 4, [], 11, UNIT_SIZE_SMALL),
  // new Unit(null, 'slings', TROOP_TYPE_INFANTRY_SKIRMISHER, 2, 2, 2, 2, 0, 4, ['Slings'], 12, UNIT_SIZE_SMALL),
  new Unit(null, 'bows', TROOP_TYPE_INFANTRY_SKIRMISHER, 2, 2, 2, 2, 0, 4, ['Slings'], 12, UNIT_SIZE_SMALL),

  new Unit(null, 'spears and/or javelins', TROOP_TYPE_CAVALRY_MEDIUM, 8, 5, 3, 0, 5, 6, [], 27),
  // new Unit(null, 'javelins', TROOP_TYPE_CAVALRY_LIGHT, 7, 5, 3, 0, 6, 6, [], 25),
  // new Unit(null, 'javelins', TROOP_TYPE_CAVALRY_LIGHT, 5, 3, 2, 0, 6, 4, [], 17, UNIT_SIZE_SMALL),

  // new Unit(null, 'spears and javelins', TROOP_TYPE_CHARIOTS_LIGHT, 6, 5, 4, 0, 4, 6, 27),
]
