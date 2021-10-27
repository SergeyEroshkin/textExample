"use strict";

let calculator = {
    read () {
        this.first = +prompt('first', "");
        this.second = +prompt('second', "");
    },
    sum () {
        return this.first + this.second;
    },
    mul () {
        return this.first * this.second;
    }
  };

  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );