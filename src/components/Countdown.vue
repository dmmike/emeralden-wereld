<template>
  <div id="countdown">
    <div id="buttons">
      <button :disabled="lettersPicked.length>8 || maxVowelsReached" @click="drawVowel">Klinker</button>
      <button :disabled="lettersPicked.length>8 || maxConsonantsReached" @click="drawConsonant">Medeklinker</button>
      <button @click="discard">Letters wegdoen</button>
    </div>

    <table>
      <tr>
        <td v-for="index in 9" :class="{letter: lettersPicked[index-1] !== undefined}" @click="remove(index-1)">
          {{lettersPicked[index-1]}}
        </td>
      </tr>
    </table>

    <p v-if="bestLength">Beste optie is {{bestLength}} lang</p>
    <p v-for="answer in answers" v-if="answer.length === bestLength">{{answer}}</p>
  </div>
</template>

<script>
  import wordlist from '@/assets/wordlist.json';

  let wordsSplit = {};

  let nineletters = [];
  let anagramSets = {};

  wordlist.forEach(word => {
    let letters = word.split('');
    let letterCounts = {};
    letters.forEach(letter => {
      letter = letter.toUpperCase();
      if (letterCounts[letter] === undefined) {
        letterCounts[letter] = 1;
      }
      else {
        letterCounts[letter]++;
      }
    })

    if (word.length === 9) nineletters.push(word)
    {
      letters.sort();
      let check = letters.join('');
      if (anagramSets[check] === undefined) {
        anagramSets[check] = [word];
      }
      else {
        anagramSets[check].push(word);
      }
    }
    wordsSplit[word] = letterCounts;
  })

  let setsToKeep = Object.keys(anagramSets).filter(check => {
    if (anagramSets[check].length !== 2) {
      return false;
    }

    let anagrams = anagramSets[check];
    let wordA = anagrams[0];
    let wordB = anagrams[1];
    let maxLength = 3
    for (let i = 0; i < 9-maxLength; i++) {
      if (wordB.includes(wordA.substring(i, i+maxLength-1))) {
        return false;
      }
    }
    return true;
  })

  console.log(setsToKeep.length);
  let anagrams = {};
  setsToKeep.forEach(check => {
    anagrams[check] = anagramSets[check];
  })

  console.log(anagrams);
  // console.log(anagramSets[setsToKeep[Math.floor(Math.random() * setsToKeep.length)]]);

  const vowelDistribution = {
    'U': 1.99,
    'O': 6.06,
    'I': 6.50,
    'A': 7.49,
    'E': 18.91,
  };
  const vowelRate = 67;

  const consonantDistribution = {
    'Q': 0.009,
    'Y': 0.035,
    'X': 0.040,
    'F': 0.81,
    'C': 1.24,
    'Z': 1.39,
    'J': 1.46,
    'W': 1.52,
    'P': 1.57,
    'B': 1.58,
    'M': 2.21,
    'K': 2.25,
    'H': 2.38,
    'V': 2.85,
    'G': 3.40,
    'L': 3.57,
    'S': 3.73,
    'D': 5.93,
    'R': 6.41,
    'T': 6.79,
    'N': 10.03,
  };
  const consonantRate = 74;

  const minVowels = 3;
  const minConsonants = 4;

  let BreakException = {};

  export default {
    data() {
      return {
        vowels: [],
        consonants: [],
        lettersPicked: [],
        answers: [],
      }
    },
    computed: {
      vowelsPicked() {
        return this.lettersPicked.filter(letter => vowelDistribution[letter] !== undefined).length;
      },
      consonantsPicked() {
        return this.lettersPicked.length - this.vowelsPicked;
      },
      maxVowelsReached() {
        return this.vowelsPicked === 9 - minConsonants;
      },
      maxConsonantsReached() {
        return this.consonantsPicked === 9 - minVowels;
      },
      bestLength() {
        if (this.answers.length) {
          return this.answers[0].length;
        }
        else {
          return false;
        }
      }
    },
    watch: {
      lettersPicked() {
        this.answers = [];
        if (this.lettersPicked.length !== 9) return;
        let letters = {};
        this.lettersPicked.forEach(letter => {
          if (letters[letter] === undefined) {
            letters[letter] = 1;
          }
          else {
            letters[letter]++;
          }
        });

        Object.keys(wordsSplit).forEach(word => {
          try {
            Object.keys(wordsSplit[word]).forEach(letter => {
              if (letters[letter] === undefined || wordsSplit[word][letter] > letters[letter]) {
                throw BreakException;
              }
            })
            this.answers.push(word);
          }
          catch (err) {

          }
        })

        this.answers.sort((a, b) => b.length - a.length);
      }
    },
    mounted() {
      this.fillDecks();
    },
    methods: {
      fillDecks() {
        this.vowels = [];
        this.consonants = [];
        this.lettersPicked = [];

        let totalVowelDistribution = 100/Object.values(vowelDistribution).reduce((a, b) => a+b);
        Object.keys(vowelDistribution).forEach(vowel => {
          let rate = Math.max(Math.round((vowelDistribution[vowel]/100)*vowelRate*totalVowelDistribution), 1);
          for (let i = 0; i < rate; i++) {
            this.vowels.push(vowel);
          }
        });

        let totalConsonantDistribution = 100/Object.values(consonantDistribution).reduce((a, b) => a+b);
        Object.keys(consonantDistribution).forEach(consonant => {
          let rate = Math.max(Math.round(consonantDistribution[consonant]/100*consonantRate*totalConsonantDistribution), 1);
          for (let i = 0; i < rate; i++) {
            this.consonants.push(consonant);
          }
        });
      },
      drawVowel() {
        let index = Math.floor(Math.random()*this.vowels.length);
        this.lettersPicked.push(this.vowels[index]);
        this.vowels.splice(index, 1);
      },
      drawConsonant() {
        let index = Math.floor(Math.random()*this.consonants.length);
        this.lettersPicked.push(this.consonants[index]);
        this.consonants.splice(index, 1);
      },
      discard() {
        this.lettersPicked = [];
      },
      remove(index){
        let letter = this.lettersPicked[index];

        this.lettersPicked.splice(index, 1);
      },
      countdown() {

      }
    }
  }
</script>

<style scoped>

  table {
    background-color: #6496f3;
    border: 4px solid #3b4683;
    margin-left: auto;
    margin-right: auto;
  }

  td {
    height: 90px;
    width: 90px;
    border: 2px solid #6496f3;
    background-color: #80b2f5;
  }

  @font-face {
    font-family: Futura;
    src: url("/src/assets/futura.otf");
  }

  .letter {
    color: white;
    background-color: #24379f;
    text-align: center;
    font-size: 60px;
    font-family: Futura;
    font-weight: bold;
    cursor: pointer;
  }

  #buttons {
    text-align: center;
    margin-bottom: 30px;
  }

  #buttons button {
    margin: 10px;
  }

</style>
