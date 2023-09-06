/**
 * Task explanation
 * 
 * An array is monotonic if it is either monotone increasing or monotone decreasing.
 * 
 * An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. 
 * An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
 * 
 * Given an integer array nums, return true if the given array is monotonic, or false otherwise.
 * 
 * Example 1:
 * Input: nums = [1,2,2,3]
 * Output: true
 * 
 * Example 2:
 * Input: nums = [6,5,4,4]
 * Output: true
 * 
 * Example 3:
 * Input: nums = [1,3,2]
 * Output: false
 * 
 * Constraints:
 * 1 <= nums.length <= 105
 * -105 <= nums[i] <= 105
 */


function solution(nums: number[]): boolean {
  let flag: 'inc' | 'dec' | 'eq' = nums[0] === nums[1] ? 'eq' : nums[0] < nums[1] ? 'inc' : 'dec'

  for (let i = 1; i < nums.length - 1; i++) {
    if (flag === 'dec' && nums[i] < nums[i + 1]) {
      return false
    }

    if (flag === 'inc' && nums[i] > nums[i + 1]) {
      return false
    }

    if (flag === 'eq' && nums[i] !== nums[i + 1]) {
      if (nums[i] < nums[i + 1]) {
        flag = 'inc'
      }

      if (nums[i] > nums[i + 1]) {
        flag = 'dec'
      }
    }
  }

  return true
}

solution([2, 2, 2, 1, 4, 5])

export default solution
