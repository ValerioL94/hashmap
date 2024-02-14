import LinkedList from './linked-list.js';
class Hashmap {
  constructor() {
    this.capacity = 16;
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
    let index = this.hash(key);
    if (this.buckets[index]) {
      this.buckets[index].append({ [key]: value });
    } else {
      this.buckets[index] = new LinkedList();
      this.buckets[index].append({ [key]: value });
    }
  }
  get(key) {
    let index = this.hash(key);
    if (!this.buckets[index]) {
      return null;
    } else {
      return this.buckets[index].find(key);
    }
  }
  has(key) {
    let index = this.hash(key);
    if (!this.buckets[index]) {
      return false;
    } else {
      return this.buckets[index].contains(key);
    }
  }
  remove(key) {}
  length() {}
  clear() {}
  values() {}
  entries() {}
}

let map = new Hashmap();
map.set('Carlos', 'blue eyes');
map.set('Diana', 'blonde hair');
map.set('Sara', 'math teacher');
map.set('Daniel', '44yo');
map.set('Carla', 'black belt');
// console.dir(map.buckets, { depth: null });
console.log(map.get('Daniel'));

// if (index < 0 || index >= buckets.length) {
//   throw new Error('Trying to access index out of bound');
// }
