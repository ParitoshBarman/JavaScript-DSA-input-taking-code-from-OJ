function runProgram(input){
    // console.log(input)
    let size = input.split("\n")[0];
    let arr = input.split("\n")[1].split(" ").map(Number);
    // console.log(size);
    // console.log(arr);
    
    arr = arr.map((itm)=>itm+1);
    console.log(arr.join(" "))
    
}

if(process.env.USER===""){
    runProgram("");
}
else{


process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function(input){
    read+=input;
});

process.stdin.on("end", function(){
    read=read.replace(/\n$/,"");
    read=read.replace(/\n$/,"");
    runProgram(read);
});

process.stdin.on("SIGINT", function(){
    read=read.replace(/\n$/,"");
    
    runProgram(read);
    process.et(0);
});
}
