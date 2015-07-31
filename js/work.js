var work = {
	"jobs" : [
		{
			"employer" : "Tap4Fun",
			"title" : "Game Designer",
			"location" : "Paris, France",
			"dates" : "10/2014 - now",
			"description" : "Design the game mechanics and UIs"
		},
		{
			"employer" : "Novaquark",
			"title" : "Lead Game Designer",
			"location" : "Paris, France",
			"dates" : "04/20014 - 09/2014",
			"description" : "Design the game mechanics"
		},
		{
			"employer" : "Eugen Sytems",
			"title" : "Senior Level Designer",
			"location" : "Paris, France",
			"dates" : "02/20014 - 04/2014",
			"description" : "Design a part of the game experience"
		},
		{
			"employer" : "Streum On Studio",
			"title" : "Level Designer",
			"location" : "Paris, France",
			"dates" : "11/2013 - 12/2013",
			"description" : "Design a part of the game experience"
		},
		{
			"employer" : "Heliceum",
			"title" : "Lead Game & Level Designer",
			"location" : "Paris, France",
			"dates" : "04/2013 - 10/2013",
			"description" : "Manage a team, manage tasks, project review, design game mechanics & experience"
		},
		{
			"employer" : "Old Skull Game",
			"title" : "Game & Level Designer",
			"location" : "Paris, France",
			"dates" : "04/2013 - 04/2013",
			"description" : "design game mechanics & experience"
		},
		{
			"employer" : "LISAA",
			"title" : "Level Design Teacher",
			"location" : "Paris, France",
			"dates" : "03/2013 - 04/2013",
			"description" : "Teach level design"
		},
		{
			"employer" : "Magic Pockets",
			"title" : "Lead Level Designer & Game Designer",
			"location" : "Paris, France",
			"dates" : "09/2012 - 02/2014",
			"description" : "Design the game experience and a part of the game design"
		},
		{
			"employer" : "Ubisoft",
			"title" : "Level Designer",
			"location" : "Quebec City, Canada",
			"dates" : "01/2012 - 08/2014",
			"description" : "Design a part of the game experience"
		},
		{
			"employer" : "Ubisoft",
			"title" : "Lead Level Designer",
			"location" : "Quebec City, Canada",
			"dates" : "03/2011 - 12/2011",
			"description" : "Design the game experience"
		},
		{
			"employer" : "Ubisoft",
			"title" : "Level Designer Scripter",
			"location" : "Newcastle Upon Tyne, United Kingdom",
			"dates" : "10/2010 - 01/2011",
			"description" : "Design a part of the game experience"
		},
		{
			"employer" : "Ubisoft",
			"title" : "Game & Level Designer",
			"location" : "Paris, France",
			"dates" : "04/2009 - 09/2010",
			"description" : "Design a part of the game mechanics & experience"
		},
		{
			"employer" : "Kylotonn",
			"title" : "Game & Level Designer",
			"location" : "Paris, France",
			"dates" : "04/2008 - 03/2009",
			"description" : "Design a part of the game mechanics & experience"
		}
	],
	"display" : function() {
		for (job in work.jobs) {
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title));
			$('.work-entry:last').append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
			$('.work-entry:last').append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
			$('.work-entry:last').append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
		}
    }
};