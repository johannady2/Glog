$(document).ready(function(){
   
    var LS1 = "testing1";
    var LS2 = "testing2";
    
    window.localStorage.setItem("LS1name", LS1);
    window.localStorage["LS2name"] = LS2;
    
    $('.localstoragetest').html(window.localStorage.getItem("LS1name") + "<br>" + window.localStorage["LS2name"] + "<br>");
 
    
});