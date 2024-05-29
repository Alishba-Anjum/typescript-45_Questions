let guests:string[] = ["Muniba", "Hoor", "Riya"];
guests[1] = 'Rafiya';
console.log(guests);
for (let guest of guests){
    console.log(`Hey ${guest}, join me for dinner and let's have a delicious feast together!`);
}

