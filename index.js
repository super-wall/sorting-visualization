const WIDTH = 800;
const HEIGHT = 320;
const MAX_LENGTH = Math.floor(WIDTH / 22);

class RectPaint {
  constructor() {
    this.ctx = document.querySelector('canvas').getContext('2d');
    this.sortArr = [];
    this.renderQueue = [];
  }

  draw(array, colors = {}) {
    this.ctx.clearRect(0, 0, WIDTH, HEIGHT);  
    array = array.slice(0, MAX_LENGTH);
    const offset = Math.floor((WIDTH - array.length * 22) / 2);
    for (let i = 0; i < array.length; i++) {
      this.ctx.fillStyle = '#888';
      this.ctx.fillText(array[i], i * 22 + offset + 2, HEIGHT - array[i] - 5)
      this.ctx.fillStyle = colors[i] || '#48908f';
      this.ctx.fillRect(i * 22 + offset, HEIGHT - array[i], 20, array[i]);
    }
  }

  geratorRandomArr() {
    const arr = this._geratorRandomArr(Math.floor(800 / 22));
    this.sortArr = arr;
    this.stopAnimate();
    this.draw(arr);  
  }

  sort(sortFn, speed) {
    if (this.timer) return;
    sortFn(this.sortArr, this);
    this.beginAnimate(speed)
  }

  beginAnimate(speed) {
    this.timer = setInterval(() => {
      if (!this.renderQueue.length) {
        this.stopAnimate();
        return;
      }
      const { data, colors } = this.renderQueue.shift();
      this.draw(data, colors);
    }, speed)
  }

  stopAnimate() {
    clearInterval(this.timer);
    this.renderQueue = [];
    this.timer = null;
    this.draw(this.sortArr);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, WIDTH, HEIGHT);  
  }

  addAnimateData(data) {
    this.renderQueue.push(data)
  }

  // 生成随机高度的柱形数组
  _geratorRandomArr(len) {
    let arr = [];
    for (let i = 0; i < len; i++) {
      const height = Math.floor(Math.random() * 29 + 1) * 10;
      arr.push(height)
    }
    return arr;
  }
}