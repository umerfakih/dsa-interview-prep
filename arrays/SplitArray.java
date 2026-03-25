package arrays;

public class SplitArray {
    public static void main(String[] args) {
        int[] nums = { 7, 2, 5, 10, 8, 3, 6, 1 };
        int k = 3;
        System.out.println("Input nums: [7, 2, 5, 10, 8, 3, 6, 1], k=" + k);
        int[] ans = binarySearch(nums, k);
        System.out.println("\nFinal mins from each bucket:");
        for(int item : ans){
            System.out.println(item);
        }
    }

    public static int[] binarySearch(int[] nums, int k) {
        int start = maxElement(nums);
        int end = sum(nums);
        int[] minFromBucket = new int[k];

        System.out.println("\nBinary search range: start=" + start + " (max element), end=" + end + " (total sum)");

        while (start < end) {
            int mid = start + (end - start) / 2;
            int minFromEachBucket = Integer.MAX_VALUE;
            int sum = 0;
            int pieces = 1;
            int iteraion = 0;
            int[] tempMin = new int[k];

            System.out.println("\n--- Trying mid=" + mid + " (max allowed sum per bucket) ---");

            for (int num : nums) {
                if (sum + num > mid) {
                    // adding num would exceed mid, so close current bucket and start a new one
                    System.out.println("  num=" + num + ": sum+num=" + (sum+num) + " > mid=" + mid
                        + " → close bucket " + iteraion + " (min=" + minFromEachBucket + "), start new bucket");
                    if (iteraion < k) tempMin[iteraion] = minFromEachBucket;
                    iteraion++;
                    minFromEachBucket = num;  // new bucket starts with just this num
                    sum = num;
                    pieces++;
                    System.out.println("    new bucket starts with num=" + num + ", pieces=" + pieces);
                } else {
                    if (num < minFromEachBucket) {
                        minFromEachBucket = num;
                    }
                    sum += num;
                    System.out.println("  num=" + num + ": fits in current bucket, sum=" + sum
                        + ", minSoFar=" + minFromEachBucket);
                }
            }
            // close the last bucket
            if (iteraion < k) tempMin[iteraion] = minFromEachBucket;
            System.out.println("  Close last bucket " + iteraion + " (min=" + minFromEachBucket + ")");

            System.out.println("  Total pieces=" + pieces + ", k=" + k);

            if (pieces <= k) {
                // mid is a valid split, try smaller → move end down
                minFromBucket = tempMin;
                System.out.println("  pieces <= k → mid=" + mid + " works, try smaller (end=" + mid + ")");
                end = mid;
            } else {
                // too many pieces needed → mid is too small, move start up
                System.out.println("  pieces > k → mid=" + mid + " too small, try larger (start=" + (mid+1) + ")");
                start = mid + 1;
            }
        }
        System.out.println("\nBinary search done. start=end=" + start);
        return minFromBucket;
    }

    public static int maxElement(int[] nums) {
        int max = 0;
        for (int num : nums) {
            if (num > max) {
                max = num;
            }
        }
        return max;
    }

    public static int sum(int[] nums) {
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        return sum;
    }
}
