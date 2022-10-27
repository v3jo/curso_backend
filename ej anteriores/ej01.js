const obj = {
    
};



for (let i = 0; i<10000; i++){
    let number = parseInt(Math.random() * 20) + 1

    if (obj[number] == undefined){
        obj[number] = 0;
    }

    obj[number]++;
}

console.log(obj);