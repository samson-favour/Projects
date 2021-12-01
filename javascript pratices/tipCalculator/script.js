var john = {
  bills: [124, 48, 268],
  calTips: function () {
    this.tips = [];
    this.finallValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percent;
      bill = this.bills[i];
      if (bill < 50) {
        percent = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percent = 0.15;
      } else {
        percent = 0.1;
      }
      this.tips[i] = bill * percent;
      this.finallValues[i] = bill + bill * percent;
    }
  },
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.calTips();
john.average = calcAverage(john.tips);
console.log(john);
