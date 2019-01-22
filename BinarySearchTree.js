var input = [4,5,6,7,8];
  //console.log(input);
  
  var Node = function(val) {
    this.val = val;
    this.LC = null;
    this.RC = null;
    
    this.addNode = function(node) {
      if(node.val < this.val) {
       //console.log('inserting LC' + node.val);
        if(this.LC == null) {
          this.LC = node;
        } else {
          this.LC.addNode(node);
        }
      } else if(node.val > this.val) {
        //console.log('inserting RC ' + node.val);
        if(this.RC == null) {
          this.RC = node;
        } else {
          this.RC.addNode(node);
        }
      }
    }

    this.toString = function() {
       console.log(this.val);
    }
  };
    
   
  var BinaryTree = function() {
    this.root = null;
    
    //insert a node at the root
    this.insert = function(value) {
        var node = this.newNode(value);
        if(this.root == null) {
            //console.log('inserting root ' + value);
            this.root = node;
        } else {
            //console.log('inserting node ' + value);
            this.root.addNode(node);
        }
    };
    
    this.newNode = function(val) {
      return new Node(val);
    };

    // print tree from the specific node
    this.printC = function(node){
      if(node != null) {
        node.toString();
        if(node.LC != null) {
          this.printC(node.LC);
        }  
        if(node.RC != null) {
          this.printC(node.RC);
        }  
      } else {
          console.log("null");
      } 
    };
    
    this.show = function() {
      //console.log(this.root.val);
      this.printC(this.root);
    };
    
  };
  
  var tree = new BinaryTree();
  tree.insert(4);
  tree.insert(7); 
  tree.insert(3);  
  tree.insert(2);
  //tree.insert(1);
  //tree.insert(7);
  tree.show();
  //console.log(tree);
