$(document).ready(()=>{

  $('input').mouseenter(()=>{
      $('input').css({border: "2px solid #00C8E7",padding: "8px"});
  });

  $('input').mouseleave(()=>{
      $('input').css({border: "",padding: "4px"});
  });

  $('.flex1 a').mouseenter(function(){
    $(this).css({"background-color": "#00C8E7","font-size":"28px"});
  });

  $('.flex1 a').mouseleave(function(){
    $(this).css({"background-color": "","font-size":"22px"});
  });

  $('button').mouseenter(()=>{
      $('button').css({"background-color": "#00C8E7",color: "white",padding: "6px"});
      $('button').text("HOVERED");
  });

  $('button').mouseleave(()=>{
      $('button').css({"background-color": "white",color: "#00C8E7",padding: "4px"});
      $('button').text("Search");
  });


});
