function sortedFrequency(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstIdx = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
    if (arr[mid] === num && (mid === 0 || arr[mid - 1] < num)) {
        firstIdx = mid;
        break;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    if (firstIdx === -1) {
      return -1; 
    }
  
    left = firstIdx; 
    right = arr.length - 1;
    let lastIdx = -1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num && (mid === arr.length - 1 || arr[mid + 1] > num)) {
        lastIdx = mid;
        break;
      } else if (arr[mid] > num) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return lastIdx - firstIdx + 1;
  }
  
  module.exports = sortedFrequency;