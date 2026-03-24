package arrays;

public class findRotationCount {
    public static void main(String[] args) {
        int[] nums = { 4, 5, 6, 7, 0, 1, 2 };
        int ans = BS(nums) + 1;
        System.out.println(ans);

    }

    public static int BS(int[] nums) {
        int start = 0;
        int end = nums.length - 1;

        while (start <= end) {
            int mid = start + (end - start) / 2;

            if (end > mid && nums[mid] > nums[mid + 1]) {
                return mid;
            }
            if (start < mid && nums[mid] < nums[mid - 1]) {
                return mid - 1;
            }
            if (nums[mid] >= nums[start]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1;
    }
}
