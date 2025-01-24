let num = 6;

if(num < 2){
  console.log(`O numero ${num} nao e primo`);
}
for(let counter = 2;counter * counter == num;counter++){
    if(counter % num == 2){
      console.log(`O numero ${num} nao e primo`);
    }
}