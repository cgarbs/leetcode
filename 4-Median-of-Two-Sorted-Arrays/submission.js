// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */

 var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const half = Math.ceil(mergedArray.length / 2);
    const first = [...mergedArray].splice(0, half)
    const second = [...mergedArray].splice(-half)
    const result = first[first.length -1] + second[0];
    if (mergedArray.length % 2 === 0) {
        return result / 2
    } else {
        return first[first.length -1]
    }
};