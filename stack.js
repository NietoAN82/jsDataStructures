var Stack = (() => {


const sKey = {};
const items = new WeakMap();

class Stack {
    constructor(){
        items.set(sKey, [])
    }
    push(element) {
        let stack = items.get(sKey);
        stack.push(element);
    }
    pop(){
        let stack = items.get(sKey);
        return stack.pop();
    }
    peek(){
        let stack = items.get(sKey);
        return stack[stack.length-1];
    }
    clear(){
        items.set(sKey,[]);
    }
    size(){
        return items.get(sKey).length;
    }
}

return Stack;
}) ();

let stack = new Stack();
stack.push(10);
stack.push(20);

console.log(`Stack size is ${stack.size()}`);
console.log(`Bottom of stack is: ${stack.peek()}`);
console.log(`Popping: ${stack.pop()}`);
console.log(`Stack size is ${stack.size()}`);

stack.clear();

console.log(`Stack size is ${stack.size()}`);
