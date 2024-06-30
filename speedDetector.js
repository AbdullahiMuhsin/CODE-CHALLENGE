function speedDetector(speedInput){
    //i have declard some empty values for this variable to ommit the null or undefined values
    let response = "";
    let demerits = "";
    let preresponse = "";

    if(speedInput < 0 || speedInput === null || speedInput === undefined || speedInput === '') // this  cheks if for any null / empty or negative values
    {
        response = "Invalid Speed."; // this is a return value for the function 

    }else if(speedInput >= 0 &&  speedInput <= 70){ // this block will run and output okay when the speed is greater than 0 or below 70 km as its limmit to print okay

        response = "OK"; // this is a return value for the function 

    }else{
        const perPoint = 5; // 5 km = 1 demerits 
         let diff = speedInput - 70; // we are getting a diffrence  between speed  and limit

         //() acts like Math.floor and at this point we are removing the points rounding to an integer after  dividing of the diff and perPoint
         demerits = ~~(diff / perPoint); 
         
         preresponse = (demerits > 12) ? "License suspended: " : "Points: "; /// this tenery checks for the demerits if greater than 12 to either of the response


         response = preresponse + demerits;  // this is a return value for the function     
    }
return response; // this funton has this response as a return based on the condition it has gone from the top
}

console.log(speedDetector(150))