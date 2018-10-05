users = [
"Billy Chiu",
"Matt Vanegas",
"Irene Nam",
"Raymond Li",
"Arsalaan Ansari"
]

comments = [
"Guys the trainees are too smart",
"How do we keep them busy?",
"Let's make them do learnyounode for three meetings",
"Yuh yeet",
"You bum"
]

$(document).ready(function(){
	$("#root").append(
		'<h1 class="logo" class"text">facebook</h1>\
			<br><br>\
			<div class="post">\
				<div>\
					<img class="bigimg" src="https://i.ytimg.com/vi/5iGE_wIDOTk/maxresdefault.jpg"/>\
				</div>\
				<div class="status">\
					<h5 class="text" id="name">' + users[0] + '</h5>\
					<p style="font-size: 12px;" class="text">' + comments[0] + '</p>\
					<div>\
						<p class="text" id="timestamp"">15 minutes ago <span id="clickable">&bull; Like &bull; Comment</span></p>\
						<!-- <p class="text" id="clickable" > Like &bull; Comment</p> -->\
					</div>\
				</div>\
			</div>'
	)
	$("#root").append(
		'<div class="commentthread"></div>'
	)
	for(var i = 1; i < users.length; i++){
		$(".commentthread").append(
			'<div class="post" id="comment">\
				<div>\
					<img class="smallimg" src="http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg"/>\
				</div>\
				<div>\
					<h5 class="text" id="name">' + users[i] + '</h5>\
					<p style="font-size: 12px;" class="text">' + comments[i] + '</p>\
					<p class="text" id="timestamp"">15 minutes ago<span id="clickable">&bull; Flag</span></p>\
				</div>\
			</div>'
		)
	}	
});