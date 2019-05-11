import DieRoller from "@/controllers/DieRoller"
import Table from "@/controllers/Table"

export default {
    hit_locations: new Table({
        2: {
            table: 'head',
            location: 'Head',
        },
        5: {
            table: 'arm',
            location: 'Secondary Arm',
        },
        9: {
            table: 'arm',
            location: 'Primary Arm',
        },
        16: {
            table: 'body',
            location: 'Body',
        },
        18: {
            table: 'leg',
            location: 'Left Leg',
        },
        20: {
            table: 'leg',
            location: 'Right Leg'
        }
    }, '1d20'),
    crits: {
        head: new Table({
            35: {
                effect: 'You gain a scar',
                healing: 'Level 6+ healing spells',
            },
            50: {
                effect: 'You lose ' + DieRoller.d6() + ' teeth.',
                healing: 'Regenerate',
            },
            70: {
                effect: 'You are <i>stunned</i> until the end of your next turn.',
            },
            80: {
                effect: 'You are <i>blinded</i> until the end of your next turn.',
            },
            85: {
                effect: 'You lose an ear. Disadvantage on Wisdom (Perception) checks using sound. If you have no more ears, you are permanently <i>deafened</i>.',
                healing: 'Regenerate',
            },
            90: {
                effect: 'You lose an eye. Disadvantage on Wisdom (Perception) checks using vision. Short range of ranged weapons is halved. If you have no more eyes, you are permanently <i>blinded</i>.',
                healing: 'Regenerate',
            },
            99: {
                effect: 'You fall <i>unconscious</i>.',
                healing: 'At the start of your turn, you can make a DC 15 Constitution saving throw. If you succeed, you wake up. Level 4+ healing spells also wake you up.',
            },
            114: {
                effect: 'You drop to 0 hit points.',
            },
            115: {
                effect: 'You drop to 0 hit points with two failed death saves.',
            }
        }),
        arm: new Table({
            35: {
                effect: 'You gain a scar',
                healing: 'Level 6+ healing spells',
            },
            65: {
                effect: 'You have disadvantage on all actions that you take using the arm hit until the end of your next turn.',
            },
            80: {
                effect: 'You drop whatever is in your hand, and you cannot use that hand until the start of the net turn',
                healing: 'Level 3+ healing spells',
            },
            90: {
                effect: 'You lose a finger. If you have no more fingers remaining, you lose the hand',
                healing: 'Regenerate',
            },
            95: {
                effect: 'Your hand is broken, and you immediately drop whatever you\'re holding. The hand is no longer usable',
                healing: 'Level 6+ healing spells. During a long rest, your hand can be treated. At the end of the long rest, the caretaker can roll a DC 10 Wisdom (Medicine) check. If successful, the hand improves. Improvement goes from not being able to use the hand to disadvantage when using the hand to regaining full use.',
            },
            98: {
                effect: 'Your arm is broken and you cannot use it anymore',
                healing: 'Level 6+ healing spells. During a long rest, your arm can be treated. At the end of the long rest, the caretaker can roll a DC 15 Wisdom (Medicine) check. If successful, the arm improves. Improvement goes from not being able to use the arm to disadvantage when using the arm to regaining full use.',
            },
            109: {
                effect: 'You lose your hand',
                healing: 'Regenerate',
            },
            110: {
                effect: 'You lose your arm. Unless you receive healing before the start of your next turn, you drop to 0 hit points as you bleed out.',
                healing: 'Regenerate',
            }
        }),
        body: new Table({
            35: {
                effect: 'You gain a scar',
                healing: 'Level 6+ healing spells',
            },
            55: {
                effect: 'You drop prone.'
            },
            75: {
                effect: 'You are <i>stunned</i> until the end of your next turn'
            },
            89: {
                effect: 'Your maximum and current hit points are reduced by 1 per hour and per action you take. If your maximum hit points are reduced to 0, you die.',
                healing: 'Level 3+ healing spells. After an hour of treatment, a caretaker can make a DC 15 Wisdom (Medicine) check, reducing the internal bleeding by 1 on a success. They can try to speed up this healing and do it as an action, but doing so causes the check to be made at disadvantage, and failing the check triggers the bleeding.',
            },
            99: {
                effect: 'You break your ribs. You have disadvantage on Strength, Dexterity, and Constitution ability checks and saving throws.',
                healing: 'Level 6+ healing spells. During a long rest, your ribs can be treated. At the end of the long rest, the caretaker can roll a DC 10 Wisdom (Medicine) check. If successful, the ribs improve. Improvement goes from not not being at disadvantage to saving throws anymore to full recovery.'
            },
            109: {
                effect: 'You are paralyzed until the end of your next turn.',
            },
            110: {
                effect: 'You drop to 0 hit points with 1 failed death saving throw.'
            }
        }),
        leg: new Table({
            35: {
                effect: 'You gain a scar',
                healing: 'Level 6+ healing spells',
            },
            55: {
                effect: 'You drop prone.'
            },
            70: {
                effect: 'Your speed is reduced by 5, to a minimum of 5 feet.',
                healing: 'Level 4+ healing spells restore 10 feet. You regain 5 feet of movement after a short rest.',
            },
            80: {
                effect: 'Your speed is reduced by 10, to a minimum of 5 feet.',
                healing: 'Level 4+ healing spells restore 10 feet. You regain 5 feet of movement after a short rest.',
            },
            90: {
                effect: 'You break your foot or leg. You drop prone, and you cannot use that leg anymore. Your speed becomes 5 feet.',
                healing: 'Level 6+ healing spells. During a long rest, your foot or leg can be treated. At the end of the long rest, the caretaker can roll a DC 10 Wisdom (Medicine) check. If successful, your leg or foot improves. Improvement goes from from speed being reduced by 10 feet and disadvantage on using the leg, to a full recovery.'
            },
            98: {
                effect: 'You lose a toe. If you have no more toes, you lose the foot. You have disadvantage on Dexterity (Acrobatics) tests to maintain your balance.',
                healing: 'Regenerate. Disadvantage on Dexterity (Acrobatics) checks is removed after a long rest.'
            },
            109: {
                effect: 'You lose a foot and drop prone. Your speed becomes 5 feet and you have disadvantage on Dexterity (Acrobatics) checks to maintain your balance.',
                healing: 'Regenerate',
            },
            110: {
                effect: 'You lose a leg and drop prone. Your speed becomes 5 and you have disadvantage on Dexterity (Acrobatics) checks to maintain your balance. Unles you receive any healing before the start of your next turn, you drop to 0 hit points as you bleed out.',
                healing: 'Regenerate',
            }
        })
    }
}
