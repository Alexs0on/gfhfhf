//Косаринов Александр Пдо31 практика по JS
//Основы JS
//№1
///* 
function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value ==="object" || typeof value ==="function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(1452));
console.log(detect_data_type('hello'));
console.log(detect_data_type(false));
console.log(detect_data_type(345n));
//*/

//№2
/* 
const a = () => console.log("a");
const b = () => console.log("b");
const c = a || b ? a() : b();
console.log(c);
//Сначала вычисляется условие: a || b, каждый операнд конвертирует в логическое значение. Если результат true, останавливается и возвращает исходное значение этого операнда. Если все операнды являются ложными (false), возвращает последний из них.
//Условный оператор „?“ - cначала вычисляется условие(a || b): если оно истинно, тогда возвращается - a(), в противном случае – b().
//В данном случаи после работы условного оператора „?“, возвращаестся - a(), который выводит в консоль "a", а const c не было присвоено значение и будет выводить undefined.
*/

//Функции 
//№1
/*
//var a = [3,2,1,5,7];
var a = [3,null,1, ,'asad', ,];
d=0;
a.forEach(function(entry) {
    if(typeof(entry) == 'number')
    {
      d+=entry;
    }
});
console.log(d);
*/

//Объекты и Массивы
//№1
/*
const arr = [1, null, 'test', undefined]
function convertArrToObj() {
    const obj1 = Object.assign({}, arr);
    return obj1; 
  }
const obj = convertArrToObj(arr)
console.log(obj)
*/

//Объекты и Массивы
//№2 
/*
var arr =  [1, 1, 1, 'test', 'test'];
var result = {};
function countFromArr(arr) {
 arr.forEach(function(a){
     if (result[a] != undefined)
         ++result[a];
     else
         result[a] = 1;
 const obj1 = Object.assign({}, result);
 arr=obj1; 
 
})
return arr;
};
const res = countFromArr(arr)
console.log(res)
*/
  
//№3 
/*
const arr = [{test: 1},{test: 2},{test: 3},{test: 11},{test: 11},{test: 3},{test: 0},{test: 2},{test: 3},{test: 11},{test: 11},{test: 3},{test: 0}];
  
  function groupByField(xs, f) {
      return xs.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
    }
    
  const res = groupByField(arr, (c) => c.test);
  console.log(res);
*/





