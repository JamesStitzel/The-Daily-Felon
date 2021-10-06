var superName;
function callStories(name){
    superName = name;
    tellStory();
	
// Each time the tell story function is called the page needs to be refreshed with new content from each of the arrays

// When the story loads, the Jon's Garage articles should appear in the first column all the way to the left
// The only functionality that will be needed for Jon's garage is just alternating the articles themselves, nothing inside the Jon's Gargage text will change

// Crime articles should appear in the second column
// The crime articles will have headlines that should populate from the articleHeadlines Array, headlines are random and do NOT need to be matched with a specific article
// The article headlines do have words that need to be filled with random word selections from the applicable arrays
// The articles contain placeholders throughout that needs to be filled with random word selections from the applicable arrays
// There are two random number requests [R#] that need to be filled, these numbers will apply to previous crimes so the max window for that number selection is up to you
// The Super Hero Name will need to be assigned to ensure that pictures match the names given  

// Dan's Cooking Corner needs to appear in the third column
// The only functionality that will be needed for Dan's Cooking Corner is just alternating the articles themselves, nothing inside the Cooking Corner text will change

// Advertisements need to appear in the fourth and final column all the way to the right side

}



function tellStory(){
    console.log("Our hero's name is " + superName);
}




// Article Headlines- can be chosen randomly- currently contains 10 items

var articleHeadlines = [							

	`Calling All…Superheroes?`,
	[villainDescriptiveName] + ` Strikes Fear into the Heart of Citizens`,
	`"Chaos is on the Menu Today" Says One Local Restaurant Owner`,
	[villainDescriptiveName] + ` Leaves Devastation and Destruction After Going Grocery Shopping`,
	[superheroName] + ` Promises Justice for Arch Nemesis ` + [villainName],
	`Public Enemy #1, ` + [userInput] + ` Apprehended`,
	[userInput] + `: Mere Menace or Scourge on Society?`,
	`Crime of the Century! ` + [userInput] + ` Wreaks Havoc and Ruin on (cityName)`,
	[cityName] + ` Left in Shock After Receiving Estimate for Destruction Left by ` + [userInput],
	[userInput] + ` Left Police Bewildered, ` + (superheroName) + ` Asked to Step In`

]

// City Names - currently contains 12 items
var cityNames = [								

	`Bohemia, FL`,
	`Dogtown, FL`,
	`Elfers, FL`,
	`Fluffy Landing, FL`,
	`Lorida, FL`,
	`Needmore, FL`,
	`Possum Bluff, FL`,
	`Roach Branch, FL`,
	`Tobacco Patch Landing, FL`,
	`Two Egg, FL`,
	`Weeki Wachee, FL`,
	`Yeehaw Junction, FL`

]

// Scene of the Crime locations - currently contains 11 items
var sceneOfCrime = [							

	`Bank`,
	`Grocery Store`,
	`DMV`,
	`Hotel`,
	`Craft Store`
	`Balloon Factory`,
	`Onesie Outlet`,
	`Canine Café`,
	`Edible Shoe Store`,
	`Glow in the Dark Toilet Paper Store`,
	`Goat Rental Service`,

]

// Secondary Structures that can be used for additional damage - currently contains 13 items
var secondaryStructures = [						

	`house`,
	`parking garage`,
	`ferris wheel`,
	`miniature golf course`,
	`car wash`,
	`taxidermist`,
	`Broken Action Figure Repair Clinic`,
	`Rent-a-Chicken store`,
	`Clown Club`,
	`Plant Massage Parlor`,
	`barn`,
	`tree house`,
	`chicken coop`

]

// Collateral Damage-non structure objects that can receive damage -  currently contains 11 items
var collateralDamage = [							

	`hot dog stand`,
	`newspaper stand`,
	`mailbox`,
	`doghouse`,
	`orange orchard`,
	`gardenia bush`,
	`sign post`,
	`trashcan`,
	`dumpster`,
	`stack of flowerpots`,
	`Alligator Petting Zoo`

]



// Descriptive Name for Villain -  currently contains 10 items
var villainDescriptiveName = [						

	`Malicious Menace`,
	`Captain Calamity`,
	`Malefactor of Mischief`,
	`Outrageous Offender`,
	`Rascal of Ruin`,
	`Wicked Wretch`,
	`Cursed Criminal`,
	`Barbaric Beast`,
	`Ruthless Rogue`,
	`Malignant Monster`
]


