const sports = ['football','tennis','rugby'];
// console.log(sports[sports.length-1])

sports.push('curling');
sports.push('snooker');
sports.push('darts');
// console.log(sports);

// const removedSport = sports.pop();
// console.log(sports);
// console.log(removedSport);

// sports.unshift('swimming')
// console.log(sports);
// sports.shift()
// console.log(sports);


const splicedSport = sports.splice(3,0,'badminton');
// console.log(sports);

for (const sport of sports){
    console.log(sport);
}

for (let index = 0; index < sports.length; index ++){
    sports[index] = sports[index].toUpperCase();
}

console.log(sports)