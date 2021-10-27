"use strict";
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value = this.value + +prompt('','');
    }
}
let accumulator = new Accumulator(5);
accumulator.read();
accumulator.read();

alert(accumulator.value);