// Mode of transportation - currently contains 10 items
var modeOfTransportation = [						

	`mail truck`,
	`city bus`,
	`Amazon Drone`,
	`giant unicycle`,
	`steam locomotive`,
	`puddle jumper`,
	`Oscar Myer Wienermobile`,
	`parade float`,
	`skateboard`,
	`electric scooter`

]

// list of current crimes - currently contains 14 items
var currentCrime = [							

	`Burglary`,
	`Armed Robbery`,
	`Assault and Battery`,
	`Vandalism`,
	`Destruction`,
	`Murder`,
	`Reckless Endangerment`,
	`Torture`,
	`Property Damage`,
	`Speeding`,
	`Failure to Use Turn Signal`,
	`Jay Walking`,
	`Unpaid Parking Tickets`,
	`HOA Infractions`
]

// list of past crimes - currently contains 14 items
var pastCrimes = [								

	`Airplane Hijacking`,
	`Arson`,
	`Check Fraud`,
	`Copyright Infringement`,
	`Exportation of Drugs`,
	`Identity Theft`,
	`Misuse of Passport`,
	`Money Laundering`,
	`Shoplifting`,
	`Trespassing`,
	`Waking a Sleeping Bear to take a picture`,
	`Unpaid Parking Tickets After Leaving Elephant Tied to Parking Meter`,
	`Riding a Horse Under the Influence`,
	`Driving with an Uncaged Bear`,
	

]

// list of weapons - currently contains 14 items
var weapon = [								

	`banjo`,
	`pumpernickel bread`,
	`jump rope`,
	`toilet lid`,
	`sweatpants`,
	`dessert spoon`,
	`sock`,
	`pickle jar`,
	`dagger`,
	`lead pipe`,
	`rope`,
	`candlestick`,
	`wrench`,
	`paint bucket`

]

// list of villain's disguises - currently contains 11 items
var disguise = [								

	`Banana Costume`,
	`Buffalo Onesie`,
	`Turkey Costume`,
	`Avocado Costume`,
	`Squirrel Costume`,
	`Garden Gnome Costume`,
	`Gumby Costume`,
	`Hedgehog Onesie`,
	`Darth Vader Costume`,
	`Tree Costume`,
	`Smurf Costume`,
	

]

// List of bones for villain to break - currently contains 17 items
var brokenBones = [			

	`clavicle`,
	`femur`,
	`tailbone`,
	`ribs`,
	`ankle`,
	`pelvis`,
	`hip`,
	`wrist`,
	`elbow`,
	`foot`,
	`arm`,
	`finger`,
	`toe`,
	`jaw`,
	`sternum`,
	`nose`,
	`thumb`


]


// List of super powers for the hero - currently contains 27 items
var powersList = [								

	`Psychokinesis`,
	`Teleportation`,
	`Superhuman Strength`,
	`Invisibility`,
	`Telepathy`,
	`Shapeshifting`,
	`X-ray Vision`,
	`Empathy`,
	`Time Travel`,
	`Immortality`,
	`Precognition`,
	`Magic`,
	`Psionics`,
	`Pyrokinesis`,
	`Flight`,
	`Weather Modification`,
	`Omniscience`,
	`Mangetism`,
	`Astral Projection`,
	`Reality Warping`,
	`Calirvoyance`,
	`Omnilingualism`,
	`Illusion`,
	`Eidetic Memory`,
	`Water Manipulation`,
	`Power Mimicry`,
	`Sound Manipulation`


]

// method of hero's entry - currently contains 16 items
var methodOfHeroEntry = [							

	`flew`,
	`swung`,
	`jumped`,
	`walked`,
	`strolled`,
	`paraded`,
	`marched`,
	`sauntered`,
	`swooped`,
	`darted`,
	`dove`,
	`bolted`,
	`galloped`,
	`trotted`,
	`charged`,
	`barged`


]

// list of attack words - currently contains 7 items
var attackWords = [								

	`attacked`,
	`ambushed`,
	`besieged`,
	`blasted`,
	`bombarded`,
	`struck`,
	`battled`

]

// list of types of attacks- currently contains 8 items
var typesOfAttacks = [								

	`hit`,
	`kick`,
	`punch`,
	`assail`,
	`bit`,
	`slap`,
	`Vulcan Nerve Pinch`,
	`battered`

]

