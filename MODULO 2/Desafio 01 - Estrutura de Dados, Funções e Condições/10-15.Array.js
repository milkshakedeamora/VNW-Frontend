var array = ["Ana","Maria","Bento","Joaquim","Pedro"]
console.log(array);
//10 - Adicionar nome ao inicio 
array.unshift("Joana")
console.log(array);
//11-Remover ultimo nome 
array.pop()
console.log(array);
//12- Adicionar dois nomes a ultima posição 
array.push("Carlos", "Julia");
console.log(array);
//13 - Remover primeiro nome 
array.shift()
console.log(array);
//14- Adicionar elementos no meio do array
nome = ["João",  "Maria",  "Jose",  "Pedro"]
array.splice((array.length/2),0,...nome)
console.log(array)
//15 - Ordenar array
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort()
console.log(numbers)