import Table from "@/controllers/Table"

export default {
    standard: new Table({
        70: 'straight',
        88: 'gay',
        96: 'bi',
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
        40: 'straight',
        70: 'bi',
        85: 'gay',
        100: 'other',
    })
}
