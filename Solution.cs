
using System;

public class Solution
{
    public bool IsReachableAtTime(int startColumn, int startRow, int finishColumn, int finishRow, int targetTime)
    {
        if (startColumn == finishColumn && startRow == finishRow)
        {
            return targetTime != 1;
        }
        return Math.Max(Math.Abs(startColumn - finishColumn), Math.Abs(startRow - finishRow)) <= targetTime;
    }
}
