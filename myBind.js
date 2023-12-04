Function.prototype.myBindES6 = function(context){ 
    return () => this.apply(context)
    // return () => {
    //     return that.call(context)
    // }
}

Function.prototype.myBindES5 = function(context){ // myBind on the assessment MUST BE IN ES5 ==> shows you understand closures and invocation styles
    let that = this // 'that' can be names anything

    return function(){
        return that.call(context);
    }
}

// test



class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
  turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);
  
  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"