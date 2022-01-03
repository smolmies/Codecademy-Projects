// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,

    mutate() {
      const indexForMutation = Math.floor(Math.random() * 15);
      let newMutation = "";
      do {
        newMutation = returnRandBase();
      } while (newMutation === this.dna[indexForMutation]);
      this.dna[indexForMutation] = newMutation;
      return this.dna;
    },

    compareDna(theOtherOne) {
      let sameDnaCounter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === theOtherOne.dna[i]) {
          sameDnaCounter++;
        }
      }

      let percentage = (sameDnaCounter / this.dna.length) * 100;
      console.log(
        `specimen ${this.specimenNum} and specimen ${
          theOtherOne.specimenNum
        } have ${percentage.toFixed(2)}% DNA in common.`
      );
    },

    willLikelySurvive() {
      let strongBaseCounter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          strongBaseCounter++;
        }
      }
      let percentage = (strongBaseCounter / this.dna.length) * 100;

      if (percentage >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
};

const babyP = pAequorFactory(1, mockUpStrand());
const babyA = pAequorFactory(2, mockUpStrand());

console.log(babyP);
console.log(babyP.mutate());
babyP.compareDna(babyA);
console.log(babyA.willLikelySurvive());

const createSurvivors = () => {
  let i = 0;
  let survivingArray = [];
  do {
    i++;
    const baby = pAequorFactory(i, mockUpStrand());
    if (baby.willLikelySurvive()) {
      survivingArray.push(baby);
    }
  } while (survivingArray.length < 30);
  return survivingArray;
}

const eliteP = createSurvivors();

console.log(eliteP);
