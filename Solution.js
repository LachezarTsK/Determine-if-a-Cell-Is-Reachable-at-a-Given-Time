
/**
 * @param {number} startColumn
 * @param {number} startRow
 * @param {number} finishColumn
 * @param {number} finishRow
 * @param {number} targetTime
 * @return {boolean}
 */
var isReachableAtTime = function (startColumn, startRow, finishColumn, finishRow, targetTime) {
    if (startColumn === finishColumn && startRow === finishRow) {
        return targetTime !== 1;
    }
    return Math.max(Math.abs(startColumn - finishColumn), Math.abs(startRow - finishRow)) <= targetTime;
};
