/**
 * 插入排序 O(n²)
 * 每当遍历到一个值，让它插入到已排序数组元素中，使之继续保持有序。
 */
function insertionSort(arr) {
  // 循环n-1轮
  for (let i = 1; i < arr.length; i++) {
    // 插入的位置
    let j = i, current = arr[i];
    for (;j > 0 && arr[j - 1] > current; j--) {
      // 元素后移
      arr[j] = arr[j - 1];
    }
    arr[j] = current;
  }
}