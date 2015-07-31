var education = {
	"schools" : [
	    {
	        "name" : "EFREI",
	        "location" : "Villejuif, France",
	        "degree" : "Engineer",
	        "majors" : ["Software Engineer"],
	        "dates" : 2008,
	        "url" : "http://www.efrei.fr"
	    }
	],
	"onlineCourses" : [
	    {
	        "title" : "Web Developper Nanodegree",
	        "school" : "Udacity",
	        "dates" : 2015,
	        "url" : "https://www.udacity.com"
	    }
	],
	"display" : function () {
		$('#education').append(HTMLschoolStart);
		for (school in education.schools) {
			$('.education-entry:last').append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));
			$('.education-entry:last').append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
			$('.education-entry:last').append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
			for (major in education.schools[school].majors) {
				$('.education-entry:last').append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
			}
			$('.education-entry:last').append(HTMLschoolURL.replace("%data%", education.schools[school].url));
		}
		$('.education-entry:last').append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourses) {
			$('.education-entry:last').append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school));
			$('.education-entry:last').append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates));
			$('.education-entry:last').append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url));
		}
	}
};