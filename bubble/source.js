/**
 * 冒泡排序 O(n²)
 * 每轮比较相邻的俩个数，使较大的元素冒泡到尾部，经过n-1轮使数组有序。
 */
function bubbleSort(arr) {
  // 循环n-1轮
  for (let i = 0; i < arr.length - 1; i++) {
    // 每轮结束后，最大的数都放在后面，所以长度减去i
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 交换
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
}