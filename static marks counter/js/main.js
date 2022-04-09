let urlSheet = 'index.html';

getHTML()
function getHTML(){
    fetch(urlSheet).then(function (response)
    //Fetching Raw data
    {return response.text()}).then(function (html){
        var parser = new DOMParser();
        // Parsing HTML from String
        var document = parser.parseFromString(html,'text/html')
        ExtractingdataFromHtml(document)
    }).catch(function (err){
        console.warn('error',err)
    })}


    function ExtractingdataFromHtml(document){
     //Extracting questions as a HTML Collection
     var collection = document.getElementsByClassName("question-Pnl")
     //converting HTML collection to an Array for simplification
     var arr = Array.from(collection)
     var rightAnswersOfAllQuestions = [];
     var myAnswersOfAllQuestions = [];
     for(let i=0;i<arr.length;i++)
     {
         //right answers
         rightAnswersOfAllQuestions[i] = arr[i].getElementsByClassName("rightAns");
         var ee = Array.from(rightAnswersOfAllQuestions[i]);
         var x=ee[0].lastChild.nodeValue;
         if(x!=null)
         {
            rightAnswersOfAllQuestions[i]=x;
         }
         else
         {
            rightAnswersOfAllQuestions[i]=ee[0].lastChild.previousSibling.nodeValue.charAt(0);
         }
         // choosen  answers
         var  myAnswers = arr[i].getElementsByClassName("bold")
         let responseArr = Array.from(myAnswers)
         let len = responseArr.length - 1
         myAnswersOfAllQuestions[i] = responseArr[len].innerText.charAt(0)
     
     }
     let i=0;
     let rightAnswers = []
     while(i<100)
     {
     rightAnswers[i] = rightAnswersOfAllQuestions[i].charAt(0)
     i++
     }
     i=0;
     let choosenOptions = []
    
     while(i<100)
     {
     choosenOptions[i] = myAnswersOfAllQuestions[i].charAt(0)
     i++
     }
     //MarksCalculation
     let right=0, wrong=0,ignore=0, mark=0
     for(i=0;i<100;i++)
     {
         if(rightAnswers[i]==choosenOptions[i])
         {
             right++;
         }
         else if(choosenOptions[i]==" ")
         {
             ignore++
         }
         else   {
             wrong++
         }
     }
     mark =right - (wrong*0.25) 
     console.log("Raw marks: "+ mark + "\nRight: "+(100-(wrong+ignore)) + "\nWrong: "+wrong +"\nNot answered: "+ignore)
     const scores = document.getElementsByClassName("score")
    //  console.log(scores)
    var arrData = Array.from(scores)
    arrData[0].innerText = mark
    arrData[1].innerText = right
    arrData[2].innerText = wrong
    arrData[3].innerText=ignore
    }

