$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var fNameInput = $("input#fName").val();//looks for the "id person" inside the input html. Then creates a method that sets the inputted value and assigns that to a variable named "person1Input"
    var lNameInput = $("input#lName").val();
    var emailInput = $("input#email").val();
    var track = $("input:radio[name=track]:checked").val();
    var beverage = $("#drink").val();
    var dob = $("#born").val();
    var favoriteColor = $("#color-fav").val();

    $(".fName").text(fNameInput); //this jQuery function selects the "person1 class inside the span tag. Then it runs the text method, which converts the variable to text "
    $(".lName").text(lNameInput);
    $(".email").text(emailInput);
    $(".radio-input").text(track);
    $(".beverage-input").text(beverage);
    $(".date").text(dob);
    $(".color").text(favoriteColor);


    var printMessage = $("#confirm").show();
    //print(printMessage);


    event.preventDefault();
  });

});
