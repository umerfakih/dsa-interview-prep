package arrays;

public class RevisionSet {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 4, 6, 8,10, 5, 3, 1 };
        int ans = findPeak(nums);
        System.out.println(ans);
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

    public static char findSmallestLetterGreaterThanTheTarget(char[] letters, char target) {

        char ans = charSearch(letters, target, 0, letters.length - 1);
        return ans;

    }

    public static int findCeiling(int[] nums, int target) {
        int start = 0;
        int end = nums.length - 1;
        if (target > nums[end]) {
            return -1;
        } else {
            return search(nums, target, start, end);

        }

    }

    public static int findInInfiniteArray(int[] nums, int target) {
        int start = 0;
        int end = 1;
        while (true) {
            if (nums[end] < target) {
                start = end + 1;
                end = end * 2;
            } else {
                break;
            }
        }
        return search(nums, target, start, end);
    }

    public static int search(int[] nums, int target, int start, int end) {

        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return start;

    }

    public static char charSearch(char[] letters, char target, int start, int end) {

        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (letters[mid] <= target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return letters[start % letters.length];

    }
}
