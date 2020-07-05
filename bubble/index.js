function bubbleSort(arr, ctx) {

  // 动画标记
  function mark(arr, end, i, j) {
    let colors = {};
    for (let i = 0; i < arr.length; i++) {
      if (i >= end) {
        colors[i] = 'red'
      }
    }
    colors[i] = '#f7cf5e';
    colors[j] = '#f7cf5e';
    
    ctx.addAnimateData({
      data: [...arr],
      colors,
    })
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      mark(arr, arr.length - i, j, j + 1)
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
}

