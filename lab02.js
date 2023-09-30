//using filter() to get even multiples of 7 till 100
console.log("sum of even multiples of 7 between 1 and 100:");
const evenmultiplesof7 = (Array.from({ length: 14 }, (_, i) => (i + 1) * 7).filter(num => num%2 == 0));
// using reduce() to get sum of all the even multiples generated
const sumevenmultiplesof7 = evenmultiplesof7.reduce((sum, num) => sum + num, 0);
console.log(sumevenmultiplesof7);
console.log("");

//using currying to rewrite the function
function cylinder_volume(r) {
  return function (h) {
    var volume = 3.14 * r * r * h;
    return volume;
  };
}

//using r = 5 and h = 10 for function cylinder_volume
console.log("volume when r = 5 and h = 10:");
const calculatevol = cylinder_volume(5);
const vola = calculatevol(10);
console.log(vola);
console.log("");

//using h = 17 for function cylinder_volume
console.log("volume when h = 17:");
const volb = calculatevol(17);
console.log(volb);
console.log("");

//using h = 11 for function cylinder_volume
console.log("volume when h = 11:");
const volc = calculatevol(11);
console.log(volc);
console.log("");

//displaying an HTML table that has atleast one table cell/element
console.log("HTML Table:");
const makeTag = function (beginTag, endTag) {
  return function (textcontent) {
    return beginTag + textcontent + endTag;
  };
};

const tableRow = makeTag("<tr>", "</tr>");
const tableHeader = makeTag("<th>", "</th>");
const tableCell = makeTag("<td>", "</td>");

const table = `
  <table>
    ${tableRow(`
    ${tableCell("Araohat")}
    ${tableCell("Kokate")}
    ${tableCell("19")} 
    `)}
    ${tableRow(`
    ${tableHeader("John")}
    ${tableHeader("Lark")}
    ${tableHeader("40")} 
    `)}
 </table>
`;

console.log(table);
console.log("");


// Function to get odd multiples
function getOddMultiples(multiple) {
  return function () {
    const multiples = Array.from({ length: 100 / multiple }, (_, i) => (i + 1) * multiple).filter(num => num % 2 !== 0);
    return multiples;
  };
}

// Function to get the sum of even multiples
function getSumOfEvenMultiples(multiple) {
  return function () {
    const sum = Array.from({ length: 100 / multiple }, (_, i) => (i + 1) * multiple).filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
    return sum;
  };
}

// Example usage:
const oddMultiplesOf11 = getOddMultiples(11)();
const sumOfEvenMultiplesOf3 = getSumOfEvenMultiples(3)();
console.log("Odd Multiples of 11:", oddMultiplesOf11);
console.log("Sum of Even Multiples of 3:", sumOfEvenMultiplesOf3);