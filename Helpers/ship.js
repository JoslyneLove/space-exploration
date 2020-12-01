function planets() {
        window.open("planets.html","_self");
}

$("#item1").click(function() { 
  $(".grid-item").css("border", "1px solid red");
  $(this).css("border","3px solid yellow");
  localStorage.setItem("shipSel","rocket");
  });
  
$("#item2").click(function() { 
  $(".grid-item").css("border", "1px solid red");
  $(this).css("border","3px solid yellow");
  localStorage.setItem("shipSel","shuttle");
  });
  
$("#item3").click(function() { 
  $(".grid-item").css("border", "1px solid red");
  $(this).css("border","3px solid yellow");
  localStorage.setItem("shipSel","pirate");
  });
  
$("#item4").click(function() { 
  $(".grid-item").css("border", "1px solid red");
  $(this).css("border","3px solid yellow");
  localStorage.setItem("shipSel","fighter");
  });
  
$("#item5").click(function() { 
  $(".grid-item").css("border", "1px solid red");
  $(this).css("border","3px solid yellow");
  localStorage.setItem("shipSel","ufo");
  });
  
$("#item6").click(function() { 
  $(".grid-item").css("border", "1px solid red");
  $(this).css("border","3px solid yellow");
  localStorage.setItem("shipSel","starship");
  });
  
  
