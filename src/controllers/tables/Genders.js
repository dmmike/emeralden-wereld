import Table from "@/controllers/Table"

export default {
    standard: new Table({
        60: 'straight',
        85: 'gay',
        93: 'bi',
        100: 'other',
    }),
    non_reproductive: new Table({
        100: 'undetermined',
    }),
    hive: new Table({
        20: 'asexual',
        90: 'straight',
        93: 'gay',
        98: 'bi',
        100: 'other',
    }),
    fluid: new Table({
        20: 'straight',
        40: 'bi',
        60: 'gay',
        100: 'other',
    })
}
