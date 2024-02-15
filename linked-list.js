export default class LinkedList {
  constructor() {}
  append(value) {
    let node = new Node(value);
    if (!this.headNode) this.headNode = node;
    else if (Object.keys(this.headNode.value)[0] === Object.keys(value)[0]) {
      if (!this.headNode.nextNode) {
        this.headNode = node;
      } else {
        node.nextNode = this.headNode.nextNode;
        this.headNode = node;
      }
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        let previous = current;
        current = current.nextNode;
        if (Object.keys(current.value)[0] === Object.keys(value)[0]) {
          previous.nextNode = node;
          node.nextNode = current.nextNode;
          return;
        }
      }
      current.nextNode = node;
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
    else if (Object.keys(this.headNode.value)[0] === key) {
      return true;
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
        if (Object.keys(current.value)[0] === key) {
          return true;
        }
        return false;
      }
    }
  }
  find(key) {
    if (!this.headNode) return null;
    else if (Object.keys(this.headNode.value)[0] === key) {
      return this.headNode.value[key];
    } else {
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
        if (Object.keys(current.value)[0] === key) {
          return current.value[key];
        }
      }
      return null;
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
    let values = Object.values(this.headNode.value);
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
      values = values.concat(Object.values(current.value));
    }
    return values;
  }
  getEntries() {
    if (!this.headNode) return null;
    let entries = [
      [
        `${Object.keys(this.headNode.value)}, ${Object.values(
          this.headNode.value
        )}`,
      ],
    ];
    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
      entries.push([
        `${Object.keys(current.value)}, ${Object.values(current.value)}`,
      ]);
    }
    return entries;
  }
  delete(key) {
    if (Object.keys(this.headNode.value)[0] === key) {
      this.headNode = this.headNode.nextNode;
      return true;
    } else {
      let previous;
      let current = this.headNode;
      while (current.nextNode) {
        previous = current;
        current = current.nextNode;
        if (Object.keys(current.value)[0] === key) {
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
