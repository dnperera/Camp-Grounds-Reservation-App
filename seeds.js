var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
	{
		name: 'Iron Creek Crawford State Park Campground',
		location: 'Colorado',
		description: 'Crawford State Park on Colorado’s western slope is the place for a true escape to the outdoors in Colorado. Enjoy fishing, hiking and water recreation in this delightful park. This park is a place for an escape to peace and tranquility in the midst of one of Colorado’s most scenic western slope areas, neighboring the famous Black Canyon of the Gunnison and Blue Mesa Reservoir',
		image :'https://www.campsitephotos.com/photo/camp/28495/Iron_Creek_View.jpg'
	},
	{
		name: 'Independence Creek Campground',
		location: 'California',
		description: 'The Sequoia National Forest, named for the world’s largest trees, celebrates the greatest concentration of giant sequoia groves in the world. Protected within the Giant Sequoia National Monument, these groves and the areas around them are managed by the forest Service for you and the benefit of generations to come. These giants may be enjoyed as you hike, ride horse back or mountain bike one of many trails.',
		image :'https://www.campsitephotos.com/photo/camp/53249/Independence_Creek_View.jpg'
	}
	,
	{
		name: 'Carpinteria State Beach Campground',
		location: 'California',
		description: 'Carpinteria State Beach is a beautiful mile-long beach located just 12 miles from Santa Barbara.  It’s a very popular campground with 216 campsites for RVs, tents and trailers. The maximum size for trailers and RVs is 35 feet. Carpinteria campground is actually divided into 4 sections, named after the Channel Islands: Anacapa, Santa Cruz, Santa Rosa and San Miguel. Anacapa and Santa Cruz is the only area for tents, and if you want to be fronting the beach, request Santa Cruz. If you have an RV and want to be fronting the beach, request Santa Rosa or San Miguel. Carpinteria State Beach campground has flush toilets, hot showers, a visitor center and dump station. Each campsite has a table, fire ring and grill.',
		image :'https://www.campsitephotos.com/photo/camp/7178/Carpinteria_State_Beach_Creek.jpg'
	}
	,
	{
		name: 'Morro Bay State Park Campgroun',
		location: 'California',
		description: 'Morro Bay State Park campground has 134 campsites (sites 126 and 127 do not exist) for tents, trailers and RVs (up to 35 feet) with 27 sites having electric/water hookups.  Each campsite has a paved parking spur, a table, fire ring, grate and food locker. Some sites are designated hike/bike campsites and there area also twelve ADA accessible sites. The campground has a campfire center, picnic area, restrooms with flush toilets and hot showers, outdoor showers, drinking water, overflow parking and an RV dump station. There are two group campsites, Chorro (35 people maximum) and Osos (25 people maximum).',
		image :'https://www.campsitephotos.com/photo/camp/20273/Morro_Bay_SP.jpg'
	},
	{
		name: 'Samuel P. Taylor State Park',
		location: 'California',
		description: 'Samuel P. Taylor State Park’s 2,882 acres offer shady strolls through the stately redwoods along Lagunitas Creek as well as exhilarating hikes to the top of Barnabe Peak, one of the best viewpoints in Marin County.You can camp among redwoods, bike along the creek, explore easy-to-moderate hiking trails, watch salmon spawn, relax in the shady picnic area, and learn the story of its namesake pioneer. When you’ve finished all that, more adventures await just next door at Point Reyes National Seashore.',
		image :'https://www.protrails.com/protrails/galleries/oceanviews.jpg'
	}
];

function seedDB() {
	//remove all existing data
	Campground.remove({} ,function( error ){
		if(error) {
			console.log('Error in removing campgrounds ==>',error);
		}
		console.log('All campgrounds removed !!!!!');
		 // Add model data to db
		 data.forEach( function ( seed ) {
		 	Campground.create( seed , function ( error ,newCamp ){
		 		if( error ) {
		 			console.log(error);
		 		} else {
		 			console.log(' campground added !!!!!');
					Comment.create(
					{
						text: " This place is great . But no basic facilites .",
						author: "Dasith"
					}, function ( error ,comment) {
						if( error ) {
							console.log( 'Error in adding Comment -->', error);
						}else {
							newCamp.comments.push(comment._id);
							newCamp.save();
							console.log("Created new comment");
						}
					});
		 		}
			});
		});

	// Comment.remove({},function( error ){
	// 	if( error ) {
	// 		console.log(error);
	// 	}
	// 	console.log('All comments removed !!!!!');
	// });

});

};
module.exports = seedDB;