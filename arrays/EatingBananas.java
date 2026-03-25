package arrays;

public class EatingBananas {
    public static void main(String[] args) {
        int[] piles = { 12, 15, 7, 10, 20 };
        int h = 7;
        int ans = binarySearch(piles, h);
        System.out.println(ans);
    }

    public static int binarySearch(int[] piles, int h) {
        int start = 1;
        int end = maxValue(piles);

        System.out.println("Search range: [" + start + ", " + end + "], h=" + h);
        System.out.println("--------------------------------------------");

        int iteration = 1;
        while (start < end) {
            int mid = start + (end - start) / 2;

            int hours = 0;
            for (int pile : piles) {
                hours += (pile + mid - 1) / mid;
            }

            System.out.println("Iter " + iteration + ": start=" + start + ", end=" + end
                    + ", mid=" + mid + ", hours=" + hours);

            if (hours <= h) {
                System.out.println("  hours(" + hours + ") <= h(" + h + ") → speed " + mid + " works, try smaller → end=" + mid);
                end = mid;
            } else {
                System.out.println("  hours(" + hours + ") > h(" + h + ") → speed " + mid + " too slow, go faster → start=" + (mid + 1));
                start = mid + 1;
            }
            iteration++;
        }

        System.out.println("--------------------------------------------");
        System.out.println("Minimum eating speed: " + start);
        return start;
    }

    public static int maxValue(int[] piles) {
        int max = 0;
        for (int pile : piles) {
            if (pile > max) {
                max = pile;
            }
        }
        return max;
    }
}
