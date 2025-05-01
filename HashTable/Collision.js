class HashTable {
  constructor(size) {
    this.array = new Array(size).fill(null);
    this.size = size;
  }

  set(key, value) {
    let hashIdx = this._hash(key);
    let hashIdx2 = this._hash2(key);

    let originalHashIdx = hashIdx;

    let i = 1;
    while (this.array[hashIdx] && this.array[hashIdx].key !== key) {
      hashIdx = (hashIdx + i * hashIdx2) % this.size;
      if (originalHashIdx === hashIdx) {
        return console.log('HashTable is full');
      }
      i++;
    }

    this.array[hashIdx] = { key, value };
  }

  _hash(key) {
    let hashCode = 0;
    for (let char of key.toString()) {
      hashCode += char.charCodeAt(0);
    }

    return hashCode % this.size;
  }

  _hash2(key) {
    let hashCode = 0;
    for (let char of key.toString()) {
      hashCode += char.charCodeAt(0);
    }

    return 1 + (hashCode % (this.size - 2));
  }

  get(key) {
    let hashIdx = this._hash(key);
    let hashIdx2 = this._hash2(key);

    let originalIdx = hashIdx;

    let i = 1;
    while (this.array[hashIdx]) {
      if (this.array[hashIdx].key === key) return this.array[hashIdx].value;
      hashIdx = (hashIdx + i * hashIdx2) % this.size;
      if (hashIdx === originalIdx) break;
      i++;
    }

    return null;
  }

  display() {
    console.log(this.array);
  }
}

const map = new HashTable(7);

map.set('name', 'Pranav');
map.set('age', '22');
map.set('age2', '12');
map.set('skills', 'MERN');
map.set('place', 'MERN');
map.set('kochi', 'MERN');
map.set('eduction', 'MERN');

console.log(map.get('age'));

map.display();
