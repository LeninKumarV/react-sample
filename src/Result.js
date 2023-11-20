import React from "react";
 
function Result({systemValue,term}){
    let result;

    if(term){
    if(term>systemValue){
        result ='Higher'
    }
    else if(term<systemValue){
        result='Lower'
    }
    else if(term===systemValue){
        result='yippee! Correct '
    }
    else{
        result='Enter a valid number'
    }
    }
    return(
        <div>You Guessd: {result}</div>
    )
}
export default Result;