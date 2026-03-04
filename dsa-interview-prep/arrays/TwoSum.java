package arrays;

public class TwoSum {

    public static void main(String[] args) {
        int[] arr = { 3, 2, 3 };

        int[] ans = find(arr, 6);
        for (int num : ans) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static int[] find(int[] arr, int target) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (arr[i] + arr[j] == target) {
                    return new int[] { i, j };
                }
            }
        }
        return new int[] { -1 };
    }
}
