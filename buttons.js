function PrevButtonClick(){ 
  //oldvalue=document.getElementById('myRange').value;
  	oldvalue=parseInt($("#myRange").val());
if (oldvalue > -240){
	newvalue=oldvalue-1;
    $("#myRange").val(newvalue);
	
	loaddata();
}
else{}
}

function NextButtonClick(){ 
 
   
	oldvalue=parseInt($("#myRange").val());
	newvalue=oldvalue+1;
    $("#myRange").val(newvalue);
	loaddata();


}