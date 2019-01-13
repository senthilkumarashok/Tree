class Node {
	            
	            constructor(value) {
	                this.val = value;
	                this.child = [];
	            }
	            
	            addChild(value) {
	                this.child.push(new Node(value));
	            }
	            
	            print() {
	                if(this.val) {
	                    console.log(this.value);
	                }
	                var x;
	                for( x in this.child) {
	                    console.log(x.val);
	                }
	            }
	        }
	        
	        class Tree {
	            constructor(value) {
	                this.root = new Node(value);
	            }
	                
	            addRoot(value) {
	                this.root = new Node(value);
	            }
	            
	            print() {
	                if(this.root) {
	                    this.root.print();
	                }
	            }
	        }
	        
	       
	        var tree = new Tree(5);
	        tree.root.addChild(6);
	        tree.root.addChild(7);
	        tree.print();
