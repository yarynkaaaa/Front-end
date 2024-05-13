const LibrarySort = {
    bubbleSort: function (arr, output = true) {
        let exchange = 0;
        let relocation = 0;
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                exchange++;
                if ((output && arr[j] > arr[j + 1]) || (!output && arr[j] < arr[j + 1])) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    relocation++;
                }
            }
        }
        console.log(`Метод ОБМІН: count exchange (ОБМІН) - ${exchange}, count relocation (ПЕРЕМІЩЕННЯ) - ${relocation}`);
        return arr;
    },

    selectionSort: function (arr, output = true) {
        let exchange = 0;
        let relocation = 0;
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            let min_idx = i;
            for (let j = i + 1; j < n; j++) {
                exchange++;
                if ((output && arr[j] < arr[min_idx]) || (!output && arr[j] > arr[min_idx])) {
                    min_idx = j;
                }
            }
            let temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
            relocation++;
        }
        console.log(
            `Метод МІНІМАЛЬНІ ЕЛЕМЕНТИ:  count exchange (ОБМІН) - ${exchange}, count relocation (ПЕРЕМІЩЕННЯ) - ${relocation}`
        );
        return arr;
    },

    insertionSort: function (arr, output = true) {
        let exchange = 0;
        let relocation = 0;
        const n = arr.length;
        for (let i = 1; i < n; i++) {
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && ((output && arr[j] > key) || (!output && arr[j] < key))) {
                exchange++;
                arr[j + 1] = arr[j];
                j = j - 1;
                relocation++;
            }
            arr[j + 1] = key;
        }
        console.log(
            `метод BCTABOK: count exchange (ОБМІН) - ${exchange}, count relocation (ПЕРЕМІЩЕННЯ) - ${relocation}`
        );
        return arr;
    },
};

const array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

console.log("Масив:", array);
console.log("Метод ОБМІН :", LibrarySort.bubbleSort([...array]));
console.log("Метод МІНІМАЛЬНІ ЕЛЕМЕНТИ:", LibrarySort.selectionSort([...array]));
console.log("Метод BCTABOK:", LibrarySort.insertionSort([...array]));
