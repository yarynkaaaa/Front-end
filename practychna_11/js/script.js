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
        console.log(
            `Метод ОБМІН: count exchange (ОБМІН) - ${exchange}, count relocation (ПЕРЕМІЩЕННЯ) - ${relocation}`
        );
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
            `Метод BCTABOK: count exchange (ОБМІН) - ${exchange}, count relocation (ПЕРЕМІЩЕННЯ) - ${relocation}`
        );
        return arr;
    },

    shellSort: function (arr, output = true) {
        exchange = 0;
        let relocation = 0;
        const len = arr.length;
        let gap = Math.floor(len / 2);

        while (gap > 0) {
            for (let i = gap; i < len; i++) {
                let temp = arr[i];
                let j = i;

                while (
                    j >= gap &&
                    ((output && arr[j - gap] > temp) || (!output && arr[j - gap] < temp))
                ) {
                    exchange++;
                    arr[j] = arr[j - gap];
                    j -= gap;
                    relocation++;
                }
                arr[j] = temp;
            }
            gap = Math.floor(gap / 2);
        }
        console.log(
            `Метод ШЕЛЛ:  count exchange (ОБМІН) - ${exchange}, count relocation (ПЕРЕМІЩЕННЯ) - ${relocation}`
        );
        return arr;
    },

    quickSort: function (arr, low = 0, high = arr.length - 1, output = true) {
        let exchange = 0;
        let relocation = 0;

        const swap = (arr, i, j) => {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            exchange++;
        };

        const sort = (arr, low, high) => {
            if (low >= high) return;

            const pivot = arr[Math.floor((low + high) / 2)];
            let i = low;
            let j = high;

            while (i <= j) {
                while ((output && arr[i] < pivot) || (!output && arr[i] > pivot)) {
                    i++;
                }
                while ((output && arr[j] > pivot) || (!output && arr[j] < pivot)) {
                    j--;
                }
                if (i <= j) {
                    swap(arr, i, j);
                    relocation++;
                    i++;
                    j--;
                }
            }

            sort(arr, low, j);
            sort(arr, i, high);
        };

        sort(arr, low, high);

        console.log(
            `Метод XOAP: count exchange (ОБМІН) - ${exchange}, count relocation (ПЕРЕМІЩЕННЯ) - ${relocation}`
        );
        return arr;
    },
};

const array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));

console.log("Масив:", array);
console.log("Метод ОБМІН :", LibrarySort.bubbleSort([...array]));
console.log("Метод МІНІМАЛЬНІ ЕЛЕМЕНТИ :", LibrarySort.selectionSort([...array]));
console.log("Метод BCTABOK :", LibrarySort.insertionSort([...array]));
console.log("Метод ШЕЛЛ :", LibrarySort.shellSort([...array]));
console.log("Метод XOAP :", LibrarySort.quickSort([...array]));
