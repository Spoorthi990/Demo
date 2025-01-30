s1='hat'
s2='tahr'
s3=s1.length
console.log(s3)
s4=s2.length
console.log(s4)
s7=s1.split('')

s8=s2.split('')

s7.sort()
s8.sort()
console.log(s7)
console.log(s8)
for(i=0;i<s7.length;i++)
    if(i in s8){
      console.log('it is anagram')
      break
    }
    else{
      console.log('not')
    }

   
