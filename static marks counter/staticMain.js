var collection = document.getElementsByClassName("question-Pnl")
     //converting HTML collection to an Array for simplification
     var arr = Array.from(collection)
    let question = arr[0].getElementsByClassName("bold")
    console.log(question[0].firstChild.textContent);
    console.log(question[0].nextElementSibling.firstChild.textContent);
    let wrng = arr[0].getElementsByClassName("wrngAns")
    console.log(wrng[0].lastChild.textContent);
    console.log(wrng[1].lastChild.textContent);
    console.log(wrng[2].lastChild.textContent);
    getHTML()
    function getHTML(){
        fetch("data.html").then(function (response)
        //Fetching Raw data
        {return response.text()}).then(function (html){
            var parser = new DOMParser();
            // Parsing HTML from String
            var doc = parser.parseFromString(html,'text/html')
            console.log(doc);
            var d = document.createElement("p")
            var t = document.createTextNode("its working")
            d.appendChild(t)
            var el = doc.getElementById("myID")
            console.log(el);
            el.appendChild(d)
            }).catch(function (err){
            console.warn('error',err)
        })}
    //  var rightAnswersOfAllQuestions = [];
    //  var myAnswersOfAllQuestions = [];
    //  for(let i=0;i<arr.length;i++)
    //  {
    //      //right answers
    //      rightAnswersOfAllQuestions[i] = arr[i].getElementsByClassName("rightAns");
    //      var ee = Array.from(rightAnswersOfAllQuestions[i]);
    //      var x=ee[0].lastChild.nodeValue;
    //      if(x!=null)
    //      {
    //         rightAnswersOfAllQuestions[i]=x;
    //      }
    //      else
    //      {
    //         rightAnswersOfAllQuestions[i]=ee[0].lastChild.previousSibling.nodeValue.charAt(0);
    //      }
    //      // choosen  answers
    //      var  myAnswers = arr[i].getElementsByClassName("bold")
    //      let responseArr = Array.from(myAnswers)
    //      let len = responseArr.length - 1
    //      myAnswersOfAllQuestions[i] = responseArr[len].innerText.charAt(0)
     
    //  }
    //  let i=0;
    //  let rightAnswers = []
    //  while(i<100)
    //  {
    //  rightAnswers[i] = rightAnswersOfAllQuestions[i].charAt(0)
    //  i++
    //  }
    //  i=0;
    //  let choosenOptions = []
    
    //  while(i<100)
    //  {
    //  choosenOptions[i] = myAnswersOfAllQuestions[i].charAt(0)
    //  i++
    //  }
    //  console.log(rightAnswers);
    //  console.log(choosenOptions);
    //  //MarksCalculation
    //  let right=0, wrong=0,ignore=0, mark=0
    //  for(i=0;i<100;i++)
    //  {
    //      if(rightAnswers[i]==choosenOptions[i])
    //      {
    //          right++;
    //      }
    //      else if(choosenOptions[i]=="-")
    //      {
    //          ignore++
    //      }
    //      else   {
    //          wrong++
    //      }
    //  }
    //  mark =right - (wrong*0.25) 
    //  console.log("Raw marks: "+ mark + "\nRight: "+(100-(wrong+ignore)) + "\nWrong: "+wrong +"\nNot answered: "+ignore)