12345
1234
123
12
1

CODE
let n=5
let str=""

for(let i=1;i<=n;i++)
{
  for(let j=1;j<=n-i+1;j++)
  {
   str=str+j
  }
  str= str + "\n"
}

console.log(str)
