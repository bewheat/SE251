window.addEventListener("load", main);

function main(e)
{
    //Array to hold all of the students
     var students =[];

     //Gather all the tags being used 
     var fInput = document.querySelector("#name-f");
     var lInput = document.querySelector("#name-l");
     //Array of number input tags
     var gInput = document.querySelectorAll('input[type="number"]');
     var submit = document.querySelector('input[type="button"]');

     var aside = document.querySelector('aside');
     //Array of p tags that will display the averages
     var avg = document.querySelectorAll('#avg div p');

     //console.log(fInput, lInput, gInput, submit, aside, avg);
    
     //Makes submit button clickable
     submit.addEventListener("click", add);

     //called when submit is clicked
     function add(e)
     {
        //adds student objeccts to the students array. 
        //.push the same as .Add in C#
        //the "this" operator refers to the object that is calling the function.
        //For example if students[0] calls the function then this = students[0] 
        students.push(
            {
                name:{
                        f:fInput.value, 
                        l:lInput.value
                    },
                labs:[
                    Number(gInput[0].value),
                    Number(gInput[1].value),
                    Number(gInput[2].value),
                    Number(gInput[3].value),
                    Number(gInput[4].value)
                ],
                finalAvg:function()
                {
                    return (this.labs[0]+this.labs[1]+this.labs[2]+this.labs[3]+this.labs[4])/this.labs.length;
                },
                finalLetter:function(finalAvg)
                {
                    if(finalAvg > 89)
                    {
                        return "A";
                    }
                    else if(finalAvg > 79)
                    {
                        return "B";
                    }
                    else if(finalAvg > 69)
                    {
                        return "C";
                    }
                    else if(finalAvg > 64)
                    {
                        return "D";
                    }
                    else
                    {
                        return "F";
                    }
                }
            }
        );

            console.log(students);

            //Loops through each lab
            for(let j=0; j < avg.length; j++)
            {
                let tempAvg = 0;
                //adds grade from each students lab together 
                for(let i=0; i < students.length; i++)
                {
                    tempAvg += Number(students[i].labs[j]);
                    console.log(tempAvg)
                }
                //puts the average grade in the corresponding <p> tag
                avg[j].textContent = tempAvg/students.length;
            }

            //Overwrites the aside tag content and replaces it with links for each student
            //----------------------------------------------------------------------------
            var str = "";
            for(let i=0; i < students.length; i++)
            {
                str +=`<a href="#">${students[i].name.f} ${students[i].name.l}</a><br>`;
            }
            aside.innerHTML = str;
            //-----------------------------------------------------------------------------

            //gets an array of <a> tags within the <aside> tag
            var a = document.querySelectorAll("aside a");
            
            //Loops through each <a> tag
            for(let i=0; i < students.length; i++)
            {
                //Makes each <a> tag clickable and calls a function
                a[i].addEventListener("click", function(e){
                    //stops the a from  linking to another page
                    e.preventDefault();
                   
                    //Get the final Average and Letter for the selected student
                    var finalAvg = students[i].finalAvg();
                    var finalLetter = students[i].finalLetter(finalAvg);
                   
                    //display student grades in an alert box
                    alert(`${this.innerHTML} \n ${finalAvg} : ${finalLetter}`);
                });
            }


     }//End of Add Function
}//End of init function

