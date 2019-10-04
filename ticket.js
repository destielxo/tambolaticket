function generate_ticket() {

  var body = document.getElementsByTagName("body")[0];

  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var answers = ["ans1", "ans2", "ans3", "ans4", "ans5", "ans6", "ans7", "ans8", "ans9", "ans10", "ans11", "ans12", "ans13", "ans14", "ans15"];

  answers = shuffle(answers);
  var k = 0;
  var a = 0;


  for (var i = 0; i < 3; i++) {

    var row = document.createElement("tr");

    for (var j = 0; j < 5; j++) {

      var cell = document.createElement("td");
      //cell.setAttribute("id", "cell" + (a++));
      
      var cellText = document.createTextNode(answers[k++]);
      cell.appendChild(cellText);
      row.appendChild(cell);
      cellText.setAttribute('onclick', function1(cell)());
    }


    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");

  document.getElementById("btn").disabled = true;



}



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function function1(cell1)
  { alert('click');
   cell1.style.backgroundColor = "red" ; 
}






