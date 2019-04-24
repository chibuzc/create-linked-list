module.exports = () =>  {
    class Node {
        constructor(data, next=null){
            this.data = data;
            this.next = next
        } 
    }

    class LinkedList{
        constructor(){
            this.head = null
        }

        insertFirst(data){
            this.head = new Node(data, this.head)
        }

        size(){
            let counter = 0
            let node = this.head
            while(node){
                counter++
               node = node.next
            }
            return counter
        }

        getFirst(){
            return this.head
        }

        getLast(){
            if(!this.head){
                return null
            }
            let node = this.head
            while(node){
                if(!node.next){
                    return node
                }
                node = node.next
            }
        }

        clear(){
            this.head = null
        }

        removeFirst(){
            if(!this.head){
                return
            }
            let node = this.head
            node = node.next
            return node
        }
    }

    return new LinkedList
}