import Table from "@/controllers/Table"
import Sexes from "@/controllers/tables/Sexes"
import Genders from "@/controllers/tables/Genders"

export default new Table({
    12: {
        species: 'Anthran',
        urls: {
            wiki: 'anthran',
            name_generator: 'dnd-gnome-names'
        },
        sex: () => {return Sexes.standard.roll()},
        gender: () => {return Genders.standard.roll()},
        subspecies: new Table({
            1: 'Badger',
            2: 'Deer',
            3: 'Dog',
            4: 'Goat',
            5: 'Rat',
            6: 'Weasel'
        }, '1d6')
    },
    19: {
        species: 'Enting',
        urls: {
            wiki: 'entings',
            name_generator: 'warhammer-wood-elf-names'
        },
        sex: () => {return Sexes.personality.roll()},
        gender: () => {return Genders.non_reproductive.roll()},
        subspecies: new Table({
            3: 'Oaken',
            5: 'Pinemar',
            7: 'Willoweth'
        }, '1d7')
    },
    24: {
        species: 'Firbolg',
        urls: {
            wiki: 'firbolg',
            name_generator: 'dnd-firbolg-names'
        },
        sex: () => {return Sexes.standard.roll()},
        gender: () => {return Genders.standard.roll()}
    },
    47: {
        species: 'Human',
        urls: {
            wiki: 'mensen',
            name_generator: 'dnd-human-names'
        },
        sex: () => {return Sexes.standard.roll()},
        gender: () => {return Genders.standard.roll()}
    },
    55: {
        species: 'Lizardfolk',
        urls: {
            wiki: 'lizardfolk',
            name_generator: 'warhammer-lizardmen-names'
        },
        sex: () => {return Sexes.standard.roll()},
        gender: () => {return Genders.standard.roll()}
    },
    61: {
        species: 'Loggart',
        urls: {
            wiki: 'loggarts',
            name_generator: 'dnd-kobold-names'
        },
        sex: () => {return Sexes.standard.roll()},
        gender: () => {return Genders.standard.roll()}
    },
    66: {
        species: 'Minotaur',
        urls: {
            wiki: 'minotaur',
            name_generator: 'dnd-minotaur-names'
        },
        sex: () => {return Sexes.standard.roll()},
        gender: () => {return Genders.standard.roll()}
    },
    78: {
        species: 'Morphensi',
        urls: {
            wiki: 'morphensi',
            name_generator: 'dnd-eladrin-names'
        },
        sex: () => {return Sexes.fluid.roll()},
        gender: () => {return Genders.fluid.roll()}
    },
    79: {
        species: 'Shardmind',
        urls: {
            wiki: 'shardmind',
            name_generator: 'dnd-shardmind-names'
        },
        sex: () => {return Sexes.personality.roll()},
        gender: () => {return Genders.non_reproductive.roll()}
    },
    81: {
        species: 'Syrinx',
        urls: {
            wiki: 'syrinx',
            name_generator: 'dnd-aarakocra-names'
        },
        sex: () => {return Sexes.standard.roll()},
        gender: () => {return Genders.standard.roll()}
    },
    88: {
        species: 'Tabaxi',
        urls: {
            wiki: 'tabaxi',
            name_generator: 'dnd-tabaxi-names'
        },
        sex: () => {return Sexes.standard.roll()},
        gender: () => {return Genders.standard.roll()}
    },
    91: {
        species: 'Trollkin',
        urls: {
            wiki: 'trollkin',
            name_generator: 'mtg-troll-names'
        },
        sex: () => {return Sexes.standard.roll()},
        gender: () => {return Genders.standard.roll()}
    },
    100: {
        species: 'Trox',
        urls: {
            wiki: 'trox',
            name_generator: 'starfinder-shirren-names'
        },
        sex: () => {return Sexes.hive.roll()},
        gender: () => {return Genders.hive.roll()}
    }
})
