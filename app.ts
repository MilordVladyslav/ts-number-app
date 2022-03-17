const express = require('express')
const path = require('path')
import NumInfo from "./types/NumInfo";
const app = express()
const port = 3000

app.use('/dist', express.static('dist'))
app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/numInfo/:num', (req, res) => {
  const num = Number(req.params.num);
  res.json(getNumInfo(num));
});
function isPrime(num: number): boolean {
  if (num <= 1) {
    return false
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

function getNumInfo(num: number): NumInfo {
  return {
    num,
    numDigits: String(Math.abs(num)).length,
    isEven: num % 2 === 0,
    isPrime: isPrime(num)
  }
}

app.listen(port, () => console.log(`server started at localhost:${port}`))
