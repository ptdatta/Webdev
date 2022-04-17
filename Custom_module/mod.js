console.log("this is module")
function average(arr){
    let sum=0;
    // arr.forEach(element => {
    //     sum+=element;
    // });
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

// module.exports={
//     avg:average,
//     name: "parthib",
//     repo:"github"
// }

module.exports.name="parthib"