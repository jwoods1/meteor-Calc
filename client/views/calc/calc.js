/* Uses meteor template to listen for inputs from calc buttons */
Template.calc.events({
  //all number and symbols
  'click .calc-btn': function(event,template) {
    var val = $(event.currentTarget).text();
    if($(".display").attr("value") == 0){
      $(".display").attr("value", val);
    }else{
      var displayVal = $(".display").attr("value");
      var multiVal = displayVal+=val;
      $(".display").attr("value", multiVal);
    }
  },// clear button to reset value
  'click .clear': function(event,template) {
    $(".display").attr("value","0");
  },// eval the value attr of the display ! 
  'click .equals': function(event,template) {
    var equals = eval($(".display").attr("value"));
    $(".display").attr("value",equals);
  }
});