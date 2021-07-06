export const hasInArray = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) === Number(item)) {
            return true;
        }
    }
    return false;
}