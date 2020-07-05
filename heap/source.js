class Heap {
  constructor(arr = []) {
    this.data = [,...arr];
    this.size = arr.length;
    this.heapify()
  }
  parent(i) {
    return Math.floor(i / 2);
  }

  left(i) {
    return 2 * i;
  }

  right(i) {
    return 2 * i + 1;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  heapify() {
    for (let i = Math.floor(this.size / 2); i >= 1; i--) {
      this.shiftDown(i);
    }
  }

  insert(item) {
    this.data[this.size + 1] = item;
    this.size++;
    this.shiftUp(this.size)
  }

  extractMax() {
    if (this.isEmpty()) {
      throw new Error('空了')
    }
    const ret = this.data[1];
    this.data[1] = this.data[this.size];
    this.data.pop();
    this.size--;
    this.shiftDown(1)
    return ret
  }

  shiftDown(k) {
    while(this.left(k) <= this.size) {
      let j = this.left(k);
      if (j + 1 <= this.size && this.data[j + 1] > this.data[j]) {
        j += 1;
      }
      if (this.data[k] > this.data[j]) break;
      const temp = this.data[k];
      this.data[k] = this.data[j];
      this.data[j] = temp;
      k = j;
    }
  }

  shiftUp(k) {
    while(k > 1 && this.data[this.parent(k)] < this.data[k]) {
      const temp = this.data[k];
      this.data[k] = this.data[this.parent(k)];
      this.data[this.parent(k)] = temp;
      k = this.parent(k);
    }
  }
}

const maxHeap = new Heap([5, 1, 14, 2, 24])

while (!maxHeap.isEmpty()) {
  console.log(maxHeap.extractMax())
}
