//Write program to find sum of even digits. Input 23617 output 2+6=8.
int m=0,n=0;
int x = Integer.parseInt(args[0]);
while(x>0)
{
 m=x%10;
 if(m%2==0)
 {
  n=n+m;
  x=x/10;
 }
 x=x/10;
}   
console.log("Sum of even digits of given number :-"+n);
}