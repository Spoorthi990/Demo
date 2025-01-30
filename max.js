function prime(n){
    f=0
    for(i=1;i<=n;i++){
        if(n%i==0){
            f+=1
        }
    }
    if(f==2){
        console.log('prime')
    }
    else{
        console.log('not')
    }
}
prime(6)

