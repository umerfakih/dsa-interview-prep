package arrays;

public class SplitArrayLargestSum {
    public static void main(String[] args) {
        int[] nums = { 7, 2, 5, 10, 8 };
        int k = 2;
        int ans = sumOfSplitArray(nums,k);
        System.out.println(ans);

    }

    public static int sumOfSplitArray(int[] nums, int k) {
        int start = findMaxElement(nums);
        int end = findSumOfElement(nums);

        while (start < end) {
            int mid = start + (end - start) / 2;
            int sum = 0;
            int pieces = 1;
            for (int num : nums) {
                if (sum + num > mid) {
                    sum = num;
                    pieces++;
                } else {
                    sum += num;
                }
            }
            if (pieces > k) {
                start = mid + 1;
            } else {
                end = mid;
            }

        }
        return end;
    }

    public static int findMaxElement(int[] nums) {
        int max = 0;

        for (int num : nums) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }

    public static int findSumOfElement(int[] nums) {
        int sum = 0;

        for (int num : nums) {
            sum += num;
        }
        return sum;
    }
}
