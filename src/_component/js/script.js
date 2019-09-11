let payment = [
  {
  date: "01-09-2019",
  reason: "rent",
  moneySpent: 300
  },
  {
  date: "02-09-2019",
  reason: "Mc",
  moneySpent: 31
  },
  {
  date: "03-09-2019",
  reason: "rent",
  moneySpent: 31
  },
  {
  date: "04-09-2019",
  reason: "rent",
  moneySpent: 31
  },
];
console.log(payment);

for(x = 0; x < budget.length; x++){
  console.log("In " + budget[x].date + "and I spent £" + budget[x].moneySpent + " and the reason is: " +budget[x].reason + ".")
}
