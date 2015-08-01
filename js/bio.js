var bio = {
	"name" : "Damien Bernard",
	"role" : "Web Developper",
	"welcomeMessage" : "Hi, welcome to my portfolio",
	"contacts" : {
		"mobile" : "0787....63",
		"email" : "bernard.damien@gmail.com",
		"github" : "Enterthusiast",
		"twitter" : "Enterthusiast",
		"location" : "Paris, France"
	},
	"skills" : ["HTML", "CSS", "JS", "User oriented", "Organized", "Quick learner"],
	"biopic" : "images/my_picture.jpg",
	"display" : function (_element) {
		if(_element.is($('#header'))) {
			$('#header').prepend(HTMLheaderRole.replace("%data%", bio.role));
			$('#header').prepend(HTMLheaderName.replace("%data%", bio.name));
		}

		if(_element.is($('#header'))) {
			_contactElement = $('#topContacts');
		}
		else if(_element.is($('#footerContacts'))) {
			_contactElement = $('#footerContacts');
		}

		_contactElement.append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		_contactElement.append(HTMLemail.replace("%data%", bio.contacts.email));
		_contactElement.append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		_contactElement.append(HTMLgithub.replace("%data%", bio.contacts.github));
		_contactElement.append(HTMLlocation.replace("%data%", bio.contacts.location));

		if(_element.is($('#header'))) {
			$('#header').append(HTMLbioPic.replace("%data%", bio.biopic));
			$('#header').append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

			if(bio.skills.length > 0) {
				$('#header').append(HTMLskillsStart);
				for (var i = 0; i < bio.skills.length; i++) {
					$('#skills').append(HTMLskills.replace("%data%", bio.skills[i]));
				}
			}
		}
	}
};