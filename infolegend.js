function loadinfolegend(x){ 
///// 1st case: legend for  all pollutants
if (x=='Όλοι οι ρύποι'){
	infolegend.onAdd = function (map) {
    var div2 = L.DomUtil.create('div', 'info legend');
    labels2 = ['<strong>Υπόμνημα </strong>'];
	var categories=['Πολύ καλή', 'Καλή', 'Μέτρια','Κακή','Πολύ κακή'];
    
	
    for (var i = 0; i < categories.length; i++) {

            div2.innerHTML += 
            labels2.push(
                '<i  style="background:' + getColor(categories[i]) + '"></i> ' +
            (categories[i] ? categories[i] : '+'));

        }
        div2.innerHTML = labels2.join('<br>');
    return div2;}
	  infolegend.addTo(map);}
// 2nd case: legend for one pollutant
else{
	map.removeControl(infolegend);
    infolegend.onAdd = function (map) {
    var div3 = L.DomUtil.create('div', 'info legend');
	var unit;
    
		
var categories3;
	var lims=[];
	lims=getlimits(x);
    var a='0-'+lims[0]+'';
	var b=''+lims[0]+'-'+lims[1]+'';
	var c=''+lims[1]+'-'+lims[2]+'';
	var d=''+lims[2]+'-'+lims[3]+'';
	var e='>'+lims[3]+'';
	
	var f='Μη διαθέσιμο';
	unit=getunit(x);
	categories3 = [a,b,c,d,e,f];
	labels3 = ['<strong>Συγκέντρωση '+edittype(x)+' ('+unit+'/m<sup>3</sup>)</strong>'];
    for (var i = 0; i < categories3.length; i++) {

            div3.innerHTML += 
            labels3.push(
                '<i  style="background:' + getColor2(categories3[i],a,b,c,d,e,f) + '"></i> ' +
            (categories3[i] ? categories3[i] : '+'));

        }
        div3.innerHTML = labels3.join('<br>');
    return div3;}
	  infolegend.addTo(map);}
	  }
