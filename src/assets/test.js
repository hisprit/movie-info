const array = ['제우스', '카나비', '쵸비', '룰러', '케리아'];

console.log('1. 배열에서 includes() 메서드 사용 예시:');

const a = array.filter(arr =>{
    return arr.includes('쵸비')
})
console.log(a);
console.log(array.includes('쵸비')); // ?
console.log(array.includes('페이커')); // ?

