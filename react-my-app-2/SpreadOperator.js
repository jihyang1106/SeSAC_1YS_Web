// @ts-check

const obj = {
  pororo: '뽀로로',
  lupy: '루피',
  crong: '크롱',
};

const copyObj = { ...obj, lupy: 'lupy' };

console.log('obj: ', obj);
console.log('copyObj :', copyObj);
console.log(...obj.pororo);
console.log(...obj.lupy);
console.log(obj === copyObj);

const arr = [1, 2, 3, 4, 5];
console.log(...arr);
console.log(arr);
