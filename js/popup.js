$(function () {

	$("#dialog").overlay({
		close : ".btn-box-close",
		closeOnClick: false,
		closeOnEsc: true,
		closeSpeed: 'fast',
		effect: 'default',
		fixed: false,
		left : "center",
		top : "center",
		mask : {
			color : '#333',
			loadSpeed : 200,
			opacity : 0.2
		},
		speed: 'normal', // slow,normal,fast
		target: null, // target element to be overlayed. by default taken from [rel]
		oneInstance: true,
		load : true, // automatic load
		onBeforeLoad:function(e){
				// do something
			},
			onLoad:function(e){
				// do something
			},
			onBeforeClose:function(e){
				/* if(!window.confirm("确定关闭！"))
				return false; */
			},
			onClose:function(e){
				// do something
			}
		});
});