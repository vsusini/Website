//alert("This is working!");
//var ageAsString = prompt("What is your age?", "Write age here!");
//var age = Number(ageAsString);


(function($) {

    $(document).ready(function(){
      $('.toggle-nav').on('click', function() {
        toggleNavigation($(this), $('.nav-pane'));
        changeLetters($(this));
      });
  
      function toggleNavigation(btn, nav) {
        btn.toggleClass('open');
        nav.toggleClass('open');

      }
  
      function changeLetters(btn) {
        var m = $('.toggle-nav span.m');
        var e = $('.toggle-nav span.e');
        var n = $('.toggle-nav span.n');
        var u = $('.toggle-nav span.u');
  
        e.toggleClass('btn-close');
  
        if(btn.hasClass('open'))
        {
          m.text("E");
          m.css("color","white");
          m.css("top","-0.3vh");
          n.text("I");
          n.css("color","white");
          n.css("top","-0.3vh");
          u.text("T");
          u.css("color","white");
          u.css("top","-0.3vh");
        }
        else
        {
          m.text("M");
          m.css("color","black");
          m.css("top","0vh");
          n.text("N");
          n.css("color","black");
          n.css("top","0.vh");
          u.text("U");
          u.css("color","black");
          u.css("top","0vh");
        }
      }
    });
  
  })(jQuery);




/*
//SWITCH STATEMENT
switch (animal) {
    case "cat":
        alert("meow");
        break;
    case "dog":
        alert("woof");
        break;
    case "hose":
        alert("ney bitch");
        break;
    default:
        alert("idk this animal");
        break;
}
*/

//FOR STATEMENT
/*
for (var counter = 1; counter < age; counter++){
    string += "Happy Birthday \n";
    if (counter % 7 == 0) {
        break;
    }
}
alert(string);
*/

//WHILE STATEMENTS
/*
while (age > 0) {
    string += "Happy Birthday \n";
    // or string = string + "hpd \n"
    age = age - 1;
    //or age -= 1;
}
alert(string);
*/
// or var age = Number(prompt("What is your age? ",""));
//FOR STATEMENTS
/*
if (age < 40) {
    alert("Your young af");
} else if (age == 40) {
    alert("congrats your 40!")
    
} else {
    alert("Dam your old");
}
*/
//alert("Thank You!");