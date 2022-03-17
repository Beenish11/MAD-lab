//Write program to find sum of all digits. Input 23617 output 2+3+6+1+8=20
int x = Integer.parseInt(args[0]);
int y =0,z=0;
while(x>0)
{ 
 y=y+x%10;
 x=x/10;
}
console.log("Sum of digits is ="+y);