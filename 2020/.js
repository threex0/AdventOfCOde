console.log('10');

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

var conversionPaths = [];
var idx = 0;
function convert(converters, depth = 1){
    //console.log(converters);
    if(converters.length == 0){
        var joltage = 0;
    } else {
        var joltage = converters[converters.length-1];
    }
    
    if(depth > 100){
        return
    }

    if(highest - joltage <= 3 || converters.length == 100){
        conversionPaths.push(converters)
        return;
    }

    var last = converters[converters.length - 1];
    var idx = sorted.indexOf(last) + 1;
    // console.log(idx);
    // console.log(sorted[idx]);
    // console.log(sorted[idx] - last);

    if(sorted[idx] - last <= 3){
        //console.log('a')
        convert(converters.concat([sorted[idx]]), depth + 1)
    }
    if (sorted[idx + 1] - last <= 3){
        //console.log('b')
        convert(converters.concat([sorted[idx+1]]), depth + 1)
    } 
    if (sorted[idx + 2] - last <= 3){
        //console.log('c')
        convert(converters.concat([sorted[idx+2]]), depth + 1)
    }

    // var idx = Math.max(sorted.indexOf(last), 0);
    // console.log(last);
    // console.log("idx", idx);

    // for(i = idx; i < idx + 3; i++){
    //     console.log(sorted[i]);
    //     if(sorted[i] - sorted[idx] <=3 && !converters.includes(last)){
    //         convert(converters.concat([sorted[i]]) , depth + 1);
    //     }
    // }

    // console.log(converters[converters.length - 1]);
    // console.log(sorted.findIndex(function(val){
    //     return val == converters[converters.length - 1];
    // }))

    // var idx = sorted.findIndex(function(val){
    //     return val == converters[converters.length - 1];
    // })

    // idx = Math.max(idx, 0);

    // console.log("idx", idx);

    // if(sorted[idx+1] - sorted[idx] <= 3){
    //     convert(converters.concat([sorted[idx]]), depth + 1);
    // }
}

convert([0])
console.log(conversionPaths);