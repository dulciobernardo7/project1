let num = 1;

if(num < 2){
  console.log(`O numero ${num} nao e primo`);
}
for(let counter = 2;counter * counter <= num;counter++){
    if(num % counter === 0){
      console.log(`O numero ${num} nao e primo`);
    }
}