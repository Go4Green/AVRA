	// object pollutant has 3 properties: .type , .value , .quality
	class pollutant{constructor(type,val){
	                                        this.type=type;
	                                        this.val=val;}
											get value(){return this.filtervalue();}
											
											get quality(){return this.calcquality();}
											// some values are wrong and need  to be removed
											filtervalue(){ var filtered=this.val ;
											               if (this.val>900|| this.val==null || this.val=='null'){filtered='-';}
														   return filtered;}
											calcquality() { // quality depends on limit values of each pollutant
											var qual
											var lim=[];
											lim=getlimits(this.type);
													(between(this.value, 0, lim[0]) ) ? qual='Πολύ καλή':
											          
										            between(this.value, lim[0], lim[1])  ? qual='Καλή' : 
													between(this.value, lim[1], lim[2])  ? qual='Μέτρια' :
													between(this.value, lim[2], lim[3] ) ? qual='Κακή'	:
													between(this.value, lim[3], 100000 ) ? qual='Πολύ κακή':  qual="-";
													                      
													
											
											return qual;}
											
                                           }

 
	
	function between(x, min, max) {
    return x >= min && x <= max
    }					                         
