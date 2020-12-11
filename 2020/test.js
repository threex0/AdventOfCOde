// var inputs = [
// 16,
// 10,
// 15,
// 5,
// 1,
// 11,
// 7,
// 19,
// 6,
// 12,
// 4,
// ]

// var inputs = [
//     28,
// 33,
// 18,
// 42,
// 31,
// 14,
// 46,
// 20,
// 48,
// 47,
// 24,
// 23,
// 49,
// 45,
// 19,
// 38,
// 39,
// 11,
// 1,
// 32,
// 25,
// 35,
// 8,
// 17,
// 7,
// 9,
// 4,
// 2,
// 34,
// 10,
// 3
// ]


 var inputs = [
    30,
    73,
    84,
    136,
    132,
    117,
    65,
    161,
    49,
    68,
    139,
    46,
    21,
    127,
    109,
    153,
    163,
    160,
    18,
    22,
    131,
    146,
    62,
    113,
    172,
    150,
    171,
    98,
    93,
    130,
    170,
    59,
    1,
    110,
    2,
    55,
    37,
    44,
    148,
    102,
    40,
    28,
    35,
    43,
    56,
    169,
    33,
    5,
    141,
    83,
    15,
    105,
    142,
    36,
    116,
    11,
    45,
    82,
    10,
    17,
    159,
    140,
    12,
    108,
    29,
    72,
    121,
    52,
    91,
    166,
    88,
    97,
    118,
    99,
    124,
    149,
    16,
    9,
    143,
    104,
    57,
    79,
    123,
    58,
    96,
    24,
    162,
    23,
    92,
    69,
    147,
    156,
    25,
    133,
    34,
    8,
    85,
    76,
    103,
    122
 ];
 
var highest = inputs.sort(function(a, b){return b - a})[0] + 3
console.log(highest);

var sorted = inputs.sort(function(a,b){return a - b;});
console.log(sorted);

sorted.unshift(0);
sorted.push(highest);

console.log(sorted);

var gaps = [];
for(var i = 0; i < sorted.length; i++){
    var current = sorted[i];
    var next = sorted[i+1];
    if(typeof(next) !== 'undefined'){
        var difference = next - current;
        //console.log(difference);
        gaps.push(difference);
    }
}

console.log(gaps);
var run = 0;
var total = 1;
var acc = 1;
for(var i = 0; i < gaps.length; i++){
    if(gaps[i] == 1){
        run++
        console.log('run',run);
        acc+=run - 1;
        console.log('acc',acc);
    } else {
        total *= acc;
        run = 0;
        acc = 1;
    }
}

console.log(total);


// function getRemovable(sorted){
//     var removable = 0;
//     for(var i = 0; i < sorted.length; i++){
//         var current = sorted[i];
//         var next = sorted[i+1];
//         var after = sorted[i+2];
    
//         if(next - current <= 3 && after - current <=3){
//             //console.log(next);
//             removable++;
//         }
//     }
    
//     return removable;
// }

// function countCombos(val = 1) {

// }

// console.log(getRemovable(sorted));