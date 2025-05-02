  const outputDiv = document.getElementById('output');
  function getNumberInput() 
  {
    let num;
    do {
        num = prompt("Please enter a number:");
    } while (num === null || num.trim() === "" || isNaN(num));
    return parseInt(num, 10);
  }
  
  function printRectangle(n)
  {
    let output = `Number inputted: ${n}\n\n`;
    for (let i = n; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += i + " ";
        }
        output += row.trim() + "\n";
    }
    return output;
  }
  
  function printTriangle(n) 
  {
    let output = `Number inputted: ${n}\n\n`;
    for (let i = n; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i + " ";
        }
        output += row.trim() + "\n";
    }
    return output;
  }
  
  const userNum = getNumberInput();
  let result = "";
  if (userNum % 2 === 1) 
  {
    result = printRectangle(userNum);
  } 
  else 
  {
    result = printTriangle(userNum);
  }
  
  document.body.innerHTML = `<pre>${result}</pre>`;