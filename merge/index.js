

function mergeSort(arr, ctx) {

  // 动画标记
  function mark(l, r, mergeIdx) {
    let colors = {};
    for (let i = 0; i < arr.length; i++) {
      if (i >= l && i <= r) {
        colors[i] = 'green'
      }
      if (i >= l && i <= mergeIdx) {
        colors[i] = 'red'
      }
    }
    ctx.addAnimateData({
      data: [...arr],
      colors,
    })
  }


  mark(0, -1, -1)
  _mergeSort(0, arr.length - 1);
  mark(0, -1, arr.length - 1)

  // 对数组[l, r]区间进行归并排序
  function _mergeSort(l, r) {
    if (l >= r) return;

    const mid = (l + r) >> 1;
    _mergeSort(l, mid);
    _mergeSort(mid + 1, r);

    // 左半部分最后一个元素小于右侧第一个元素，不用进行合并
    if (arr[mid] > arr[mid + 1]) {
      _merge(l, r, mid);
    }

  }

  // 将[l, mid]和[mid + 1, r]俩个有序数组进行合并
  function _merge(l, r, mid) { 
    let k = l, i = l, j = mid + 1;
    const copyArr = arr.slice(l, r + 1);
    while (k <= r) {
      if (i > mid) {  // 左半部分遍历完成，直接取j
        arr[k] = copyArr[j - l];
        j++;
      } else if (j > r) { // 右半部分遍历完成，直接取i
        arr[k] = copyArr[i - l];
        i++
      } else if (copyArr[i - l] < copyArr[j - l]) {
        arr[k] = copyArr[i - l];
        i++;
      } else {
        arr[k] = copyArr[j - l];
        j++;
      }

      mark(l, r, k);
      k++;
      
    }
  }
}