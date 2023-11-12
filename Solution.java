
public class Solution {

    public boolean isReachableAtTime(int startColumn, int startRow, int finishColumn, int finishRow, int targetTime) {
        if (startColumn == finishColumn && startRow == finishRow) {
            return targetTime != 1;
        }
        return Math.max(Math.abs(startColumn - finishColumn), Math.abs(startRow - finishRow)) <= targetTime;
    }
}
