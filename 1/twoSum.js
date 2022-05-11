function twoSum(nums, target){
    const visitedNums = {}
    for(let i = 0; i< nums.length; i++){
      const indexOfNeededNum = visitedNums[target- nums[i]];
      console.log('nums[i]', nums[i]);
      console.log('indexOfNeededNum', indexOfNeededNum);
      
      if(indexOfNeededNum >= 0){
        return [i , indexOfNeededNum]
      }
      visitedNums[nums[i]] = i
      console.log('i', i);
      console.log('visitedNums', visitedNums);
      console.log('visitedNums[nums[i]]', visitedNums[nums[i]]);
    }
}


const arr = [1,2,3,4,5]
console.log(twoSum(arr, 4));