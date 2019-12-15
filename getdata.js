function downloadUrl(number,callback) {


		     var request = window.ActiveXObject ?
			 new ActiveXObject('Microsoft.XMLHTTP') :
			 new XMLHttpRequest;

		 request.onreadystatechange = function() {
		   if (request.readyState == 4) {
			 request.onreadystatechange = doNothing;
			 callback(request, request.status);
		   }
		 };
                             
		 request.open('GET', "http://84.205.254.113/getdata.aspx?q="+number, true);
                                    
                                
		 request.send();
		}
		function doNothing() {}