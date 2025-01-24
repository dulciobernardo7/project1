let num = 6;

if(num < 2){
  console.log(`O numero ${num} nao e primo`);
}
else{
    for(let counter = 2;counter * counter <= num;counter++){
        if(num % counter === 0){
          console.log(`O numero ${num} nao e primo`);
          return;
        }
    }
    console.log(`O numero ${num} e primo`);
}