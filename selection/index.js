function selectionSort(arr, ctx) {

  // 动画标记
  function mark(arr, orderIdx, currentIdx, minIdx) {
    let colors = {};
    for (let i = 0; i < arr.length; i++) {
      if (i < orderIdx) {
        colors[i] = 'red'
      }
    }
    colors[currentIdx] = '#f7cf5e';
    colors[minIdx] = '#3e44ad';
    
    ctx.addAnimateData({
      data: [...arr],
      colors,
    })
  }

  // 循环n-1轮
  for (let i = 0; i < arr.length - 1; i++) {
    // 每轮找到最小的元素
    let minIdx = i;
    mark(arr, i, -1, minIdx);

    for (let j = i + 1; j < arr.length; j++) {
      mark(arr, i, j, minIdx);
      arr[minIdx] > arr[j] && (minIdx = j);
      mark(arr, i, j, minIdx)
    }
    // 与当前i位置进行交换
    [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
    mark(arr, i + 1, -1, -1)
  }
}