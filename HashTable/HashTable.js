class HashTable {
  constructor(size) {
    this.hashTable = [];
    this.size = size;
  }

  set(key, value) {
    const hashIndex = this._hashFunction(key);

    console.log(hashIndex);

    if (!this.hashTable[hashIndex]) {
      this.hashTable[hashIndex] = [];
    }

    for (const obj of this.hashTable[hashIndex]) {
      if (obj.key === key) {
        obj.value = value;
        return;
      }
    }

    this.hashTable[hashIndex].push({ key, value });
  }

  _hashFunction(key) {
    let hashCode = 0;

    for (const char of key) {
      hashCode += char.charCodeAt(0);
    }

    return hashCode % this.size;
  }

  get(key) {
    const hashIndex = this._hashFunction(key);

    if (!this.hashTable[hashIndex]) {
      return 'Value not found in hash table';
    }

    for (let obj of this.hashTable[hashIndex]) {
      if (obj.key === key) {
        return obj.value;
      }
    }

    return console.log('value not found');
  }

  delete(key) {
    const hashIndex = this._hashFunction(key);

    if (!this.hashTable[hashIndex]) {
      return 'Value not found in hash table';
    }

    let bucket = this.hashTable[hashIndex];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        return;
      }
    }

    return null;
  }
}

const hash = new HashTable(10);

hash.set('key1', 'value1');
hash.set('key2', 'value2');

hash.delete('key2');

console.log(hash.get('key2'));
