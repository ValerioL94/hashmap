export default class LinkedList {
  constructor() {}
  append(value) {
    if (!this.headNode) this.headNode = new Node(value);
    else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = new Node(value);
    }
  }
  size() {
    if (!this.headNode) return 0;
    let current = this.headNode;
    let n = 1;
    while (current.nextNode) {
      current = current.nextNode;
      n++;
    }
    return n;
  }
  contains(key) {
    if (!this.headNode) return null;
    else if (Object.keys(this.headNode.value) == key) {
      return true;
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
        if (Object.keys(current.value) == key) {
          return true;
        }
        return false;
      }
    }
  }
  find(key) {
    if (!this.headNode) return null;
    else if (Object.keys(this.headNode.value) == key) {
      return this.headNode.value[key];
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
        if (Object.keys(current.value) == key) {
          return current.value[key];
        }
      }
    }
  }
  getKeys() {
    if (!this.headNode) return null;
    let keys = Object.keys(this.headNode.value);
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
      keys = keys.concat(Object.keys(current.value));
    }
    return keys;
  }
  getValues() {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
      if (Object.keys(current.value) == key) {
        return current.value[key];
      }
    }
  }
  getEntries() {
    if (!this.headNode) return null;
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
      if (Object.keys(current.value) == key) {
        return current.value[key];
      }
    }
  }
  toString() {
    if (!this.headNode) return null;
    else {
      let current = this.headNode;
      let print = `(${current.value}) -> `;
      while (current.nextNode) {
        current = current.nextNode;
        print += `(${current.value}) -> `;
      }
      return (print += 'null');
    }
  }
  delete(key) {
    if (Object.keys(this.headNode.value) == key) {
      this.headNode = this.headNode.nextNode;
      return true;
    } else {
      let previous;
      let current = this.headNode;
      while (current.nextNode) {
        previous = current;
        current = current.nextNode;
        if (Object.keys(current.value) == key) {
          previous.nextNode = current.nextNode;
          return true;
        }
      }
      return false;
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
