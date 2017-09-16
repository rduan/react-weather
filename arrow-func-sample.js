
var names=['joe','jose','jean'];

//var name = 'tim'  // using var make scope as module
name = 'tim';

var person = {
    name: 'andy',
    greet: function() {
        var name = 'bike';
        names.forEach(function(name) {
            //anonymous function 'this' is global 
            //console.log(this);
            //console.log(this.name);
            //console.log(this.names);
            console.log(this.name + 'say hello to : '+ name);
            
        });
    }
}

//arrow function will not change 'this', will automatically bind this
var person2 = {
    name: 'andy',
    greet: function() {
        var name = 'bike';
        console.log(this);
        names.forEach((name)=> {
            console.log(this);
            console.log(this.name + 'say hello to : '+ name);
            
        });
    }
}

person.greet();
person2.greet();