package arrays;

public class FindTargetInInfiniteArray {

    public static void main(String[] args) {
        int[] nums = { 2, 6, 8, 10, 22, 23, 25, 31, 35, 39, 40 };
        int ans = find(nums, 31);
        System.out.println(ans);

    }

    public static int find(int[] nums, int target) {
        int start = 0;
        int end = 1;

        while (true) {
            try {
                int valueAtEnd = nums[end];
                if (valueAtEnd >= target) {
                    break;
                }
                start = end;
                end = end * 2;
            } catch (ArrayIndexOutOfBoundsException ex) {
                // If out of bounds, shrink range by binary halving between start and end
                if (end - start <= 1) {
                    end = start;
                    break;
                }
                end = start + (end - start) / 2;
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
        return -1;
    }
}
