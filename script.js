function anichange (objName) {
  if ( $(objName).css('display') == 'none' ) {
    $(objName).animate({height: 'show'}, 400);
  } else {
    $(objName).animate({height: 'hide'}, 200);
  }
}

function hell1 (objName2) {
	console.log('event!');
	var w_code = 'design2';
	$jsonurl = '/upl/'+w_code+'/widget/manifest.json';
	$.getJSON( $jsonurl, function( data ) {
		//str.charAt(0)
		//var arrLength = [];
		//for (var i = 0; i < arr.length; i++) {
			
		vers2101 = data.widget.version;	
		console.log('event render:'+vers2101);
		console.log('event name:'+objName2);
	});
}	

define(['jquery'], function($){
    var CustomWidget = function () {
    	var self = this; 	
		var arrfieldid = ['861122','861124'];
		var blok1name = 'Объединенные поля';
		var w_code = 'design2';
		this.callbacks = {
			render: function(){
				console.log('render'); 
				//w_code = self.get_settings().widget_code; //в данном случае w_code='new-widget'
				
				var template = '<div><h1>Design</h1>'+					
                    '<center><button class="button-input" id="designhtml'+w_code+'">Click</button></center>'+					
					'<center><button class="button-input" id="designhtml2'+w_code+'">Events</button></center>'+					
                    '<div id="parsehtml'+w_code+'"></div>'+
                    '</div>'+
					'<link type="text/css" rel="stylesheet" href="/upl/'+w_code+'/widget/style.css" >';

                self.render_template({
                    caption:{
                        class_name:'js-ac-caption1',
                        html:''
                    },
                    body:'',
                    render :  template
                });
				$jsonurl = '/upl/'+w_code+'/widget/manifest.json';
				//$.getJSON( $jsonurl, function( data ) {
				//	vers1901 = data.widget.version;
				//	$('#parsehtml'+w_code).html('v.'+vers1901);
				//	console.log('Design2 render:'+vers1901);
				//});
				return true;
			},
			init: function(){
				console.log('Design2 init');
				//====Init================================
				
					
				//====Init================================
				return true;
			},
			bind_actions: function(){
				console.log('Design2 bind');
				//w_code = self.get_settings().widget_code; //в данном случае w_code='new-widget'
				$('#designhtml'+w_code).on('click', function(){					
					//self.callbacks.getData();
					console.log('Start-OnClick-design2');
					console.log(JSON.stringify(self.get_settings()));
					pformat=self.get_settings().phoneformat;
					//data-type="phone"
					$('[data-type="phone"]').each(function( ) {
						console.log('found:'+this.name);
						if (typeof(this.name)=='undefined') {
							
						} else {
							this.setAttribute('onBlur', 'hell1("'+this.name+'");');							
							console.log('installed:'+this.name);
							(this).blur(function(){
								console.log('event!');
							});
						}
						
					});
					
					
				
					console.log('Finish-OnClick-design2');

				});
				
				$('#designhtml2'+w_code).on('click', function(){	
					console.log('Start-OnClick-design2.2');
					$('[data-type="phone"]').each(function( ) {
						if (typeof(this.name)=='undefined') {
							
						} else {
							var out =[];
							for(i in $(this).data().events){
								out.push(i);
							}
							
							console.log(this.name +'events'+out.join(', '));
						}	
					});
						//$.eventsList('p')
				});

				//console.log(self.system().area);


				return true;
			},
			settings: function(){

				return true;
			},
			onSave: function(){

				return true;
			},
			destroy: function(){

			},
			contacts: {
					//select contacts in list and clicked on widget name
					selected: function(){

					}
				},
			leads: {
					//select leads in list and clicked on widget name
					selected: function(){

					}
				},
			tasks: {
					//select taks in list and clicked on widget name
					selected: function(){

					}
				},
			getData: function(){
					console.log('StartGetData');					
					
					console.log('FinishGetData');
			}
		};
		return this;
    };


return CustomWidget;
});