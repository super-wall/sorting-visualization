/**
 * 选择排序 O(n²)
 * 每轮选出最小的放到最前面，经过n-1轮使数组有序。
 */
function selectionSort(arr) {
  // 循环n-1轮
  for (let i = 0; i < arr.length - 1; i++) {
    // 每轮找到最小的元素
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      arr[minIdx] > arr[j] && (minIdx = j);
    }
    // 与当前i位置进行交换
    [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
  }
}