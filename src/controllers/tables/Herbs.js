import Table from "@/controllers/Table"
import Ingredient from '@/controllers/Ingredient'

export default {
    arctic: new Table({
        2: 'silver_hibiscus',
        3: 'mortflesh_powder',
        4: 'ironwood_heart',
        5: {
            additional_rule: 'double',
            ingredient: 'frozen_seedlings'
        },
        6: 'common_ingredient',
        7: 'common_ingredient',
        8: 'common_ingredient',
        9: {
            additional_rule: 'double',
            ingredient: 'arctic_creeper'
        },
        10: 'fennel_silk',
        11: 'fiends_ivy',
        12: 'voidroot',
    }, '2d6'),
    desert: new Table({
        2: 'cosmos_glond',
        3: 'arrow_root',
        4: 'dried_ephedra',
        5: {
            additional_rule: 'double',
            ingredient: 'cactus_juice'
        },
        6: 'common_ingredient',
        7: 'common_ingredient',
        8: 'common_ingredient',
        9: 'drakus_flower',
        10: 'scillia_beans',
        11: 'spineflower_berries',
        12:
            {
                additional_rule: 'elemental',
                ingredient: 'voidroot'
            }
    }, '2d6'),
    grassland: new Table({
        2: 'harrada_leaf',
        3: 'drakus_flower',
        4: {
            additional_rule: 'double',
            ingredient: 'lavender_sprig'
        },
        5: 'arrow_root',
        6: 'common_ingredient',
        7: 'common_ingredient',
        8: 'common_ingredient',
        9: {
            additional_rule: 'double',
            ingredient: 'scillia_beans'
        },
        10: 'cactus_juice',
        11: 'tail_leaf',
        12: 'hyancinth_nectar',
    }, '2d6'),
    coastal: new Table({
        2: {
            additional_rule: '1d2',
            ingredient: 'hydrathistle',
        },
        3: {
            additional_rule: 'underwater',
            ingredient: 'amanita_cap'
        },
        4: 'hyancinth_nectar',
        5: {
            additional_rule: '1d2',
            ingredient: 'chromus_slime',
        },
        6: 'common_ingredient',
        7: 'common_ingredient',
        8: 'common_ingredient',
        9: {
            additional_rule: 'underwater',
            ingredient: 'lavender_sprig'
        },
        10: {
            additional_rule: 'underwater',
            ingredient: 'blue_toadshade'
        },
        11: 'wrackwort_bulbs',
        12: 'cosmos_glond',
    }, '2d6'),
    forest: new Table({
        2: 'harrada_leaf',
        3: 'nightshade_berries',
        4: 'emetic_wax',
        5: 'verdant_nettle',
        6: 'common_ingredient',
        7: 'common_ingredient',
        8: 'common_ingredient',
        9: 'arrow_root',
        10: 'ironwood_heart',
        11: 'blue_toadshade',
        12: {
            additional_rule: 'night',
            ingredient: 'wisp_stalks',
        },
    }, '2d6'),
    hill: new Table({
        2: 'devils_bloodleaf',
        3: 'nightshade_berries',
        4: {
            additional_rule: 'double',
            ingredient: 'tail_leaf'
        },
        5: 'lavender_sprig',
        6: 'common_ingredient',
        7: 'common_ingredient',
        8: 'common_ingredient',
        9: 'ironwood_heart',
        10: 'gengko_brush',
        11: {
            additional_rule: 'double',
            ingredient: 'rock_vine'
        },
        12: 'harrada_leaf',
    }, '2d6'),
    mountain: new Table({
        2: 'basilisk_breath',
        3: {
            additional_rule: 'double',
            ingredient: 'frozen_seedlings'
        },
        4: {
            'additional_rules': 'double',
            ingredient: 'arctic_creeper'
        },
        5: 'dried_ephedra',
        6: 'common_ingredient',
        7: 'common_ingredient',
        8: 'common_ingredient',
        9: 'drakus_flower',
        10: {
            additional_rule: 'cave',
            ingredient: 'tail_leaf'
        },
        11: 'rock_vine',
        12: 'primordial_balm',
    }, '2d6'),
    swamp: new Table({
        2: 'devils_bloodleaf',
        3: 'spineflower_berries',
        4: 'emetic_wax',
        5: {
            additional_rule: 'double',
            ingredient: 'amanita_cap'
        },
        6: 'common_ingredient',
        7: 'common_ingredient',
        8: 'common_ingredient',
        9: {
            additional_rule: 'double',
            ingredient: 'blue_toadshade'
        },
        10: 'wrackwort_bulb',
        11: {
            additional_rule: 'rain',
            ingredient: 'hydrathistle'
        },
        12: 'primordial_balm',
    }, '2d6'),
    common: new Table({
        2: 'mandrake_root',
        3: 'quicksilver_lichen',
        4: 'quicksilver_lichen',
        5: 'wild_sageroot',
        6: 'wild_sageroot',
        7: {
            additional_rule: 'provisions',
            ingredient: 'bloodgrass'
        },
        8: 'wyrmtongue_petals',
        9: 'wyrmtongue_petals',
        10: 'milkweed_seeds',
        11: 'milkweed_seeds',
        12: 'mandrake_root',
    }, '2d6'),
    descriptions: {
        bloodgrass: new Ingredient(
            'Bloodgrass',
            'Common',
            '<b>Special (Potion Effect):</b> Can combine with any other <b>Potion Effect</b> ingredient to become a food source for 1 day. Cannot be altered by other ingredients.',
            '--',
            'Most Terrain'
        ),
        chromus_slime: new Ingredient(
            'Chromus Slime',
            'Rare',
            '<b>Special (Potion & Toxin Modifier):</b> The final <b>Effect</b> after all other calculations is the exact opposite. This is up to the DM\'s discretion on the specifics per potion/poison.',
            '+4',
            'Coastal, Underdark'
        ),
        dried_ephedra: new Ingredient(
            'Dried Ephedra',
            'Uncommon',
            '<b>Potion Modifier:</b> Increase the dice-type by 1 size for any healing <b>Effect.</b>',
            '+2',
            'Desert, Mountain'
        ),
        emetic_wax: new Ingredient(
            'Emetic Wax',
            'Common',
            '<b>Special (Potion & Toxin Modifier):</b> Delay the <b>Effect</b> of an ingredient this was combined with by 1d6 rounds.',
            '+1',
            'Forest, Swamp'
        ),
        fennel_silk: new Ingredient(
            'Fennel Silk',
            'Common',
            '<b>Potion Effect:</b> Stabilizes body heat to resist cold weather or wet condition penalties for 1 hour. Cannot be altered by other ingredients.',
            '+2',
            'Arctic, Underdark'
        ),
        gengko_brush: new Ingredient(
            'Gengko Brush',
            'Uncommon',
            '<b>Potion Modifier:</b> Double the dice rolled of any healing <b>Effect</b>, but divide the total of the dice by 2 (rounded down); Then, the recipient receives that amount of healing per round for 2 rounds.',
            '+2',
            'Hills, Underdark'
        ),
        hyancinth_nectar: new Ingredient(
            'Hyancinth Nectar',
            'Common',
            '<b>Potion Effect:</b> Removes 1d6 rounds of poison in the target\'s system, but cannot remove it completely. One round of poison damage will still occur at minimum.',
            '+1',
            'Coastal, Grasslands'
        ),
        lavender_sprig: new Ingredient(
            'Lavender Sprig',
            'Common',
            '<b>Special (Potion & Toxin Modifier):</b> makes the potion or toxin more stable and safer to craft.',
            '-2',
            'Coastal, Grasslands, Hills'
        ),
        mandrake_root: new Ingredient(
            'Mandrake Root',
            'Common',
            '<b>Potion Effect:</b> Reduce any disease or poison\'s potency by half for 2d12 hours. Only hinders already existing poisons or diseases in the body. Cannot be altered by other ingredients.',
            '--',
            'Most Terrain'
        ),
        milkweed_seeds: new Ingredient(
            'Milkweed Seeds',
            'Common',
            '<b>Potion Modifier:</b> Double the dice of any healing <b>Effect</b>, but remove all Alchemy Modifier bonuses. This modifier can stack.',
            '+2',
            'Most Terrain'
        ),
        wild_sageroot: new Ingredient(
            'Wild Sageroot',
            'Common',
            '<b>Potion Effect:</b> Heals for 2d4 + Alchemy Modifier.',
            '--',
            'Most Terrain'
        ),
        arctic_creeper: new Ingredient(
            'Arctic Creeper',
            'Common',
            '<b>Toxin Modifier:</b> Change poison damage to cold or necrotic damage; the target is still <i>[poisoned]</i> for 1 minute on a failed CON saving throw; this toxin is still considered poison damage when combining with other ingredients.',
            '+2',
            'Arctic, Mountain'
        ),
        amanita_cap: new Ingredient(
            'Amanita Cap',
            'Common',
            '<b>Toxin Modifier:</b> Changes any poison <b>Effect</b> to be non-lethal and only incapacitate the target.',
            '+1',
            'Coastal, Swamp'
        ),
        basilisk_breath: new Ingredient(
            'Basilisk Breath',
            'Very Rare',
            '<b>Special (Toxin Effect):</b> Slowly paralyzes target. Target makes a DC 5 + <i>Alchemy Modifier</i> Constitution saving throw each turn for 4 turns. While under this effect, target is considered slowed by the <i>slow</i> spell. On a failed save, the target is considered <i>paralyzed</i> for 4 rounds. Cannot be modified or altered by other ingredients.',
            '+5',
            'Mountain'
        ),
        cactus_juice: new Ingredient(
            'Cactus Juice',
            'Common',
            '<b>Toxin Modifier:</b> The target will not notice any poison damage <b>Effect</b> in their systems until they take 5 rounds of damage from the toxin.',
            '+2',
            'Desert, Grasslands'
        ),
        drakus_flower: new Ingredient(
            'Drakus Flower',
            'Common',
            '<b>Toxin Modifier:</b> Change poison damage to fire or acid damage; the target is still <i>[poisoned]</i> for 1 minute on a failed Con saving throw; this toxin is still considered poison damage when combining with other ingredients.',
            '+2',
            'Desert, Grasslands, Mountain'
        ),
        frozen_seedlings: new Ingredient(
            'Frozen Seedlings',
            'Rare',
            '<b>Toxin Modifier:</b> While <i>[poisoned]</i>, the target\'s movement speed is reduced by 10 ft. Cannot be altered by other ingredients.',
            '+4',
            'Arctic, Mountain'
        ),
        harrada_leaf: new Ingredient(
            'Harrada Leaf',
            'Common',
            '<b>Toxin Modifier:</b> Being <i>[poisoned]</i> by this toxin actual applies the <i>poisoned</i> condition',
            '+1',
            'Forest'
        ),
        quicksilver_lichen: new Ingredient(
            'Quicksilver Lichen',
            'Uncommon',
            '<b>Toxin Modifier:</b> Double the dice rolled of any <b>Toxin Effect</b>, but reduce that <b>Effect</b> duration by half. This modifier can stack.',
            '+3',
            'Most Terrain'
        ),
        radiant_synthseed: new Ingredient(
            'Radiant Synthseed',
            'Rare',
            '<b>Toxin Modifier:</b> Change poison damage to radiant damage; target is still <i>[poisoned]</i> for 1 minute on a failed Con saving throw; this toxin is still considered poison damage when combining with other ingredients.',
            '+2',
            'Underdark'
        ),
        spineflower_berries: new Ingredient(
             'Spineflower Berries',
            'Uncommon',
            '<b>Toxin Modifier:</b> Increase the dice-type by 1 size for any <b>Toxin Effect.</b>',
            '+3',
            'Desert, Swamp'
        ),
        wyrmtongue_petals: new Ingredient(
            'Wyrmtongue Petals',
            'Common',
            '<b>Toxin Effect:</b> 1d4 + Alchemy Modifier poison damage per round; target is <i>[poisoned]</i> for 1 minute, although it can attempt to save again at the end of its turn.',
            '--',
            'Most Terrain'
        ),
        arrow_root: new Ingredient(
            'Arrow Root',
            'Uncommon',
            '<b>Enchantment:</b> +1 to attack rolls for one minute when applied to a weapon.',
            '+2',
            'Desert, Forest, Grasslands'
        ),
        blue_toadshade: new Ingredient(
            'Blue Toadshade',
            'Rare',
            '<b>Enchantment:</b> User creates a <i>potion of gaseous form</i> (DMG 187).',
            '+3',
            'Coastal, Forest, Swamp'
        ),
        cosmos_glond: new Ingredient(
            'Cosmos Glond',
            'Rare',
            '<b>Enchantment:</b> User creates a <i>potion of clairvoyance</i> (DMG 187).',
            '+3',
            'Coastal, Desert'
        ),
        devils_bloodleaf: new Ingredient(
            'Devil\'s Bloodleaf',
            'Very Rare',
            '<b>Enchantment:</b> User creates as <i>potion of vitality</i> (DMG 188)',
            '+5',
            'Hills, Swamp, Underdark'
        ),
        elemental_water: new Ingredient(
            'Elemental Water',
            'Rare',
            '<b>Special (Enchantment):</b> This is required as the base catalyst for all <b>Echantment</b> ingredients.',
            '+3',
            'Special'
        ),
        fiends_ivy: new Ingredient(
            'Fiend\'s Ivy',
            'Rare',
            '<b>Enchantment:</b> User creates a <i>potion of mind reading</i> (DMG 188).',
            '+4',
            'Arctic, Underdark'
        ),
        hydrathistle: new Ingredient(
            'Hydrathistle',
            'Uncommon',
            '<b>Enchantment:</b> User creates a <i>potion of water breathing</i> (DMG 188).',
            '+2',
            'Coastal, Swamp'
        ),
        ironwood_heart: new Ingredient(
            'Ironwood Heart',
            'Uncommon',
            '<b>Enchantment:</b> User creates a <i>potion of growth</i> (DMG 187).',
            '+3',
            'Arctic, Forest, Hills'
        ),
        luminous_cap_dust: new Ingredient(
            'Luminous Cap Dust',
            'Rare',
            '<b>Enchantment:</b> User creates a <i>potion of heroism</i> (DMG 188).',
            '+4',
            'Mountain, Underdark'
        ),
        mortflesh_powder: new Ingredient(
            'Mortflesh Powder',
            'Very Rare',
            '<b>Enchantment:</b> User creates a <i>potion of longevity</i> (DMG 188).',
            '+5',
            'Arctic, Underdark'
        ),
        nightshade_berries: new Ingredient(
            'Nightshade Berries',
            'Uncommon',
            '<b>Enchantment:</b> The effect of this "potion" is similar to the <i>oil of slipperiness</i> (DMG 184).',
            '+3',
            'Forest, Hills'
        ),
        primordial_balm: new Ingredient(
            'Primordial Balm',
            'Rare',
            '<b>Enchantment:</b> User creates a <i>potion of frost/fire/stone giant strength</i> (DMG 187).',
            '+4',
            'Mountain, Swamp, Underdark'
        ),
        rock_vine: new Ingredient(
            'Rock Vine',
            'Rare',
            '<b>Enchantment:</b> User creates a <i>potion of invulnerability</i> (DMG 188).',
            '+4',
            'Hills, Mountain'
        ),
        scillia_beans: new Ingredient(
            'Scillia Beans',
            'Common',
            '<b>Enchantment:</b> User creates a <i>potion of climbing</i> (DMG 187).',
            '+1',
            'Desert, Grasslands'
        ),
        silver_hibiscus: new Ingredient(
            'Silver Hibiscus',
            'Rare',
            '<b>Enchantment:</b> When consumed, the user can unleash a random elemental <i>breath weapon</i> 3 times (PHB 34).',
            '+4',
            'Arctic, Underdark'
        ),
        tail_leaf: new Ingredient(
            'Tail Leaf',
            'Very Rare',
            '<b>Enchantment:</b> User creates a <i>potion of speed</i> (DMG 188).',
            '+5',
            'Grasslands, Hills'
        ),
        verdant_nettle: new Ingredient(
            'Verdant Nettle',
            'Uncommon',
            '<b>Enchantment:</b> User creates a <i>potion of animal friendship</i> (DMG 187).',
            '+2',
            'Forest'
        ),
        voidroot: new Ingredient(
            'Voidroot',
            'Very Rare',
            '<b>Enchantment:</b> User creates a <i>potion of flying</i> (DMG 187).',
            '+5',
            'Arctic, Desert'
        ),
        wisp_stalks: new Ingredient(
            'Wisp Stalks',
            'Very Rare',
            '<b>Enchantment:</b> User creates a <i>potion of invisibility</i> (DMG 188).',
            '+5',
            'Forest, Underdark'
        ),
        wrackwort_bulbs: new Ingredient(
            'Wrackwort Bulbs',
            'Rare',
            '<b>Enchantment:</b> User creates a <i>potion of diminution</i> (DMG 187).',
            '+4',
            'Coastal, Swamp'
        ),
    }
}
