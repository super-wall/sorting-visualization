class RectPaint {
  constructor(target, rectList) {
    const { width, height } = target.getBoundingClientRect();
    this.width = width;
    this.height = height;
    this.rectList = rectList;
    this.ctx = target.getContext('2d');
  }

  draw(colors = {}) {
    this.ctx.clearRect(0,0,this.width,this.height);  
    const offset = Math.floor(this.width % 22 / 2);
    for (let i = 0; i < this.rectList.length; i++) {
      this.ctx.fillStyle = colors[i] || '#48908f';
      this.ctx.fillRect(i * 22 + offset, this.height - arr[i], 20, arr[i]);
    }
  }
}