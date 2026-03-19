package arrays;

public class FindCeil {

    public static void main(String[] args) {
        int[] arr = { 2, 6, 8, 10, 22, 40 };
        int ans = search(arr, 12);
        System.out.println(ans);

    }

    public static int search(int[] arr, int target) {
        int end = arr.length -1 ;
        int start = 0;

        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (target == arr[mid]) {
                return mid;
            } else if (target > arr[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return start;
    }
}
