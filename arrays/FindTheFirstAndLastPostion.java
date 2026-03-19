package arrays;

/*Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/
public class FindTheFirstAndLastPostion {

    public static void main(String[] args) {
        int[] nums = { 5, 7, 7, 8, 8, 8, 8, 10 };
        int[] ans = find(nums, 8);
        for (int i = 0; i < ans.length; i++) {
            System.out.println(ans[i]);
        }

    }

    public static int[] find(int[] nums, int target) {
        int[] ans = { -1, -1 };

        int start = search(nums, target, true);
        if (start != -1) {
            int end = search(nums, target, false);
            return new int[] { start, end };
        }
        return ans;
    }

    public static int search(int[] nums, int target, boolean isStart) {
        int ans = -1;
        int start = 0;
        int end = nums.length - 1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] == target) {
                ans = mid;
                if (isStart) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            } else if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return ans;
    }
}
