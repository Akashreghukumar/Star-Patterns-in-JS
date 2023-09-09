1
12
123
1234
12345

CODE
let n=5
let str=""

for(let i=1;i<=n;i++)
{
  for(let j=1;j<=i;j++)
  {
   str=str+j 
  }
  str= str + "\n"
}

console.log(str)
