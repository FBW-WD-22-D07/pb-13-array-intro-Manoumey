 
//  1.Deklariere eine Variable mit dem Namen myArray und speichere ein Array mit 5 Elementen. Gib das Array aus.

   const myArray = new Array("eins", "zwei", "drei", "vier", "fünf");
   console.log(myArray);


// 2.Greife auf das dritte Element im Array zu und speichere es in einer anderen Variablen mit dem Namen thirdElement. Drucke das thirdElement aus.

   const thirdElement = myArray[2];
   console.log(thirdElement);

// 3.Weise das vierte Element des Arrays neu zu und gib ihm den Wert "fourth element". Drucke das Array noch einmal aus.

myArray.splice(3,1, "fourth element");
console.log(myArray);

