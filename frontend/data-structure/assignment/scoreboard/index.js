class Score {
  constructor(name, correct, wrong, empty) {
    // TODO: answer here
    this.name = name;
    this.correct = correct;
    this.wrong = wrong;
    this.empty = empty;
    this.score = correct * 4 - wrong;
  }
}

class Scores {
  constructor(scores) {
    // TODO: answer here
    this.score = scores;
    this.prevArr = scores;
  }

  topStudents() {
    // TODO: answer here
    for (var i = 0; i < this.score.length; i++) {
      for (var j = i + 1; j < this.score.length; j++) {
        if (this.score[i].score == this.score[j].score) {
          if (this.score[i].correct < this.score[j].correct) {
            var temp = this.score[i];
            this.score[i] = this.score[j];
            this.score[j] = temp;
          }
        }
        if (this.score[i].score < this.score[j].score) {
          var temp = this.score[i];
          this.score[i] = this.score[j];
          this.score[j] = temp;
        }
      }
    }
    return this.score.map((item) => {
      return item.name;
    });
  }
}
let s = [];

s.push(new Score("Agus", 2, 4, 0)); //score: 2*4 - 0 = 8
s.push(new Score("Budi", 2, 4, 0));
let scores = new Scores(s);

console.log(scores.topStudents());
module.exports = {
  Score,
  Scores,
};
