// *** (Non decreasing) means It may have duplicates and it's in ascending order

function MergeTwoSortedNonDecreasingArr(nums1, m, nums2, n) {
  let lastIndexOfnums1 = m - 1;
  let lastIndexOfnums2 = n - 1;
  let lastIndexOfFinalMergedArr = m + n - 1;
  while (lastIndexOfnums2 > 0) {
    if (
      lastIndexOfnums1 > 0 &&
      nums1[lastIndexOfnums1] > nums2[lastIndexOfnums2]
    ) {
      nums1[lastIndexOfFinalMergedArr] = nums1[lastIndexOfnums1];
      lastIndexOfnums1--;
    } else {
      nums1[lastIndexOfFinalMergedArr] = nums2[lastIndexOfnums2];
      lastIndexOfnums2--;
    }
    lastIndexOfFinalMergedArr--;
  }
}

let nums1 = [2, 3, 4, 0, 0, 0];
let nums2 = [2, 4, 6];
MergeTwoSortedNonDecreasingArr(nums1, 3, nums2, 3);
console.log(nums1);
