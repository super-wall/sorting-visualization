function insertionSort(arr, ctx) {

  // 动画标记
  function mark(arr, orderIdx, currentIdx) {
    let colors = {};
    for (let i = 0; i < arr.length; i++) {
      if (i < orderIdx) {
        colors[i] = 'red'
      }
    }
    colors[currentIdx] = '#f7cf5e';
    
    ctx.addAnimateData({
      data: [...arr],
      colors,
    })
  }
  
  // 循环n-1轮
  for (let i = 1; i < arr.length; i++) {
    mark(arr, i, -1);
    // 插入的位置
    let j = i, current = arr[i];
    for (;j > 0 && arr[j - 1] > current; j--) {
      mark(arr, i, j);
      // 元素后移
      arr[j] = arr[j - 1];
    }
    arr[j] = current;
  }
}