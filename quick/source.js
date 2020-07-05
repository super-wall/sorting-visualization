/**
 * 快速排序 O(nlogn)
 * 选取标定点，使标定点左侧都小于其值，右侧都大于其值
 */
function quickSort(arr) {
  _quickSort(0, arr.length - 1);

  // 对数组[l, r]区间进行快速排序 
  function _quickSort(l, r) {
    if (l >= r) return;

    const p = _partition(l, r);

    _quickSort(l, p - 1);
    _quickSort(p + 1, r);
  }

  // 将数组[l, r]区间分成俩部分，返回标定点p， [l, p - 1]元素都小于p [p + 1, r]元素都大于p 
  function _partition(l, r) {
    const randomIdx = Math.round(Math.random() * (r - l + 1) + l);
    [arr[l], arr[randomIdx]] = [arr[randomIdx], arr[l]]
    const v = arr[l];
    // arr[l + 1, j] < v  arr[j, i) > v  
    let j = l;
    for (let i = l + 1; i <= r; i++) {
      if (arr[i] > v) continue;
      [arr[j + 1], arr[i]] = [arr[i], arr[j + 1]];
      j++;
    }

    [arr[l], arr[j]] = [arr[j], arr[l]]

    return j;
  }

}

function quickSort2(arr) {
  _quickSort(0, arr.length - 1);

  // 对数组[l, r]区间进行快速排序 
  function _quickSort(l, r) {
    if (l >= r) return;

    const p = _partition(l, r);

    _quickSort(l, p - 1);
    _quickSort(p + 1, r);
  }

  // 双路快速排序 
  function _partition(l, r) {
    // 参考标准,随机取
    const radomIndex = Math.round(Math.random() * (r - l + 1) + l);
    [arr[l], arr[radomIndex]] = [arr[radomIndex], arr[l]]
    const v = arr[l];
    // [l + 1, i) <= v    (j, r] >= v;
    let i = l + 1, j = r;
    while (true) {
      while (i <= r && arr[i] < v) i++;
      while (j >= l + 1 && arr[j] > v) j--;
      if (i > j) break;
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++;
      j--;
    }
    [arr[l], arr[j]] = [arr[j], arr[l]]

    return j;
  }
}

function quickSort3(arr) {
  _quickSort( 0, arr.length - 1)
  
  function _quickSort(l, r) {
    if (l >= r) return

    // 随机参考标准
    const radomIndex = Math.round(Math.random() * (r - l) + l);
    [arr[l], arr[radomIndex]] = [arr[radomIndex], arr[l]]
    const v = arr[l]

    let lt = l // [l+1...lt] < v
    let gt = r + 1 // [gt...r] > v
    let i = l + 1 // [lt+1...i) === v

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
    }
    // 参考标准与 小于v的最后一个元素交换
    [arr[l], arr[lt]] = [arr[lt], arr[l]] 
    // 对小于、大于俩部分进行排序，中间相等的不做操作
    _quickSort(l, lt - 1)
    _quickSort(gt, r)
  }
}