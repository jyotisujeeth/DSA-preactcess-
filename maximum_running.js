/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
const maxRunTime = (n, batteries) => {
  let totalBatteries = batteries.reduce((a,c) => a+c, 0)
  batteries.sort((a,b) => b-a)
  let i = 0
  while (true) {
    let average = parseInt(totalBatteries/n)
    let currentBattery = batteries[i]
    if (currentBattery > average) {
      totalBatteries -= currentBattery
      n--
      i++
    }
    else return average
  }
};
