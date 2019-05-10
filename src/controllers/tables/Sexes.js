import Table from "@/controllers/Table"

export default {
    standard: new Table({
        48: 'female',
        96: 'male',
        100: 'undertermined'
    }),
    personality: new Table({
        35: 'female',
        70: 'male',
        100: 'undetermined'
    }),
    hive: new Table({
        15: 'female',
        95: 'male',
        100: 'undetermined'
    }),
    fluid: new Table({
        37: 'male',
        74: 'female',
        100: 'undetermined'
    })
}