// list of break words - currently contains 20 items
var breakWords = [								

	`brake`,
	`shatter`,
	`crumble`,
	`disintegrate`,
	`fragment`,
	`splinter`,
	`smash`,
	`ruptur`,
	`separate`,
	`severe`,
	`snap`,
	`tear`,
	`bust`,
	`demolish`,
	`divide`,
	`collapse`,
	`crack`,
	`crush`,
	`mutilate`,
	`shred`

]

// List of quotes for the villain to say - currently contains 12 items
var villainQuotes = [								

	`I would have gotten away with it if it wasn’t for those meddling kids!`,
	`She doesn’t even go here!`,
	`You keep using that word. I do not think it means what you think it means.`,
	`This is not ‘Nam. This is bowling. There are rules.`,
	`Gentlemen, I wash my hands of this weirdness.`,
	`I’m not insane, my mother had me tested.`,
	`I’ll be back!`,
	`I’m the King of the World!`,
	`I am your father!`,
	`I’ll get you, my pretty, and your little dog too!`,
	`Dude, you’re embarrassing me in front of the Wizards.`,
	`Does anybody have any orange slices?`,
	


]

// list of remarks for hero to say - currently contains 10 items
var heroRemarks = [								

	`Sell crazy someplace else. We’re all stocked up here.`,
	`Why don’t you make like a tree and get out of here?`,
	`Keep the change, ya filthy animal!`,
	`Go ahead, make my day.`,
	`The greatest teacher, failure is.`
	`If you’re nothing without the suit, then you shouldn’t have it.`,
	`You’re gonna need a bigger boat.`,
	`Toto, I’ve a feeling we’re not in Kansas anymore.`,
	`Doth Mother know you weareth her drapes?`,
	`Make a move, Reindeer Games.`,
	


]

// list of types of mechanical issues - currently contains 18 items
var typeOfMechanicalIssue = [							

	`Blinker Fluid`,
	`Battery Belt`,
	`Flux Capacitor`,
	`ODN Sensor Panel`,
	`Piston Return Springs`,
	`Ventilation Regulator`,
	`High Altitude Battery`,
	`Magnetic Fuel Alignment system`,
	`brake coolant`,
	`windshield wiper governor`,
	`leaky spark plugs`,
	`GNDN wiring harness`,
	`muffler bearings`,
	`battery filter`,
	`antenna gasket`,
	`radio filter`,
	`vacuum modulator`,
	`transmission spoiler`

]

