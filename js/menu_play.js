/*Author: Nidhi Sharma
Version: 1.0
*/
$(document).ready(function(){
var allTags = document.body.getElementsByTagName('*');
var idNames = {};
for (var tg = 0; tg< allTags.length; tg++) {
    var tag = allTags[tg];
    if (tag.id) {
      var ids = tag.id.split(" ");
	for (var cn = 0; cn < ids.length; cn++){
	  var cName = ids[cn];
	  if (! idNames[cName]) {
	    idNames[cName] = true;
	  }
	}
    }   
}
for (var name in idNames)
{
	var arr=name.split("-");
	 $("#menubar-"+arr[1]).hide("slow");
}


 $(".expand").click(function(){
	var id=this.id;
	var arr=id.split("-");
      $("#menubar-"+arr[1]).slideToggle("slow");
 	}); 
 
	 $(".expand").mouseenter(function(){
     var id=this.id;
	var arr=id.split("-");
      $("#expand-"+arr[1]).css('cursor','pointer');
    });

    $("#buttonmenu").click(function(e){
	e.preventDefault();
        $("#menucontainer").toggle("slow");
    });

      $(".menulink").click(function(e){

        $("#menucontainer").toggle("slow");
    });

});
 



