class Clock {
  constructor(hour, minute,second){
    // create a date obj
    const current_time = new Date(); 
    // store the hour, min, sec
    this.hour = current_time.getHours(); // very similar to @hour in ruby
    this.minute = current_time.getMinutes();
    this.second = current_time.getSeconds();
    //callbacks are always invoked under the hood and Function Style
    setInterval(this._tick.bind(this), 0.5); // refer to this line for myBind
    // binding 'this' on _tick makes all 'this' calls under _tick to have the direct context that 'this' is bound to here 
  }

  printTime(){
    console.log(`${this.hour}:${this.minute}:${this.second}`);
  }

  _tick(){
    if (this.second < 60){
      this.second++
    } if (this.second === 60){
        this.second = 0;
        this.minute++;
    } if (this.minute === 60){
        this.minute = 0;
        (this.hour++) % 24;
    }
  //call printTime
  return this.printTime();
  }

};

const clock = new Clock();
