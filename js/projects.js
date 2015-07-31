var projects = {
	"projects" : [
		{
			"title" : "Wargame - Red Dragon",
			"dates" : "2014",
			"description" : "Real Time Strategy Game",
			"images" : [""]
		},
		{
			"title" : "Naughty Boy",
			"dates" : "2013",
			"description" : "Shooter",
			"images" : [""]
		},
		{
			"title" : "House of the Dead: Overkill - The Lost Reels",
			"dates" : "2013",
			"description" : "Shooter",
			"images" : [""]
		},
		{
			"title" : "Rakoo's Adventure",
			"dates" : "2013",
			"description" : "Runner Game",
			"images" : [""]
		},
		{
			"title" : "Assassin's Creed 3",
			"dates" : "2012",
			"description" : "Action & Adventure Game",
			"images" : [""]
		},
		{
			"title" : "The Black Eyed Peas Experience",
			"dates" : "2011",
			"description" : "Dance Game",
			"images" : [""]
		},
		{
			"title" : "Driver: Sanf Francisco",
			"dates" : "2011",
			"description" : "Driving Game",
			"images" : [""]
		},
		{
			"title" : "Michael Jackson: The Experience",
			"dates" : "2010",
			"description" : "Dance Game",
			"images" : [""]
		},
		{
			"title" : "Just Dance 2",
			"dates" : "2010",
			"description" : "Dance Game",
			"images" : [""]
		},
		{
			"title" : "Just Dance",
			"dates" : "2009",
			"description" : "Dance Game",
			"images" : [""]
		},
		{
			"title" : "The Cursed Crusade",
			"dates" : "2008",
			"description" : "Action Game",
			"images" : [""]
		},
		{
			"title" : "Cocoto Festival",
			"dates" : "2008",
			"description" : "Shooter Game",
			"images" : [""]
		},
		{
			"title" : "Little Folk of Faery",
			"dates" : "2008",
			"description" : "Casual Adventure & Management Game",
			"images" : [""]
		}
	],
	"display" : function () {
		for (project in projects.projects) {
			$('#projects').append(HTMLprojectStart);
			$('.project-entry:last').append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
			$('.project-entry:last').append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
			$('.project-entry:last').append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
			for (image in projects.projects[project].images) {
				$('.project-entry:last').append(HTMLprojectImage.replace("%data%", projects.projects[project].images));
			}
		}
    }
};