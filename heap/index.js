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



function heapSort(arr, ctx) {

   // 动画标记
  function mark(orderIdx) {
    let colors = {};
    for (let i = 0; i < arr.length; i++) {
      if (i >= orderIdx) {
        colors[i] = 'red'
      }
    }
    ctx.addAnimateData({
      data: [...arr],
      colors,
    })
  }

  const maxHeap = new Heap(arr);
  let i = arr.length - 1;
  while (!maxHeap.isEmpty()) {
    arr[i--] = maxHeap.extractMax();
    mark(i)
  }
}


