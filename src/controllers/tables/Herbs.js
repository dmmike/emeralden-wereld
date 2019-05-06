import Table from "@/controllers/Table"

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
            ingredient: 'scilia_beans'
        },
        10: 'cactus_juice',
        11: 'tail_leaf',
        12: 'hyacinth_nectar',
    }, '2d6'),
    coastal: new Table({
        2: {
            additional_rule: '1d2',
            ingredient: 'hydrathistle',
        },
        3: {
            additional_rule: 'water',
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
            additional_rule: 'water',
            ingredient: 'lavender_sprig'
        },
        10: {
            additional_rule: 'water',
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
        2: 'basilisks_breath',
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
            additional_rule: 'cave',
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
    }, '2d6')
}
