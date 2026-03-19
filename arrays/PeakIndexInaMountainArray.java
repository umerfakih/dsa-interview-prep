package arrays;

public class PeakIndexInaMountainArray {

    public static void main(String[] args) {
        int[] nums = {0,10,22,55,88,5,2};
        int peak = findPeak(nums);
        System.out.println(peak);
    }

    public static int findPeak(int[] nums){
        int start = 0;
        int end = nums.length - 1;

        while (start < end) {
            int mid = start + (end - start) / 2;
            // If mid climbs to the right, peak is to the right
            if (nums[mid] < nums[mid + 1]) {
                start = mid + 1;
            } else {
                // If mid declines to right, peak is at mid or left
                end = mid;
            }
        }
        return start;
    }
}