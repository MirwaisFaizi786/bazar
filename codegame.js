function reverseString(string){
    let count = 0
    for(let i=0;i< string.length; i++){
        if(string[i] === " "){
            count++
        }
    }
    return count
}
 console.log(reverseString("my name is ali"));