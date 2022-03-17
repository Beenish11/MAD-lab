  int m=0;
  int x = Integer.parseInt(args[0]);
  int y = Integer.parseInt(args[1]);
  for(int i=0; i<y; i++)
  {
   m=x%10;
   x=x/10;
  }
 console.log(y+"th digit from last is ="+m);
 
