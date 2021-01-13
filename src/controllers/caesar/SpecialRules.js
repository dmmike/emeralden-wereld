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
    description: 'The unit can re-roll failed hand-to-hand combat attacks in the first round of hand-to-hand combat during the game. The maximum number of attacks the unit can re-roll may be 1, 2 or 3, set before the game. For example ‘Wild Fighters 1’ are allowed just a single re-roll. Alternatively, the number can be randomised 1, 2 or 3 before the re-rolls are taken. No matter how many re-rolls are permitted, they only apply in the unit’s first round of hand-to-hand combat in the entire game – so try to make the most of them.'
  },
}
