// if (index < 0 || index >= buckets.length) {
//     throw new Error("Trying to access index out of bound");
//   }

class Hashmap {
  constructor() {}
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
    }
    return hashCode;
  }
  set(key, value) {}
  get(key) {}
  has(key) {}
  remove(key) {}
  length() {}
  clear() {}
  values() {}
  entries() {}
}

let test = new Hashmap();
console.log(test.hash('Daniel'));
console.log(test.hash('Lauren'));
console.log(test.hash('Earnest'));
