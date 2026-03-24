package arrays;

public class KokoEatingBananas {
    public static void main(String[] args) {
        int[] piles = { 30, 11, 23, 4, 20 };
        int h = 5;
        int ans = BS(piles, h);
        System.out.println(ans);
    }

    public static int BS(int[] piles, int h) {
        int start = 1;
        int end = 0;
        for (int pile : piles) {
            end = Math.max(end, pile);
        }
        while (start <= end) {
            int mid = start + (end - start) / 2;
            long hours = 0;
            for (int pile : piles) {
                hours += (pile + mid - 1) / mid;
                
            }
            if (hours <= h) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }

        }
        return start;
    }
}
