function howManyHundreds(num) {

  let muchSmallerNum = (num / 100);
  let ships = Math.floor(muchSmallerNum);

  return ships;
}

console.log(howManyHundreds(675))