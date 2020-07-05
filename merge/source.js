/**
 * 归并排序 O(nlogn)
 * 将数组拆分俩部分分别进行归并排序，再将俩个有序的数组进行合并
 */
function mergeSort(arr) {
  _mergeSort(0, arr.length - 1);

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

      k++;
    }
  }
}