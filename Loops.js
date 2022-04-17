for(var i=0; i<=10;i++){
     console.log(i);
}

let friends = ["Rohan", "Sanjeev", "Deepti", "Pooja", "SkillF"];
     for (let index = 0; index < friends.length; index++) {
         console.log("Hello friend, " + friends[index]);
     }

     friends.forEach(function f(element){       //modern
        console.log("Hello Friend, " + element + " to modern JavaScript");
    });

    for (element of friends){            //more modern
        console.log("Hello Friend, " + element + " to modern JavaScript again");
    }

    let employee = {
        name: "Harry",
        salary: 2,
        channel: "CWH"
    }

    // Use this loop to iterate over objects in JavaScript
    for(key in employee){
        console.log(`The ${key} of employee is ${employee[key]}`);
    }

// while loop
    var i =0;
    while(i<4){
        console.log(`${i} is less than 4`);
        i++;
    }


// Do while loop
    let j =0;
    do{
        console.log(`${j} is less than 4 and we are inside do while loop`);
        j++;
    }while(j<4);