package arrays;

public class TwoSum {

    public static void main(String[] args) {
        int[] arr = { 2, 7, 11, 15 };

        int[] ans = find(arr, 8);
        for (int num : ans) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static int[] find(int[] arr, int target) {
        int n = arr.length - 1;
        for (int i = 0; i < n - 1; i++) {
            if (arr[i] + arr[i + 1] == target) {
                return new int[] { i, i + 1 };
            }
        }
        return new int[] { -1 };
    }
}
