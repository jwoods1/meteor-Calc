Template.home.rendered = ->

  #SEO Page Title & Description
  document.title = "Calculator"
  $("<meta>", { name: "description", content: "Page description for My New Meteor App" }).appendTo "head"
