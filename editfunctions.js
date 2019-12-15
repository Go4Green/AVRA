	
	
	//get names of stations
	function getstation(x){
	return x==1 ?  'ΠΑΤΗΣΙΩΝ':
	 x==2 ? 'ΠΕΙΡΑΙΑΣ':
	 x==3 ?  'ΑΘΗΝΑΣ':
	 x==4 ? 'ΓΕΩΠΟΝΙΚΗ':
	 x==5 ? 'ΝΕΑ ΣΜΥΡΝΗ':
	 x == 6 ?  'ΛΙΟΣΙΑ':
	 x == 7 ?  'ΜΑΡΟΥΣΙ':
	 x == 8 ?  'ΠΕΡΙΣΤΕΡΙ':
	 x == 9 ?  'ΑΡΙΣΤΟΤΕΛΟΥΣ':
	 x == 10 ?  'ΛΥΚΟΒΡΥΣΗ':
	 x == 14 ?  'ΘΡΑΚΟΜΕΚΕΔΟΝΕΣ':
	 x == 23 ?  'ΑΓ_ΠΑΡΑΣΚΕΥΗ':
	 x == 24 ? 'ΕΛΕΥΣΙΝΑ':
	          'ΚΟΡΩΠΙ';}
	 // colors for the initial legend and quality circles displayed on the popup table
	function getColor(d) {
        return d === 'Πολύ καλή'  ? "#87CEFA" :
               d === 'Καλή'  ? "#4daf4a" :
               d === 'Μέτρια' ? "#b3b300" :
               d === 'Κακή' ? "#ff4d4d" :
			   d === 'Πολύ κακή' ? "#800000" :
                            "#FFFFFF";
    }
	
	// colors for the circles on the map when a pollutant is selected
	function getColor3(d) {
        return d === 'Πολύ καλή'  ? "#006600" :
               d === 'Καλή'  ? "#2eb82e" :
               d === 'Μέτρια' ? "#ffcc00" :
               d === 'Κακή' ? "#ff4d4d" :
			   d === 'Πολύ κακή' ? "#990000" :
                            "#808080";
    }
	// colors for the legends of each pollutant
	 function getColor2(x,a,b,c,d,e,f){
	   return x === a ? "#006600" :
               x === b  ? "#2eb82e" :
               x === c ? "#ffcc00" :
               x === d ? "#ff3300" :
			   x === e ? "#990000" :
                            "#808080";
					  
} 

// limit values for each pollutant 
function getlimits(pollutant){
	
	pollutant=='CO' ? limits=[5,10,25,50]:
	pollutant=='NO2' ? limits=[40,100,200,400]:
	pollutant=='O3' ? limits=[80,120,180,240]:
	pollutant=='SO2' ? limits=[100,200,350,500]:
	pollutant=='PM10' ? limits=[35,60,90,180]:
	                  limits=[15,30,40,90]; //the last line is PM2.5
	return(limits);}

// units for each pollutant
function getunit(type){type=='CO' ? unit='mg':
                                    unit='μg';
									return unit;}
	

	

// adding subscripts on pollutants names
function edittype(x){if (x=="SO2"){ return('SO<sub>2</sub>');}
	                      else if (x=="NO2"){ return('NO<sub>2</sub>');}
						  else if (x=="O3"){ return('O<sub>3</sub>');}
						  else if (x=="PM2.5"){ return('PM<sub>2.5</sub>');}
						  else if (x=="PM10"){ return('PM<sub>10</sub>');}
						  else return(x);}

//adding units with superscripts  for the values displayed on the popup table
function editvalue(type,value){if (value=="-") {return value}
                                 	else{if (type=="CO") {return  (value+" mg/m<sup>3</sup>");} else {return (value+" μg/m<sup>3</sup>");}}
							}
function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  
  
  
  var strTime = hours + ':' + minutes 
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}


