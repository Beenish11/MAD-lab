//Write a JavaScript program to check whether 10 appears in first or last position of a given array of integers. The array length must be greater or equal to 2.
function first_last_10(nums)
{
  const end_pos = nums.length - 1;
  //return nums[0] == 10 || nums[end_pos] == 1;
   if (nums[0] == 10) {
        console.log("10 appears in first Position.")
  }
    
}


console.log(first_last_10([1, 3, 5]));
console.log(first_last_10([1, 3, 5, 1]));
console.log(first_last_10([10, 4, 6]));
console.log(first_last_10([2, 4, 6,5,6,7,8,5,10]));