"use strict"

function CocktailSort(arr) {
    var i = 0, j = arr.length - 1, flag = true, t;

    while (i < j && flag) {
        flag = false;
        for (var k = i; k < j; k++) {
            if (arr[k] > arr[k + 1]) {
                t = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = t;
                flag = true;
            }
        }
        j--;
        if (flag) {
            flag = false;
            for(var k = j; k > i; k--) {
                if (arr[k] < arr[k - 1]) {
                    t = arr[k];
                    arr[k] = arr[k - 1];
                    arr[k - 1] = t;
                    flag = true;
                }
            }
        }
        i++;
    }
    return arr;
}

console.log(CocktailSort([5, 4, 6, 3, 7, 2, 8, 1, 9, 10, 11, 19, 20, 12, 18, 13, 17, 14, 16, 15,]));
