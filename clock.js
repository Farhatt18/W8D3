class Clock {
  constructor(hour, minute,second){
    const current_time = new Date(); 

    this.hour = current_time.getHours();
    this.minute = current_time.getMinutes();
    this.second = current_time.getSeconds();
    setInterval(this._tick.bind(this), 0.5);
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
        (this.hour ++) % 24;
    }
  return this.printTime();
  }

};

const clock = new Clock();
