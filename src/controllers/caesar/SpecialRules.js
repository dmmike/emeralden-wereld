export const RULE_TYPE_FORMATION = 0;
export const RULE_TYPE_WEAPON    = 1;

export const SPECIAL_RULES = {
  'Drilled': {
    bullets: [
      'Free move on a failed order',
      'Move through or out of the way of friends without risk of disorder',
    ],
    description:
      'Drilled units make one free move if they fail their order, unless a blunder is rolled in which case this takes precedence. If a division order encompasses units that are drilled and units that are not, then only the drilled units are entitled to this free move.<br/><br/>' +
      'Drilled units do not risk becoming disordered when moving through other drilled units where both are in a battle line formation. Drilled units do not risk disorder when moving out of the way of other drilled units that are giving ground in hand-to-hand combat and where both are in battle line formation.<br/><br/>'
  },
  'Fanatic': {
    bullets: [
      'Morale save +1 until shaken'
    ],
    description: 'Fanatic troops have a Morale value bonus of +1 regardless of type – they are so intoxicated by drugs or fervour that they ignore all but the most fatal wounds and fight with utter disregard for their own safety. This effect lasts until the unit is shaken. Once the unit is shaken it loses its special Morale save bonus and reverts to whatever Morale value it would normally have for its type. '
  },
  'Frenzied Charge': {
    summary: 'Must charge with 3 moves allowed.',
    bullets: [
      'Must charge with 3 Moves Allowed',
    ],
    description: 'If there are visible enemy within charge reach and which the unit can potentially charge, then the unit <b>must</b> be given a charge order. The player has no choice in the matter. If issued a successful charge order the unit always moves up to three moves regardless of the result. If the order to charge is failed the unit still makes one free move. In addition, the unit must use its initiative to charge where it can do so, and can make up to three moves to reach the enemy when it does. Note that shaken or disordered units are not allowed to charge and so are not affected. Units have to be able to charge to be affected by the Frenzied Charge rule.'
  },
  'Pilum': {
    type: RULE_TYPE_WEAPON,
    bullets: [
      'Enemy -1 Morale save in first round'
    ],
    description: 'If a unit is armed with pila or the equivalent, then any enemy the unit is fighting to its front suffers a –1 Morale save penalty against hits inflicted by the unit in the first round of each and every hand-to-hand engagement. This penalty applies regardless of whether the unit charges or is charged, and note that it applies in the first round of every combat engagement and not just the first combat engagement of the battle. Also , remember the penalty to the enemy’s Morale only applies where the pilum armed unit is fighting to its front and not where it is merely supporting the combat or fighting to its sides or rear.'
  },
  'Slings': {
    type: RULE_TYPE_WEAPON,
    bullets: [
      'Enemy Morale -1 at short range'
    ],
    description: 'Enemy Morale saves are reduced by 1 from hits at short range (6" or less). Where a significant proportion of shooters are at a different range, it may be necessary to roll two batches of dice – with only those attacks made at short range incurring the Morale save penalty.'
  },
  'Testudo': {
    type: RULE_TYPE_FORMATION,
    bullets: [
      'Free move',
      '+2 Morale saves from ranged attacks',
      'Counts \'front\' all round to ranged attacks',
      'Make no ranged attacks',
      'Adopt battle line if engaged',
      'Cannot support',
    ],
    description: 'A unit in testudo formation has a free move and therefore always moves at least once when given an order, unless a blunder is rolled. If the unit suffers a blunder its formation limits its movement to forwards only.<br/><br/>' +
      'A unit in testudo formation has a Morale save bonus of +2 from ranged attacks. In addition all faces of the formation count as the unit’s front to enemies making ranged attacks against it, and will therefore suffer the –1 ‘to hit’ penalty for shooting at the front of a heavy infantry formation.<br/><br/>' +
      'A unit in testudo formation makes no attacks in the ranged attacks part of the turn. The testudo is essentially a formation for movement, an armoured column, and not prepared for missile combat.<br/><br/>' +
      'A testudo that becomes engaged in combat automatically changes to a battle line as it does so, troops spreading out into a fighting formation. So, if a testudo charges into combat it automatically changes to a battle line formation at the same time. If a testudo moves into an engagement as a support it also changes into battle line. Similarly, if the testudo is charged it automatically responds by changing into a battle line formation facing the enemy as soon as it becomes engaged. This formation change happens automatically in both cases and no account is made of it as a move.<br/><br/>' +
      'Note that because troops in testudo formation spread out on contact with the enemy it is necessary to leave sufficient space to enable them to do so. Where there is insufficient room for the unit to deploy in this way it still counts as a battle line and fights as such. In this case the unit must be rearranged into a battle line at the first opportunity, even where giving ground or making a move following combat.'
  },
  'Wild Fighters': {
    bullets: [
      'Re-roll missed combat attacks in the first round of the game',
    ],
    description: 'The unit can re-roll failed hand-to-hand combat attacks in the first round of hand-to-hand combat during the game. The maximum number of attacks the unit can re-roll may be 1, 2 or 3, set before the game. The default value is 3. For example ‘Wild Fighters 1’ are allowed just a single re-roll. Alternatively, the number can be randomised 1, 2 or 3 before the re-rolls are taken. No matter how many re-rolls are permitted, they only apply in the unit’s first round of hand-to-hand combat in the entire game – so try to make the most of them.'
  },
  'Column': {
    type: RULE_TYPE_FORMATION,
    bullets: [
      'Reduced combat value',
      'Free move on failed order',
      '-2 Morale saves',
      'Make no ranged attacks',
      'Cannot support',
    ],
    description: 'A column is a formation used for movement. An infantry column formation is two to four models wide, any other unit in column formation is one or two models wide. A column formation must have more ranks than files.<br/><br/>A column of troops need not necessarily be a perfect rectangle, but can be arranged to flow around obstacles or follow a curving track, for example. Columns will often be marching along roads or tracks, or between buildings or around other troops, and must obviously be free to follow the necessary path.<br/><br>' +
      'Units in a column formation cannot charge, can only make 1 attack in hand-to-hand combat, and they cannot make any ranged attacks or offer support in hand-to-hand combat. Furthermore, they suffer a -2 penalty to all Morale saves.'
  },
  'Open Order': {
    type: RULE_TYPE_FORMATION,
    bullets: [
      'Re-roll missed combat attacks in the first round of the game',
      'Cannot support',
    ],
    description: 'Skirmishers, horse archers and all tiny units are restricted to open order or column formations and cannot adopt other formations.<br/><br/>' +
      'Light infantry, light cavalry and light chariots can adopt open order as an option during the battle. These troops can operate in column, battle line or in open order as the occasion demands.<br/><br/>' +
      'Other infantry and cavalry can only adopt open order when moving in situations where they could not otherwise move at all, or where they could not move without incurring some penalty. This usually happens when operating in wooded land, moving over rough ground, and crossing rivers or other kinds of obstacles . Such units must revert to a battle line or other formation as soon as possible once they are out of the woods, rough ground, etc.<br/><br/>' +
      'Other units – heavy chariots, artillery, elephants and baggage – cannot adopt open order at all. This will restrict their ability to move through some kinds of terrain such as woods and rough ground.<br/><br/>' +
      'When a unit adopts open order the models’ bases are spaced up to 1" apart so they form a chain or loose mass.<br/><br/>' +
      'A unit in open order is less likely to get hit by ranged attacks, but cannot charge formed units and suffers a penalty to hit in hand-to-hand combat. A unit in open order cannot support another unit in combat.'
  },
  'Evade': {
    bullets: [
      'Evade an enemy as a response to a charge',
      'Only open order units can evade',
    ],
    description: 'Only units in open order are allowed to try and evade from a charge. Units in open order have no formal facing, and will therefore always attempt to move directly away from the unit charging them. Units that are already <i>disordered</i> are <b>not</b> allowed to evade.<br/><br>' +
      'An evade interrupts the regular flow of play and takes place out of the normal turn sequence. The attempt is made once it has been established the charger can charge into contact, but before moving the charging unit.<br/><br/>' +
      'A unit that evades successfully cannot evade again if charged by another enemy unit that turn. If charged a second time the unit is obliged to stand without making closing shots or any other response.<br/><br/>' +
      'The evade move takes place exactly like a move given in the Command phase and requires an order in the usual way. In this case the order is ‘evade’ and, if the order is issued successfully, the unit is moved as far as possible one, two, or three moves into the quarter opposite the chargers. In the case of an evade order, if the test is failed the evaders can still move once, so evaders will always move one, two, or three moves depending upon their roll. If the evade order is given by the army’s general the result can be re-rolled in the usual way.<br/><br/>' +
      'Once the evaders have moved, the chargers complete their move. Depending on how many moves the chargers have, they may be able to catch the evaders, or they may find the evaders have moved beyond range. In either case, the chargers must attempt to complete their order in the usual manner. If evaders have moved through other enemy to their rear, then the chargers can potentially charge these troops if their order has been framed in a suitable manner.<br/><br/>' +
      'Evaders are automatically destroyed if their enemy catch them. The unit is removed from the table. The chargers are treated as having beaten their enemy in hand-to-hand fighting, and have the same options as described for victorious units.<br/><br/>' +
      'If evaders are not caught, and assuming chargers do not redirect their charge to another unit indicated by their orders, then chargers are left high-and-dry and the normal sequence of play resumes. The evading unit is not otherwise penalised and can continue to move normally in the player’s following turn.<br/><br/>' +
      'It can happen that a unit attempting an evade rolls a blunder (double six) in which case we would suggest the unit rolls its blunder and acts accordingly. Even with a blunder there is a good chance of a unit moving away from the charger and out of reach.'
  },

  'Battle Line': {
    type: RULE_TYPE_FORMATION,
    bullets: [
      'Standard formation',
    ],
    description: 'The battle line formation is the standard formation. A infantry or cavalry unit is arranged in two ranks of troops, although some close fighting infantry are arranged into three ranks. A battle line of artillery or chariots is arranged one deep. Elephants are fielded as a battle line of a single model and cannot adopt other formations.'
  },
  'Square': {
    type: RULE_TYPE_FORMATION,
    bullets: [
      'Defensive infantry formation',
      'Protects all sides',
      '+1 Morale save',
      'Reduced combat efficiency',
      'Cannot support',
      'Limited to one move',
    ],
    description: 'Only heavy, medium or light infantry can form a square. The unit is arranged into a roughly square shape with each side the same width as near as possible, and the models facing outwards where it is practical for them to do so.<br/><br/>' +
      'A unit in square formation can still make ranged attacks but with a maximum of 1 dice. It can attack in hand-to-hand combat with a maximum of 2 dice per side, and it counts as not having a rear or flank. They have a +1 bonus to Morale saves. Units in square formation ignore Retreat and Give Ground break test results and treat them as Hold Your Ground. A unit in square formation cannot support other units in hand-to-hand combat.<br/><br/>' +
      'While a unit is in square formation it cannot move at all, and the only move it can take is to change its formation.'
  },
  'Heavy Infantry': {
    bullets: [
      'Ranged have -1 to hit from the front',
    ],
    description: 'When a ranged attack is made against a heavy infantry unit from the front when that unit has shields, those attacks suffer a -1 to hit (and so typically only hit on a 5+).'
  },
  'Countercharge': {
    bullets: [
      'Charge as a response to a charge to your front',
      'Only chariots and cavalry can countercharge',
    ],
    description: 'A cavalry or chariot unit that is charged to its front by another unit of any kind can respond with a countercharge. Units charged to the flank or rear cannot countercharge. Counterchargers must be of a type and status normally allowed to charge the enemy bearing down upon them. Open order units can countercharge other open order units assuming they are otherwise able to do so.<br/><br/>' +
      'A countercharge interrupts the regular flow of play and takes place out of the normal turn sequence. The move is made simultaneously with that of the charger and must be worked out before the charging unit moves.<br/><br/>' +
      'A countercharge requires no order, and can be enacted automatically so long as the charger would otherwise either contact its target, or move to within one move’s distance of the target’s front. Note that this means a countercharge is possible even in some situations where the chargers would fail to contact their target.<br/><br/>' +
      'Make the charger’s and countercharger’s moves simultaneously. Establish a point equidistant between and move both units so they contact at that position. Both the charger and countercharger are treated as having charged and both units receive all the combat bonuses as if charging, including any bonuses from weapons or special rules.<br/><br/>' +
      'If cavalry or chariots countercharge against infantry other than those in open order, then the infantry are automatically <strong>disordered</strong> and receive no ‘to hit’ bonus for charging. This does not apply if chargers are infantry in open order. Open order infantry can charge chariots or open order cavalry without becoming disordered. They are not allowed to charge formed cavalry so the situation will not arise.<br/><br/>' +
      'If cavalry or chariots countercharge, then any other cavalry or chariots already positioned to support them in hand-to-hand combat can move with them and take part in the ensuing combat round. Just move the supporting units along with the counterchargers.'
  },
  'Turn to Face': {
    bullets: [
      'Turn to face an incoming charge',
      'Only formed cavalry and elephants can turn to face',
    ],
    description: 'A formed cavalry or elephant unit that is charged to the flank or rear can respond by pivoting to face the enemy if it has room to do so, or simply turning about if charged in the rear. Units that are already disordered are not allowed to turn to face their enemy in this way.<br/><br/>' +
      'A turn to face interrupts the regular flow of play and takes place out of the normal turn sequence. The move is made simultaneously with the move of the charger in a similar fashion to the countercharge.<br/><br/>' +
      'No order is required for a unit to turn to face where it is allowed to do so. The turn happens automatically. If charged to its flank the unit is pivoted to confront the enemy head on if possible. If this is not possible it is pivoted sufficiently to bring the charge within its front quarter. The charger is then arranged against the front of the unit in the usual way.'
  },
  'Artillery': {
    bullets: [
      'Reduce morale with ranged attacks',
      'Cannot (fully) move and shoot',
      'Break when giving ground',
      'Cannot support unless light',
      'Can shoot overhead',
    ],
    description: 'Light artillery imposes a -1 penalty to Morale saves against ranged attacks made by the unit. Medium and heavy artillery impose a -2 penalty. Light artillery can only make a single move and shoot in the same turn. Any other artillery cannot move at all if they want to shoot. Artillery units can shoot overhead at targets as long as there is 6" of clear ground in front of both shooter and target.<br/><br/>' +
      'When an artillery unit gets a Give Ground break result, it is destroyed and Breaks instead. An artillery unit cannot support other units in hand-to-hand combat unless it is light artillery.'
  },
  'Warband': {
    type: RULE_TYPE_FORMATION,
    bullets: [
      'Light infantry cannot normally form open order',
      'Standard formation'
    ],
    description: 'A warband is a mass of loosely ordered warriors. It is equivalent to a battle line except it has more ranks.<br/><br/>' +
      'If composed of light infantry they may not form open order except in the same way as medium or heavy infantry.'
  },
}
