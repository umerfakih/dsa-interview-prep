package arrays;

public class BouqetFlowers {
    public static void main(String[] args) {
        int[] bloomDay = { 1, 10, 3, 10, 2 };
        int m = 3;
        int k = 2;
        System.out.println(binarySearch(bloomDay, m, k));
    }

    public static int binarySearch(int[] bloomDay, int m, int k) {
        if (bloomDay.length < (long) m * k) return -1;

        int start = 1;
        int end = maxElement(bloomDay);

        while (start < end) {
            int mid = start + (end - start) / 2;

            if (canMakeBouquets(bloomDay, mid, m, k)) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }

        return start;
    }

    public static boolean canMakeBouquets(int[] bloomDay, int day, int m, int k) {
        int count = 0;
        int bouqet = 0;

        for (int bloom : bloomDay) {
            if (bloom <= day) {
                count++;
            } else {
                count = 0;
            }

            if (count == k) {
                bouqet++;
                count = 0;
            }

            if (bouqet >= m) {
                return true;
            }
        }

        return false;
    }

    public static int maxElement(int[] bloomDay) {
        int max = 0;
        for (int day : bloomDay) {
            if (day > max)
                max = day;
        }
        return max;
    }
}
