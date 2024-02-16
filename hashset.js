import LinkedList from './linked-list.js';
class Hashset {
  constructor(capacity = 16) {
    this.capacity = capacity;
    this.loadFactor = 0.75;
    this.buckets = new Array(this.capacity);
  }
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }
  set(key) {
    if (this.length() >= this.capacity * this.loadFactor) this.grow();
    let index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error('Trying to access index out of bound');
    }
    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
      this.buckets[index].append({ [key]: false });
    } else {
      this.buckets[index].append({ [key]: false });
    }
  }
  grow() {
    const tempKeys = this.keys();
    let tempMap = new Hashset((this.capacity *= 2));
    tempKeys.forEach((el) => {
      let key;
      key = el;
      tempMap.set(key);
    });
    this.capacity = tempMap.capacity;
    this.buckets = tempMap.buckets;
  }
  get(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error('Trying to access index out of bound');
    }
    if (!this.buckets[index]) {
      return null;
    } else {
      return this.buckets[index].find(key);
    }
  }
  has(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error('Trying to access index out of bound');
    }
    if (!this.buckets[index]) {
      return false;
    } else {
      return this.buckets[index].contains(key);
    }
  }
  remove(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error('Trying to access index out of bound');
    }
    if (!this.buckets[index]) {
      return false;
    } else {
      if (this.buckets[index].delete(key)) {
        if (this.buckets[index].headNode === null) {
          delete this.buckets[index];
        }
        return true;
      }
    }
  }
  length() {
    let total = 0;
    this.buckets.forEach((el) => {
      total += el.size();
    });
    return total;
  }
  clear() {
    this.buckets = new Array(this.capacity);
  }
  keys() {
    let list = [];
    this.buckets.forEach((el) => {
      if (el !== undefined) {
        list = list.concat(el.getKeys());
      }
    });
    return list;
  }
}

let map = new Hashset();
map.set('Carlos');
map.set('Diana');
map.set('Sara');
map.set('Daniel');
map.set('Carla');
console.dir(map.buckets, { depth: null });
console.log(map.get('Daniel'));
console.log(map.has('Carla'));
console.log(map.remove('Diana'));
console.log(map.remove('Sara'));
console.log(map.remove('Daniel'));
console.dir(map.buckets, { depth: null });
map.set('Diana');
map.set('Sara');
map.set('Daniel');
console.dir(map.buckets, { depth: null });
console.log(map.length());
console.log(map.keys());
// map.clear();
map.set('Gherman');
map.set('Lauren');
map.set('Marcus');
map.set('Jane');
map.set('Alfred');
map.set('Maria');
map.set('Laurence');
map.set('Maya');
map.set('Jordan');
console.dir(map, { depth: null });
