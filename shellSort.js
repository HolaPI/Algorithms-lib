//从1000万个数中找出最大的100个数

let arr = [];
let time = new Date().getTime();
for (let i = 0; i < 10000000; i++) {
    //生成1000万个随机数，假设随机数范围0 ~ 1000w
    arr.push(Math.round(Math.random() * 10000000));
    // arr[i] = Math.round(Math.random() * 10000000);
}
let time2 = new Date().getTime();
console.log("生成随机数所耗时间: ", (time2 - time) / 1000, "s");

//希尔排序（动态间隔序列）
function shellSortComp(sArr) {
    let N = sArr.length;
    let h = 1;
    while (h < N / 3) {
        h = h * 3 + 1;
    }
    while (h >= 1) {
        for (let i = h; i < N; i++) {
            for (let j = i; j >= h && sArr[j] > sArr[j - h]; j -= h) {
                let temp = sArr[j];
                sArr[j] = sArr[j - h];
                sArr[j - h] = temp;
            }
        }
        h = (h - 1) / 3;
    }
    // return sArr.slice(0, 100);
}
let time4 = new Date().getTime();
// arr = shellSortComp(arr);
shellSortComp(arr);
let time5 = new Date().getTime();
console.log("排序并找出最大的100个数所耗时间: ", (time5 - time4) / 1000, "s");
// console.log(arr);


//希尔排序原理
// function shellSort(sArr, gaps) {
//     for (let g = 0; g < gaps.length; g++) {
//         for (let i = gaps[g]; i < sArr.length; i++) {
//             let temp = sArr[i];
//             for (var j = i; j >= gaps[g] && sArr[j - gaps[g]] > temp; j -= gaps[g]) {
//                 sArr[j] = sArr[j - gaps[g]];
//             }
//             sArr[j] = temp;
//         }
//     }
//     return sArr;
// }
// let shellArr = [6, 0, 2, 9, 3, 5, 8, 0, 5, 4]
//间隔序列
// let shellGaps = [5, 3, 1];
// shellSort(shellArr, shellGaps);


//普通排序1
//将1000万个数降序排列，截取前100个数
// let tarArr = arr.sort((a, b) => b - a).slice(0, 100);
// let time3 = new Date().getTime();
// console.log("排序并找出最大的100个数所耗时间: ", (time3 - time2) / 1000, "s");
// //打印目标数据
// console.log(tarArr);

//普通排序2
// let time4 = new Date().getTime();
// let arrT = arr.splice(0, 100).sort((a, b) => a - b);
// for (let j = 0; j < 9999900; j++) {
//     if (arr[j] > arrT[0]) {
//         arrT[0] = arr[j];
//     }
//     arrT.sort((a, b) => a - b);
// }
// let time5 = new Date().getTime();
// console.log("找出最大的100个数所耗时间: ", (time5 - time4) / 1000, "s");
// console.log(arrT)


//快速排序算法，递归原理
// function qSort(qArr) {
//     let len = qArr.length;
//     if (len == 0) {
//         return [];
//     }
//     let left = [];
//     let right = [];
//     let pivot = qArr[0];
//     for (let i = 0; i < len; i++) {
//         if (qArr[i] > pivot) {
//             left.push(qArr)
//         } else {
//             right.push(qArr)
//         }
//     }
//     return qSort(left).concat(pivot, qSort(right)).slice(0, 100)
// }
// let time4 = new Date().getTime();
// arr = qSort(arr);
// let time5 = new Date().getTime();
// console.log("排序并找出最大的100个数所耗时间: ", (time5 - time4) / 1000, "s");
// console.log(arr);