// Articles - there are only two articles but each article needs to be populated with words from applicable arrays
var articles = {
    articleOne :
    `This morning citizens in the town of ` + [cityName] + ` were left reeling after the latest infraction by the ` + [villainDescriptiveName] + `. The villain better known as ` + [userInput] + `, had once again brought chaos and destruction through the heinous act of ` + [currentCrime] + `.

    ` + [userInput] + ` was at the regional ` + [sceneOfCrime] +  ` and was reported to be wearing a ` + [disguise] + ` and wielding a ` + [weapon] + `. For readers just joining us, ` + [userInput] + ` has been found guilty and charged by the state for ` + [R#] + ` counts of ` + [pastCrimes] + `, as well as ` + [R#] + `counts of ` + [pastCrimes] + `. Last month the federal judge issued a warrant for ` + [userInput] + `'s arrest.
    
    ` + [userInput] + ` clearly didn't learn the lesson because once again rampage and devastation were clearly the goal. With little regard for the surrounding witnesses, ` +  [userInput] +  ` seemed as though there was going to be no end to the binge of turmoil. It's been reported that ` + [userInput] + ` tried to flee the scene of the crime in a ` + [modeOfTransportation] + ` which failed to start due to faulty ` + [mechanicalIssue] + `.
    
    ` + [userInput] + `'s plans were soon interrupted when neighborhood hero ` + [superheroName] +  `showed up and immediately came to the defense of the innocent bystanders. ` + [superheroName] + ` quickly `+ [methodOfEntry] + ` into action. ` + [superheroName] + `began the engagement quickly, using the power of ` + [powersList] + `, ` + [userInput] + ` was easily overwhelmed. ` + [superheroName] + ` swooped in and went to ` + [typeOfAttack] + ` and ` + [userInput] + `’s mayhem quickly ended.`
    
    `As the stretcher was being loaded into the ambulance, ` + [userInput] + ` was heard to be yelling "` + [villainQuotes] + ` Once at the hospital, ` + [userInput] + ` was treated for one broken ` + [bones] + ` and two broken ` + [bones] + `.
    
    In the pandemonium, a ` + [secondaryStructure] + ` as well as a widely loved ` + [collateralDamage] + ` was destroyed. Citizens are planning a relief fund to help rebuild these icons of our lovely city.
    
    The town of ` + [cityName] + ` is once again safe thanks to ` + [superheroName] + `. When asked if he had anything to say to ` + [userInput] + `, ` + [superheroName] + ` responded by saying ` + [herosRemarks]`.`,

    articleTwo :
    `Last night an explosion was reported near the old ` + [sceneOfCrime] + ` that was located at the edge of ` + [cityName] + `. The surrounding landscape was nearly leveled including the brand new ` + [secondaryStructures] + ` and the well-loved ` + [collateralDamage] + ` that was located across the street.
	
	A person dressed in a ` + [disguise] + ` was seen leaving the scene in a `+ [modeOfTransportation] + `. witnesses said that the vehicle was very loud due to, what many believe was a ` + [mechanicalIssue] + `.
	
	Before police could arrive, neighborhood hero ` + [superheroName]  + `had already ` + [methodOfEntry] + ` onto the scene. Among the rubble ` + [superheroName] + ` found a ` + [weapon] + ` which was immediately sent to the forensics lab for analysis.
	
	For our readers who are just joining, the ` + [weapon] + ` is the weapon of choice for the ` + [villainDescriptiveName] + ` better known as ` + [userInput] + `. ` + [userInput] + ` has previously been charged with four counts of ` + [pastCrime] + ` and seven counts of ` + [pastCrime] + `. Earlier this week, a federal judge issued a warrant for ` + [userInput] + `'s arrest on the charge of ` + [currentCrime] + `.
	
	`+ [superhero] + ` vowed to use the awe inspiring ability of ` + [powersList] + ` to ` + [typesOfAttack] + ` and ` + [breakWords] + ` as many of `+ [userInput] + `'s ` + [bones] + ` as possible.
	
	` + [superhero] + ` spoke to reporters and made his thoughts clear when he said: "` + [heroRemarks] + `”
	
	We reached out to ` + [userInput] + ` and received a single response stating: "` + [villainQuotes] + `”
	
	This story is still developing and will be updated as it unfolds.`


}




// Dan's Cooking Corner needs to appear in the third column. articles need to be displayed randomly, nothing inside the text should have to change
// Total number of articles will be updated once complete
var dansCookingCorner = [
    `We've had such lovely weather lately, now is the best time to make one of my favorites.

    Today we will be making the delicious "Bologna cake". This recipe has been requested by many of our followers, so we are finally bringing this crowd favorite to your home!
    
    This dish will require love and patience to make it turn out perfect.
    
    To start, you will need LOTS of Bologna.
    
    - Lay down a thick layer of Bologna so that the outside border forms a circle. You will need approximately
    12 slices of bologna per layer, add additional slices to accommodate for thinly sliced meats.
    - Once first layer has been placed and positioned on serving dish, add a nice thick layer of mayonnaise.
    - continue alternating layers of bologna n and mayonnaise until you have approximately seven layers of bologna.
    - "Ice" the cake with hearty helpings of mayonnaise. Decorate with your favorite mustard and dill flakes
    - chill for at least four hours and serve with strawberries
    
    This is one of my personal favorites, so I hope you enjoy it as much as I do!`,


]


// Jon's Garage needs to appear in the third column. articles need to be displayed randomly, nothing inside the text should have to change
// Total number of articles will be updated once complete
var jonsGarage = [
    `With all the dreadful weather we've been having lately, now is a great time to remember to top off your blinker fluid.

    This is a very simple fix that can potentially save you lots of trouble later on down the road. 
    
    It's no secret that the newer model cars are really bad about maintaining blinker fluid pressure. There is no feeling worse than being stuck on the side of the road in a thunderstorm without functioning blinkers. 
    
    In addition to that police prefer that your blinkers be functioning correctly. That's why it's important to make sure the fluid stays topped off.
    
    On most models it's fairly easy to refill, just open the cap on the top and start pouring. You will know when there is enough because your feet will start getting wet. Feel free to lick any excess up because it's both healthy and tastes Great!
    
    Hope this reminder finds you well, and until
    tomorrow, 
    
    "Happy Blinking!"
    `,


]
