
var s = skrollr.init({
	render: function(data) {
	  //Log the current scroll position.
	  $('#info').text(data.curTop);
	}
});