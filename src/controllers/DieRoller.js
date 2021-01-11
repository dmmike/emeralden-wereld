const mathematician = {
  '+': function (x, y) {
    return x + y;
  },
  '-': function (x, y) {
    return x - y;
  },
  '/': function (x, y) {
    return x / y;
  },
  '*': function (x, y) {
    return x * y;
  },
};

export default {
  roll(rollString) {
    if (Number.parseInt(rollString)) return Number.parseInt(rollString);
    let dissectedString = rollString.replace(/\s/g, '')

    let numberOfDice = parseInt(dissectedString.replace(/(^\d+)/g, '$1'))
    dissectedString = dissectedString.slice(numberOfDice.toString().length)

    /*
     * Different types of roll types are:
     * d - simply roll the die and add the results (1d6)
     *
     * TODO: dissect string to find rolltype. For now we only have 'd'
     */
    let rollType = dissectedString[0]
    dissectedString = dissectedString.slice(1)

    let sizeOfDie = parseInt(dissectedString.replace(/(\d+)/g, '$1'))
    dissectedString = dissectedString.slice(sizeOfDie.toString().length)

    let mathOperator = '+'
    let mathNumber = 0
    if (dissectedString.length > 1) {
      mathOperator = dissectedString[0]
      dissectedString = dissectedString.slice(1)

      mathNumber = dissectedString
    }

    let result = 0
    for (let diceRolled = 0; diceRolled < numberOfDice; diceRolled++) {
      result += this.rollDie(sizeOfDie)
    }

    return mathematician[mathOperator](result, mathNumber)
  },

  rollDie(dieSize) {
    return Math.floor(Math.random() * dieSize + 1)
  },

  d100() {
    return this.rollDie(100)
  },

  d20() {
    return this.rollDie(20)
  },

  d12() {
    return this.rollDie(12)
  },

  d10() {
    return this.rollDie(10)
  },

  d8() {
    return this.rollDie(8)
  },

  d6() {
    return this.rollDie(6)
  },

  d4() {
    return this.rollDie(4)
  }
};
