// Given arrival and departure times of all trains that reach a railway station.
//Find the minimum number of platforms required for the railway station so that no train is kept
// waiting.
// Consider that all the trains arrive on the same day and leave on the same
// day.
//Arrival and departure time can never be the same for a train but we can have
// the arrival time of one train equal to the departure time of the other.
// At any given instance of time, the same platform can not be used for both departures of a train
// and the arrival of another train. In such cases, we need different platforms.

let arr = [
  [1, 3],
  [6, 8],
  [5, 7],
  [7, 9],
];

arr.sort((a, b) => a[0] - b[0]);

let arrivalTime = [];

let departureTime = [];

for (let i = 0; i < arr.length; i++) {
  arrivalTime.push(arr[i][0]);
  departureTime.push(arr[i][1]);
}

let newPlatform = 1;

for (let i = 0; i < arrivalTime.length; i++) {
  let platform = 1;

  for (let j = i + 1; j < arrivalTime.length; j++) {
    if (
      (arrivalTime[i] >= arrivalTime[j] &&
        arrivalTime[i] <= departureTime[j]) ||
      (arrivalTime[j] >= arrivalTime[i] && arrivalTime[j] <= departureTime[i])
    )
      platform++;
  }

  newPlatform = Math.max(newPlatform, platform);
}

console.log(newPlatform);
