function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(10); // This will work fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}

printNumbers2(10); // This will print 11 eleven times due to closure issue