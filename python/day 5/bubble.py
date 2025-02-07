nums = [3,2,4,1,5,6,7]

for i in range(len(nums) - 1):
  swapped = False
  for j in range(len(nums) - 1):
    if nums[j] > nums[j+1]:
      nums[j], nums[j+1] = nums[j+1], nums[j]
      swapped = True
  if not swapped:
    break
print(nums)


