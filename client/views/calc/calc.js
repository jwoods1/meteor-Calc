Template.calc.events({
  'click .calc-btn': function(event,template) {
    var val = $(event.currentTarget).text();
    if($(".display").attr("value") == 0){
      $(".display").attr("value", val);
    }else{
      var displayVal = $(".display").attr("value");
      var multiVal = displayVal+=val;
      $(".display").attr("value", multiVal);
    }
  },
  'click .clear': function(event,template) {
    $(".display").attr("value","0");
  },
  'click .equals': function(event,template) {
    var equals = eval($(".display").attr("value"));
    $(".display").attr("value",equals);
  }
});