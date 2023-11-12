
#include <cmath>
#include <algorithm>
using namespace std;

class Solution {
    
public:
    bool isReachableAtTime(int startColumn, int startRow, int finishColumn, int finishRow, int targetTime) const {
        if (startColumn == finishColumn && startRow == finishRow) {
            return targetTime != 1;
        }
        return max(abs(startColumn - finishColumn), abs(startRow - finishRow)) <= targetTime;
    }
};
