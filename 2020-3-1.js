var pos = 0;
var treeCount = 0;
var slope = [1,3];

for(i = slope[0]; i < input.length; i += slope[0]){
    pos += slope[1];
    var chars = input[i].split("");

    if(pos >= input[i].length){
        pos = pos - input[i].length;
    }

    if(chars[pos] == "#"){
        treeCount++;
    }
}

console.log(treeCount);