import LinkedList from './linked-list.js';
class Hashmap {
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
  set(key, value) {
    if (this.length() >= this.capacity * this.loadFactor) this.grow();
    let index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error('Trying to access index out of bound');
    }
    if (this.buckets[index]) {
      this.buckets[index].append({ [key]: value });
    } else {
      this.buckets[index] = new LinkedList();
      this.buckets[index].append({ [key]: value });
    }
  }
  grow() {
    const tempEntries = this.entries();
    let tempMap = new Hashmap((this.capacity *= 2));
    tempEntries.forEach((el) => {
      let key, value;
      [key, value] = el[0].split(',');
      tempMap.set(key, value);
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
  values() {
    let list = [];
    this.buckets.forEach((el) => {
      if (el !== undefined) {
        list = list.concat(el.getValues());
      }
    });
    return list;
  }
  entries() {
    let list = [];
    this.buckets.forEach((el) => {
      if (el !== undefined) {
        list = list.concat(el.getEntries());
      }
    });
    return list;
  }
}

let map = new Hashmap();
map.set('Carlos', 'blue eyes');
map.set('Diana', 'blonde hair');
map.set('Sara', 'math teacher');
map.set('Daniel', '44yo');
map.set('Carla', 'black belt');
map.set('Diana', 'red hair');
map.set('Daniel', '34yo');
console.dir(map.buckets, { depth: null });
console.log(map.get('Daniel'));
console.log(map.has('Carla'));
console.log(map.remove('Diana'));
console.log(map.remove('Sara'));
console.log(map.remove('Daniel'));
console.dir(map.buckets, { depth: null });
map.set('Diana', 'blonde hair');
map.set('Sara', 'math teacher');
map.set('Daniel', '44yo');
console.dir(map.buckets, { depth: null });
console.log(map.length());
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
// map.clear();
map.set('Gherman', 'hunter');
map.set('Lauren', 'bookworm');
map.set('Marcus', 'bodybuilder');
map.set('Jane', 'kind friend');
map.set('Alfred', 'town priest');
map.set('Maria', 'sword master');
map.set('Laurence', 'scholar');
map.set('Maya', 'fortune teller');
map.set('Jordan', 'team player');
console.dir(map, { depth: null });
