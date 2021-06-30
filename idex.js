class Stack {
    constructor(){
        this.data = [];
        this.size = 0;
    }
  push(node) {
    this.data[this.size] = node;
    this.size = this.size + 1;
  }
  peek() {
    return this.data[this.size -1 ];
  }
  isEmpty() {
    return this.size === 0;
  }
  pop() {
      if( this.isEmpty() === false ) {
        this.size = this.size -1;
        return this.data.pop(); // removes the last element
      }
  }   
}
var stack = new Stack();
stack.push({origin:'d', dest:'e'})
stack.push({origin:'c', dest:'d'})
stack.push({origin:'b', dest:'c'})
stack.push({origin:'g', dest:'h'})
stack.push({origin:'j', dest:'x'})
stack.push({origin:'a', dest:'b'})
stack.push({origin:'h', dest:'j'})
stack.push({origin:'e', dest:'f'})
stack.push({origin:'f', dest:'g'})
console.log('input stack: ',stack);

const ticketSort = (stack)=>{
  let temp = []
  while(!stack.isEmpty()){
    temp.push(stack.pop())
  }

  for( let i=0; i < temp.length; i ++ ){
    let setFound = true;
    for( let j=0; j < temp.length; j ++ ){
      if(temp[i].dest == temp[j].origin){
        setFound = false;
      }
    }
    if(setFound == true){
      stack.push(temp[i])
      temp.splice(i,1)
      for( let k=0; k < temp.length; k ++ ){
        if(stack.peek().origin == temp[k].dest){
          stack.push(temp[k]);
          temp.splice(k,1)
          k=-1;
        }
      }
    }
  }
  return stack
}

console.log('Sorted Tickets:', ticketSort(stack));

console.log('Did a pop to confirm the right one is on top ',stack.pop())
