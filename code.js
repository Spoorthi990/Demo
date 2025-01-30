str='spoorthi 123'
numbers=""
alphabets=""
for(char of str){
    if(char>'0' && char<=9){
       numbers=numbers+char
    }
    else{
        alphabets=alphabets+char
    }
    
}
console.log(alphabets)
console.log(numbers)
