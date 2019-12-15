function loaddata() {
	    /////// /////////////////////////
	        layerGroup.clearLayers();
			if (document.getElementById('myRange') != null) {   //get the value of the datetime slider
			num=document.getElementById('myRange').value;}
			else num=0;
			downloadUrl(num, function(data) {
			
			var xml = data.responseXML;  //xml parsing
			var markers = xml.documentElement.getElementsByTagName('z:row');
		  
			if (document.getElementById('Pollutants') != null) { // check if a specific pollutant has been selected
			var x = document.getElementById('Pollutants').value;}
			else x='Όλοι οι ρύποι';
		/////////////////////////////	
			
		//1st case: all pollutants are going to be displayed (end on line 74)
	        if( x=='Όλοι οι ρύποι'){ 
			map.removeControl(infolegend);
		    Array.prototype.forEach.call(markers, function(markerElem) {
           
			 datetime=markerElem.getAttribute('datetime');
			 datetime = datetime.substring(0, datetime.length - 3);
             // datetime=formatDate(datetime) ;          

			var station_id = markerElem.getAttribute('station_id');
			var station_name = getstation(station_id);
		
			
		    var latitude = markerElem.getAttribute('latitude');
		    var longitude = markerElem.getAttribute('longitude');
			
			var so2 = new pollutant()
			so2.type = 'SO2'
			so2.val=markerElem.getAttribute('SO2');
			colourso2=getColor(so2.quality);
			var co = new pollutant()
			co.type='CO';
			co.val=markerElem.getAttribute('CO');
			co.val=Math.round( co.val* 10) / 10;
			colourco=getColor(co.quality);
			var no2 = new pollutant();
			no2.type='NO2';
			no2.val=markerElem.getAttribute('NO2');
			colourno2=getColor(no2.quality);
			var o3 = new pollutant();
			o3.type='O3';
			o3.val=markerElem.getAttribute('O3');
			colouro3=getColor(o3.quality);
			var pm2 = new pollutant();
			pm2.type='PM25'
			pm2.val=markerElem.getAttribute('PM25');
			colourpm2=getColor(pm2.quality);
			var pm10 = new pollutant();
			pm10.type='PM10';
			pm10.val=markerElem.getAttribute('PM10');
			colourpm10=getColor(pm10.quality);
			
			
		var mark=L.marker([latitude, longitude]).addTo(layerGroup);
		var tempstring=' <h>'+station_name+'</h>'+
		               ' <table> '+
		               ' <tr> <th>Ρύπος</th> <th>Συγκέντρωση </th> <th> Ποιότητα </tr> '+
		               ' <tr> <td>CO</td> <td>'+editvalue('CO',co.value)+'</td><td><div id="co" class="circle"  style="background-color:'+colourco+';"></div></td> </tr> '+
					   ' <tr> <td>NO<sub>2</sub></td> <td>'+editvalue('NO2',no2.value)+'</td><td><div id=no2" class="circle"  style="background-color:'+colourno2+';"></div></td> </tr> '+
					   ' <tr> <td>O<sub>3</sub></td> <td>'+editvalue('O3',o3.value)+'</td><td><div id="o3" class="circle" style="background-color:'+colouro3+' ;"</div></td> </tr>' +
					   ' <tr> <td>SO<sub>2</sub></td> <td>'+editvalue('SO2',so2.value)+'</td><td><div id ="so2" class="circle" style="background-color:'+colourso2+' ;"</div></td </tr> '+
					   ' <tr><td>PM<sub>2.5</sub></td> <td>'+editvalue('PM2',pm2.value)+'</td><td><div id="pm2" class="circle"style="background-color:'+colourpm2+';"</div></td </tr>'+
					   ' <tr> <td>PM<sub>10</sub></td> <td>'+editvalue('PM10',pm10.value)+'</td><td><div id="pm10" class="circle"style="background-color:'+colourpm10+';"</div></td </tr>'+
		               ' </table>';
		var popup1=tempstring;
		
		var popup1options={ 'className' : 'popupCustom'}
		mark.bindPopup(popup1,popup1options);
		})   //end for each1
		$("#date").text(''+datetime+'');
		  loadinfolegend(x);
		
$(window).on("resize", function() {
    $("#map").height($(window).height()).width($(window).width());
    map.invalidateSize();
}).trigger("resize");
      
  
		    //end if ( x=='Όλοι οι ρύποι'  )                 
			}
			
//2nd case: only the chosen pollutant is going to be displayed
	 else{  
		 
	       Array.prototype.forEach.call(markers, function(markerElem) {
			var station_id = markerElem.getAttribute('station_id');
			
			 datetime=markerElem.getAttribute('datetime');
			 datetime = datetime.substring(0, datetime.length - 3);
			//var station_name=markerElem.getAttribute('station_name');
			var station_name=getstation(station_id);
			
			var latitude = markerElem.getAttribute('latitude');
			var longitude = markerElem.getAttribute('longitude');
			var selected=new pollutant();
			selected.val=markerElem.getAttribute(x);
			selected.type = x;
			var editedtype;
			editedtype=edittype(selected.type);
			
			var y=selected.quality;
		    var unit ;
			if (x=='CO'){unit="mg/m<sup>3</sup>";} else{ unit="μg/m<sup>3</sup>";}
			var clr= getColor3(y);
			var circle = L.circle([latitude, longitude], {
              color: 'white' ,
          fillColor: clr,
             fillOpacity: 0.75,  //0.5
             radius: 500.0
      }).bindPopup(
		  '<h>'+station_name+'</h> <table> <tr> <th>Ρύπος</th> <th>Συγκέντρωση ('+unit+')</th>  </tr>  <tr> <td>'+editedtype+'</td> <td>'+selected.value+'</td> </tr>  </table>').addTo(layerGroup);  
	 
	})
	  loadinfolegend(x);
      $("#date").text(''+datetime+'');
     //end else
	
    }
       //end downloadurl()
		})
		 
		
    
    //end loaddata()
	}

