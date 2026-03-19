package arrays;

// Find Smallest Letter Greater Than Target
//You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

//Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.
public class FindSmallestLetter {
    public static void main(String args[]) {
        char[] arr = { 'c', 'f', 'j' };
        char ans = search(arr, 'c');
        System.out.println(ans);
    }

    public static char search(char[] arr, char target) {
        int end = arr.length - 1;
        int start = 0;

        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] <= target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return arr[start % arr.length];
    }
}
