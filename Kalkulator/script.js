var selectedAthlete;
var input;
var okning;

/*Sorting function that sorts the array dictionaries*/
Array.prototype.sortAttr = function(attr,reverse) {
  var sorter = function(a,b) {
    var aa = a[attr];
    var bb = b[attr];
    if(aa+0==aa && bb+0==bb) return bb-aa; // numbers
    else return aa.localeCompare(bb); // strings
  }
  this.sort(function(a,b) {
    var result = sorter(a,b);
    if(reverse) result*= -1;
    return result;
  });
};

input = document.getElementById("myInput").value;

function myFunction(increment) {
  // gA.sortAttr("percentage");
  input = document.getElementById("myInput").value;
  
  for (var i=0; i < gA.length;i++) {
    if (gA[i].name.toLowerCase() == input.toLowerCase()) {
      gA[i].percentage = gA[i].percentage + increment;
      document.getElementById("finn-navn").innerHTML = "Hei " + gA[i].name + ", du har " + gA[i].percentage + "%";
      console.log("We've found " + gA[i].name + " ,you've got " + gA[i].percentage + "%");
      
      for (var i=0; i < 10; i++) {
        gA.sortAttr("percentage");
        
        var x = document.getElementById("top-" + i);
        // var y = document.getElementById("leaderboard");
        x.innerHTML = gA[i].name + " " + gA[i].percentage;
        // y.innerHTML = gA[i].percentage;
        
      }
      
    }
  }
  
  document.getElementById("myInput").value = null;
  
  for (var i=0; i < 10; i++) {
    gA.sortAttr("percentage");
    
    // var y = document.getElementById("leaderboard");
    var x = document.getElementById("top-" + i);
    x.innerHTML = gA[i].name + " " + gA[i].percentage + "%";
    // y.innerHTML = gA[i].percentage;
    
  }
}

// Autocomplete Code
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {

      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) {document.getElementById("myInput").className = "input-closed"; return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/

      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");

          document.getElementById("myInput").className = "input-open";
          // console.log(document.getElementById("myInput").className);

          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();

              document.getElementById("myInput").className = "input-closed";

          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the athleetes at Drammen Turn:*/
var athletes = ["Alimalik","Anders","Ann Sofie","Eivind","Fie","Frei","Ida Sofie Dybfest","Ingrid W. Leid","Jacob Hauglund","Jacob Lindseth","Jesper","Kristian","Malin Asheim","Malin H Rygh","Marthine","Miriam","Nokve","Nora","Oline","Oliver","Othilia","Sander","Sara","Wilma"];
// var athletes = ["Alimalik","Anders","Ann","Eivind","Fie","Frei","Ida"];

// Numbering system, Ali starts off as [0], Anders [1] and so on.

function person(name) {
  this.name = name;
  this.percentage = 0; /*Standard starting point for everyone*/

  this.output = function output() {
    console.log(this.name, this.percentage);
    return(this.name + this.percentage);
  }
}

var gA = new Array;

for (var i=0;i < athletes.length;i++) {
  console.log(athletes[i]);

  var names = athletes[i];
  var a = new person(names);
  gA.push(a);
}

for (var i=0; i < gA.length;i++) {
  if (gA[i].name == input) {
    console.log("We've found " + gA[i].name);
  }
}


/*Leaderboard loop to find the top 10 athletes by percentage*/
// for (var i=1; i <= 10; i++) {
//   console.log("top-" + i);
//   var x = document.getElementById("top-" + i);
//   x.innerHTML = gA[i].name + gA[i].percentage;
  
//   console.log(x.text);
// }


// var athletes = ["Alimalik","Anders","Ann","Eivind","Fie","Frei","Ida"];
//
// function person(name) {
//   this.name = name;
//   this.percentage = 0; /*Standard starting point for everyone*/
//
//   this.output = function output() {
//     console.log(this.name, this.percentage);
//     return(this.name + this.percentage);
//   }
// }
//
// var gA = new Array;
//
// for (var i=0;i < athletes.length;i++) {
//   console.log(athletes[i]);
//
//   var names = athletes[i];
//   var a = new person(names);
//   gA.push(a);
// }
//
// var input = "Anders";
//
// for (var i=0; i < gA.length;i++) {
//   if (gA[i].name == input) {
//     console.log("We've found " + gA[i].name);
//   }
// }
