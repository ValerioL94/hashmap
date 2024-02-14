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
  prepend(value) {
    let node = new Node(value);
    node.nextNode = null;
    this.headNode = node;
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
  head() {
    if (!this.headNode) return null;
    return this.headNode;
  }
  tail() {
    if (!this.headNode) return null;
    let current = this.headNode;
    let n = 1;
    while (current.nextNode) {
      current = current.nextNode;
      n++;
    }
    return current;
  }
  at(index) {
    if (index < 0 || index > this.size()) return null;
    if (index === 0) return this.headNode;
    else {
      let current = this.headNode;
      let n = 0;
      while (n < index) {
        n++;
        current = current.nextNode;
      }
      return current;
    }
  }
  pop() {
    if (!this.headNode) return null;
    let previous;
    let current = this.headNode;
    while (current.nextNode) {
      previous = current;
      current = current.nextNode;
    }
    if (current === this.headNode) this.headNode = null;
    else previous.nextNode = null;
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
  insertAt(value, index) {
    if (index < 0 || index > this.size()) return null;
    else {
      let node = new Node(value);
      if (index === 0) {
        node.nextNode = this.headNode;
        this.headNode = node;
      } else {
        let previous;
        let current = this.headNode;
        let n = 0;
        while (n < index) {
          previous = current;
          current = current.nextNode;
          n++;
        }
        node.nextNode = current;
        previous.nextNode = node;
      }
    }
  }
  removeAt(index) {
    if (index < 0 || index >= this.size()) return null;
    else {
      if (index === 0) {
        this.headNode = this.headNode.nextNode;
      } else {
        let previous;
        let current = this.headNode;
        let n = 0;
        while (n < index) {
          previous = current;
          current = current.nextNode;
          n++;
        }
        previous.nextNode = current.nextNode;
      }
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
