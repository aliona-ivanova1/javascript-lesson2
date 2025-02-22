
// 1 davaleba
let array = [1,2,3,4,5]; 

const aray = array.reverse()
console.log(aray);


// 2 davaleba
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let a = 0; a < array2.length; a++){

    if(a === 5){
        console.log("aris");
        break
    }
}

// 3 davaleba

let array5 = [1, 2, 3, 7, 6, 9];



for(let item3 of array5){
    if(item3 === 7)
        continue
    console.log(item3);
    
}

// 4 davaleba

// რას დააბრუნებს 8 == "8" ? true an false? - ახსენით რატომ? // ერგავიგე

// 5 davaleba

let array7= [1, 2, 4,8, 7, 15, 25, 3, 18, 12];

for(let g of array7){
    if(g > 5){
        console.log(g);
        
    }
}


// 6 davaleba 

let connteiner = [1,"otari",5,7,8,2,"sandro"]

if(connteiner === 5 && connteiner === "otari"){
    console.log("5 და მეორე ელემენტია ოთარი");
    
}else if(connteiner === 7 && connteiner === "levani"){
    console.log("7 და ბოლო ელემენტია სანდრო");
    
}else{
    ("error")
}

 //vergavige






// 7 davaleba




let users = [
    {username: 'giorgi',age: 30},
    {username: 'levani', age: 25},
    {username: 'anna', age: 28}
]

for(sum of users){
    if(sum.age > 25){
      console.log(sum.username);

    }

}
