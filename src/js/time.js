// 创建Date对象
const today = new Date();

// 获取年月日
let year = today.getFullYear();
let month = today.getMonth() + 1; // 月份从0开始，需要加1
let day = today.getDate();