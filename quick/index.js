function quickSort(arr, ctx) {
  let fixedPivot = new Array(arr.length).fill(false);
  
  // 动画标记
  function mark(l, r, currentPivot, currentElement, fixedIdx) {
    fixedIdx >= 0 && (fixedPivot[fixedIdx] = true) 
    let colors = {};
    for (let i = 0; i < arr.length; i++) {
      if (i >= l && i <= r) {
        colors[i] = 'green'
      }
      colors[currentPivot] = '#3e44ad'
      colors[currentElement] = '#f7cf5e ';

      if (fixedPivot[i]) {
        colors[i] = 'red'
      }
    }
    ctx.addAnimateData({
      data: [...arr],
      colors,
    })
  }

  _quickSort(0, arr.length - 1);

  // 对数组[l, r]区间进行快速排序 
  function _quickSort(l, r) {
    if (l > r) return;

    if (l === r) {
      mark(l, r, -1, -1, l);
    }

    const p = _partition(l, r);

    console.log('p', p)

    mark(l, r, -1, -1, -1);
    _quickSort(l, p - 1);
    _quickSort(p + 1, r);
  }

  function _partition(l, r) {
    // 参考标准,随机取
    const radomIndex = Math.round(Math.random() * (r - l) + l);
    [arr[l], arr[radomIndex]] = [arr[radomIndex], arr[l]]
    const v = arr[l]

    mark(l, r, l, -1, -1);

    // arr[l+1...j] < v ; arr[j+1...i) > v
    let j = l
    for (let i = l + 1; i <= r; i++) {
      mark(l, r, l, i, -1);
      if (arr[i] < v) {
        // 交换: 将小于v的放置到小于列表中的后一位，j进行++
        [arr[j + 1], arr[i]] = [arr[i], arr[j + 1]]
        j++
        mark(l, r, l, i, -1);
      }
    }
    // 将参考值与j进行交换，使得满足左侧小于参考值，右侧大于参考值
    [arr[l], arr[j]] = [arr[j], arr[l]]
    mark(l, r, -1, -1, j); 
    return j
  }
}



function quickSort2(arr, ctx) {
  
  let fixedPivot = new Array(arr.length).fill(false);
  
  // 动画标记
  function mark(l, r, currentPivot, currentL, currentR, fixedIdx) {
    fixedIdx >= 0 && (fixedPivot[fixedIdx] = true) 
    let colors = {};
    for (let i = 0; i < arr.length; i++) {
      if (i >= l && i <= r) {
        colors[i] = 'green'
      }
      colors[currentPivot] = '#3e44ad'
      if (i >= l + 1 && i <= currentL) {
        colors[i] = '#f7cf5e';
      }
      if (i >= currentR && i <= r) {
        colors[i] = '#f7cf5e';
      }

      if (fixedPivot[i]) {
        colors[i] = 'red'
      }
    }
    ctx.addAnimateData({
      data: [...arr],
      colors,
    })
  }

  _quickSort(0, arr.length - 1);

  // 对数组[l, r]区间进行快速排序 
  function _quickSort(l, r) {
    if (l > r) return;

    if (l === r) {
      mark(l, r, -1, -1, -1, l);
    }

    const p = _partition(l, r);

    _quickSort(l, p - 1);
    _quickSort(p + 1, r);
  }

  // // 双路快速排序 
  function _partition(l, r) {
    // 参考标准,随机取
    const radomIndex = Math.round(Math.random() * (r - l) + l);
    [arr[l], arr[radomIndex]] = [arr[radomIndex], arr[l]]
    const v = arr[l];

    mark(l, r, l, -1, -1, -1);
    // [l + 1, i) <= v    (j, r] >= v;
    let i = l + 1, j = r;

    mark(l, r, l, i, j, -1);

    while (true) {
      while (i <= r && arr[i] < v) {
        i++;
        mark(l, r, l, i, j, -1);
      };
      while (j >= l + 1 && arr[j] > v) {
        j--;
        mark(l, r, l, i, j, -1);
      };
      if (i > j) break;
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++;
      j--;
      mark(l, r, l, i, j, -1);
    }
    [arr[l], arr[j]] = [arr[j], arr[l]]

    mark(l, r, -1, -1, -1, j);

    return j;
  }
}


function quickSort3(arr, ctx) {

  let fixedPivot = new Array(arr.length).fill(false);
  // 动画标记
  function mark(l, r, currentPivot, currentL, currentR, fixedIdx) {
    if (fixedIdx >= 0) {
      fixedPivot[fixedIdx] = true
      let i = fixedIdx;
      // === v都变成红色
      while(i < arr.length && arr[i] === arr[fixedIdx]) {
        fixedPivot[i] = true
        i++
      }
    }
    let colors = {};
    for (let i = 0; i < arr.length; i++) {
      if (i >= l && i <= r) {
        colors[i] = 'green'
      }
      colors[currentPivot] = '#3e44ad'
      if (i >= l + 1 && i <= currentL) {
        colors[i] = '#f7cf5e';
      }
      if (i >= currentR && i <= r) {
        colors[i] = '#f7cf5e';
      }

      if (fixedPivot[i]) {
        colors[i] = 'red'
      }
    }
    ctx.addAnimateData({
      data: [...arr],
      colors,
    })
  }


  _quickSort( 0, arr.length - 1)
  
  function _quickSort(l, r) {
    if (l > r) return

    if (l === r) {
      mark(l, r, -1, -1, -1, l);
    }

    // 随机参考标准
    const radomIndex = Math.round(Math.random() * (r - l) + l);
    [arr[l], arr[radomIndex]] = [arr[radomIndex], arr[l]]
    const v = arr[l]

    mark(l, r, l, -1, -1, -1);

    let lt = l // [l+1...lt] < v
    let gt = r + 1 // [gt...r] > v
    let i = l + 1 // [lt+1...i) === v

    mark(l, r, l, lt, gt, -1);

    while(i < gt) {
      if (arr[i] < v) { // 小于
        [arr[i], arr[lt + 1]] = [arr[lt + 1], arr[i]]
        lt++
        i++
      } else if (arr[i] > v) { // 大于
        [arr[i], arr[gt - 1]] = [arr[gt - 1], arr[i]]
        gt--
      } else { // 相等
        i++
      }
      mark(l, r, l, i, gt, -1);
    }
    // 参考标准与 小于v的最后一个元素交换
    [arr[l], arr[lt]] = [arr[lt], arr[l]] 
    mark(l, r, -1, -1, -1, lt);
    // 对小于、大于俩部分进行排序，中间相等的不做操作
    _quickSort(l, lt - 1)
    _quickSort(gt, r)
  }
}