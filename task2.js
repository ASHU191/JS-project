let value ="madam" ;

const revVlaue = () => {
    let myRevVal = value.toString().split("").reverse().join("");
    let myStrVal = value.toString();

    if(myStrVal === myRevVal){
        console.log("palindrome")
    } else{
        console.log("Not a palindrome")
    }
};

revVlaue();




// ASHU xD 