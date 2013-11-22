/**
*** TEMPLATES
**/
Template.messages.messages = function () {
  return Messages.find({}, { sort: { time: -1 }});
}

Template.input.events = {
	'keydown input#message' : function (event) {
		if(event.which == 13) { // KEY 13 IS THE ENTER KEY
			if(Meteor.user())
				var name = Meteor.user().profile.name;
			else
				var name = 'Anonymous';
			var message = document.getElementById('message');

			if (message.value != '') {
				Messages.insert( {
					name: name,
					message : message.value,
					time : Date.now(),
				});

				//SET THE INPUT BACK TO NULL
				document.getElementById('message').value = '';
				message.value = '';
			}
		}
	}
}