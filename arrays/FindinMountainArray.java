package arrays;

public class FindinMountainArray {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 4, 5, 3, 1 };
        int target = 3;
        int peak = findPeak(nums);

        int firstOccurance = search(nums, 0, peak, target, true);
        System.out.println(firstOccurance);
        if (firstOccurance == -1) {
            int secondOccurance = search(nums, peak, nums.length - 1, target, false);
            System.out.println(secondOccurance);
        }

    }

    public static int findPeak(int[] nums) {
        int start = 0;
        int end = nums.length - 1;

        while (start < end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] < nums[mid + 1]) {
                start = mid + 1;
            } else {
                end = mid;
            }
        }
        return start;
    }

    public static int search(int[] nums, int start, int end, int target, boolean isAsc) {

        while (start <= end) {
            int mid = start + (end - start) / 2;

            if (nums[mid] == target) {
                return mid;
            }

            if (isAsc) {
                if (nums[mid] < target) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            } else {
                if (nums[mid] < target) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }
        return -1;
    }
}
