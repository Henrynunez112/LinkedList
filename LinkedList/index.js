class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next
    }
}

class LinkedList {
    constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
    } 

    //Insert first Node
    insertFirst(value){
        this.head = new Node(value, this.head);
        this.length++
    }
    //insert Last
    insertLast(value){
        let node = new Node(value);
        let current;
        //if empty make head
        if(!this.head){
            this.head = node 
        }else{
            current = this.head;
            while(current.next){
                current.next
            }
            current.next = node;
        }
        this.length ++
    }
}

const ll = new LinkedList();
ll.insertFirst(1);
ll.insertFirst(2);
ll.insertLast(4)






        // push(value){
        //   const node =  new Node(value);
        //   if(this.head === null){
        //     this.head = node;
        //     this.tail = node;
        //   }else{
        //     node.next = this.head
        //     this.head = node
        //   }
        //   this.length ++
        // }
      
        // append(value){
        //   const newNode = new Node(value);
        //   if(!this.head){
        //     this.head = newNode;
        //     this.tail = newNode;
        //     return
        //   }else{
        //       this.tail.next = newNode;
        //       this.tail = newNode;
        //   }
        //   this.length++
        // }
        // print(){
        //   let display = "-> ";
        //   let pointer = this.head;
        //   while(pointer){
        //     display += pointer.value + "-> ";
        //     pointer += pointer.next;
        //   }
        //   display += 'null'
        //   console.log(display)
        // }
        // nodeAt(index){
        //   if(index >= this.length){
        //     throw Error("Invalid index");
        //   }
        //   let counter = index;
        //   let pointer = this.head;
        //   while(counter > 0){
        //     counter--;
        //     pointer = pointer.next;
        //   }
        //   return pointer.value
        // }
        // pop(){
      
        //   if(this.head === null){
        //     return null
        //   }
        //   const tail = this.tail;
      
        //   if(this.head === this.tail){
        //     this.head = null;
        //     this.tail = null;
        //   }else{
        //     const pointer = this.head;
        //     while(pointer.next !== this.tail){
        //       pointer = pointer.next;
        //     }
        //     this.tail = pointer;
        //     pointer.next = null;
        //   }
        // }