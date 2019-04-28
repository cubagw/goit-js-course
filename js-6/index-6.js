'use strict';
class Hero {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  changename(name) {
    this.name = name;
  }
}

const mango = new Hero('joke', 200);

console.log(mango);
