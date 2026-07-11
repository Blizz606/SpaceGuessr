// Main question/Image list for the game.
// I kept source + nasaId here so every image still has a clear origin.

// Array of space locations with their respective images and information
const spaceLocations = [
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA15691/PIA15691~medium.jpg",
    nasaId: "PIA15691",
    source: "NASA Image and Video Library",
    correctAnswer: "Mars",
    wrongAnswers: ["The Moon", "Earth", "Mercury"],
    fact: "Curiosity captured this early color landscape after landing in Gale Crater."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/as11-37-5545/as11-37-5545~large.jpg",
    nasaId: "as11-37-5545",
    source: "NASA Image and Video Library",
    correctAnswer: "The Moon",
    wrongAnswers: ["Mars", "Mercury", "Europa"],
    fact: "This Apollo 11 photo shows the U.S. flag standing on the Moon."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01262/PIA01262~small.jpg",
    nasaId: "PIA01262",
    source: "NASA Image and Video Library",
    correctAnswer: "Jupiter",
    wrongAnswers: ["Saturn", "Neptune", "Uranus"],
    fact: "This Hubble view shows Jupiter's bands and major storm systems."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA12513/PIA12513~small.jpg",
    nasaId: "PIA12513",
    source: "NASA Image and Video Library",
    correctAnswer: "Saturn",
    wrongAnswers: ["Jupiter", "Uranus", "Neptune"],
    fact: "Cassini captured Saturn and its famous ring system in this view."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/iss045e013851/iss045e013851~large.jpg",
    nasaId: "iss045e013851",
    source: "NASA Image and Video Library",
    correctAnswer: "Earth",
    wrongAnswers: ["Mars", "Venus", "Titan"],
    fact: "This view of Earth was photographed from the ISS in orbit."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01322/PIA01322~large.jpg",
    nasaId: "PIA01322",
    source: "NASA Image and Video Library",
    correctAnswer: "Orion Nebula",
    wrongAnswers: ["Jupiter", "The Moon", "Saturn"],
    fact: "The Orion Nebula is a nearby region where new stars are forming."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01391/PIA01391~orig.jpg",
    nasaId: "PIA01391",
    source: "NASA Image and Video Library",
    correctAnswer: "Uranus",
    wrongAnswers: ["Neptune", "Saturn", "Earth"],
    fact: "Voyager 2 captured Uranus, the ice giant that spins on its side."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01539/PIA01539~orig.jpg",
    nasaId: "PIA01539",
    source: "NASA Image and Video Library",
    correctAnswer: "Neptune",
    wrongAnswers: ["Uranus", "Jupiter", "Venus"],
    fact: "Voyager 2 is still the only spacecraft ever to visit Neptune."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA04921/PIA04921~orig.jpg",
    nasaId: "PIA04921",
    source: "NASA Image and Video Library",
    correctAnswer: "Andromeda Galaxy",
    wrongAnswers: ["Orion Nebula", "Saturn", "Mars"],
    fact: "Andromeda is the nearest large spiral galaxy to the Milky Way."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA09109/PIA09109~orig.jpg",
    nasaId: "PIA09109",
    source: "NASA Image and Video Library",
    correctAnswer: "Eagle Nebula",
    wrongAnswers: ["Andromeda Galaxy", "The Moon", "Jupiter"],
    fact: "The Eagle Nebula contains the famous Pillars of Creation."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA12778/PIA12778~orig.jpg",
    nasaId: "PIA12778",
    source: "NASA Image and Video Library",
    correctAnswer: "Titan",
    wrongAnswers: ["Europa", "Mars", "Venus"],
    fact: "Titan is Saturn's largest moon and has lakes of liquid methane."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA17658/PIA17658~orig.jpg",
    nasaId: "PIA17658",
    source: "NASA Image and Video Library",
    correctAnswer: "Europa",
    wrongAnswers: ["Titan", "The Moon", "Mercury"],
    fact: "Europa may hide a global ocean beneath its icy outer crust."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001625/GSFC_20171208_Archive_e001625~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e001625",
    source: "NASA Image and Video Library",
    correctAnswer: "Mercury",
    wrongAnswers: ["The Moon", "Mars", "Ceres"],
    fact: "Mercury is heavily cratered because it has almost no atmosphere."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA19693/PIA19693~orig.jpg",
    nasaId: "PIA19693",
    source: "NASA Image and Video Library",
    correctAnswer: "Pluto",
    wrongAnswers: ["Neptune", "Titan", "Europa"],
    fact: "New Horizons showed Pluto as a world of plains, mountains, and haze."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA14443/PIA14443~orig.jpg",
    nasaId: "PIA14443",
    source: "NASA Image and Video Library",
    correctAnswer: "Ring Nebula",
    wrongAnswers: ["Orion Nebula", "Andromeda Galaxy", "Eagle Nebula"],
    fact: "The Ring Nebula is a glowing shell of gas from a dying star."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA03606/PIA03606~orig.jpg",
    nasaId: "PIA03606",
    source: "NASA Image and Video Library",
    correctAnswer: "Crab Nebula",
    wrongAnswers: ["Ring Nebula", "Jupiter", "Sombrero Galaxy"],
    fact: "The Crab Nebula is the expanding remnant of a supernova."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA15226/PIA15226~orig.jpg",
    nasaId: "PIA15226",
    source: "NASA Image and Video Library",
    correctAnswer: "Sombrero Galaxy",
    wrongAnswers: ["Andromeda Galaxy", "Crab Nebula", "Saturn"],
    fact: "The Sombrero Galaxy is named for its bright core and dust lane."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA10957/PIA10957~orig.jpg",
    nasaId: "PIA10957",
    source: "NASA Image and Video Library",
    correctAnswer: "Tarantula Nebula",
    wrongAnswers: ["Eagle Nebula", "Ring Nebula", "Europa"],
    fact: "The Tarantula Nebula is one of our nearest major star nurseries."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA20309/PIA20309~orig.jpg",
    nasaId: "PIA20309",
    source: "NASA Image and Video Library",
    correctAnswer: "Ceres",
    wrongAnswers: ["Mercury", "The Moon", "Phobos"],
    fact: "Ceres is the largest object in the asteroid belt and a dwarf planet."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA17211/PIA17211~orig.jpg",
    nasaId: "PIA17211",
    source: "NASA Image and Video Library",
    correctAnswer: "Enceladus",
    wrongAnswers: ["Europa", "Titan", "The Moon"],
    fact: "Enceladus sends icy plumes into space from below its crust."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA22056/PIA22056~orig.jpg",
    nasaId: "PIA22056",
    source: "NASA Image and Video Library",
    correctAnswer: "Phobos",
    wrongAnswers: ["Deimos", "Ceres", "Mercury"],
    fact: "Phobos is the larger of Mars' two moons and orbits very close in."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001925/GSFC_20171208_Archive_e001925~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e001925",
    source: "NASA Image and Video Library",
    correctAnswer: "Whirlpool Galaxy",
    wrongAnswers: ["Sombrero Galaxy", "Andromeda Galaxy", "Crab Nebula"],
    fact: "The Whirlpool Galaxy is a spiral galaxy with a close companion."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA04215/PIA04215~orig.jpg",
    nasaId: "PIA04215",
    source: "NASA Image and Video Library",
    correctAnswer: "Horsehead Nebula",
    wrongAnswers: ["Orion Nebula", "Ring Nebula", "Tarantula Nebula"],
    fact: "The Horsehead Nebula is a dark dust cloud set against glowing gas."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001955/GSFC_20171208_Archive_e001955~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e001955",
    source: "NASA Image and Video Library",
    correctAnswer: "Lagoon Nebula",
    wrongAnswers: ["Orion Nebula", "Eagle Nebula", "Crab Nebula"],
    fact: "The Lagoon Nebula is a huge star-forming region in Sagittarius."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA09268/PIA09268~orig.jpg",
    nasaId: "PIA09268",
    source: "NASA Image and Video Library",
    correctAnswer: "Rosette Nebula",
    wrongAnswers: ["Ring Nebula", "Lagoon Nebula", "Horsehead Nebula"],
    fact: "The Rosette Nebula surrounds a young star cluster with glowing gas."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002155/GSFC_20171208_Archive_e002155~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e002155",
    source: "NASA Image and Video Library",
    correctAnswer: "Cat's Eye Nebula",
    wrongAnswers: ["Ring Nebula", "Crab Nebula", "Tarantula Nebula"],
    fact: "The Cat's Eye Nebula has layered shells around a dying star."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002058/GSFC_20171208_Archive_e002058~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e002058",
    source: "NASA Image and Video Library",
    correctAnswer: "Veil Nebula",
    wrongAnswers: ["Crab Nebula", "Ring Nebula", "Orion Nebula"],
    fact: "The Veil Nebula is the expanding remnant of an exploded star."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA09262/PIA09262~orig.jpg",
    nasaId: "PIA09262",
    source: "NASA Image and Video Library",
    correctAnswer: "Pleiades",
    wrongAnswers: ["Andromeda Galaxy", "Lagoon Nebula", "Whirlpool Galaxy"],
    fact: "The Pleiades is a bright star cluster also called the Seven Sisters."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001642/GSFC_20171208_Archive_e001642~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e001642",
    source: "NASA Image and Video Library",
    correctAnswer: "Large Magellanic Cloud",
    wrongAnswers: ["Small Magellanic Cloud", "Andromeda Galaxy", "Sombrero Galaxy"],
    fact: "The Large Magellanic Cloud is a nearby dwarf galaxy by the Milky Way."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002039/GSFC_20171208_Archive_e002039~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e002039",
    source: "NASA Image and Video Library",
    correctAnswer: "Small Magellanic Cloud",
    wrongAnswers: ["Large Magellanic Cloud", "Whirlpool Galaxy", "Eagle Nebula"],
    fact: "The Small Magellanic Cloud is a nearby dwarf galaxy in southern skies."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA23122/PIA23122~orig.jpg",
    nasaId: "PIA23122",
    source: "NASA Image and Video Library",
    correctAnswer: "Messier 87",
    wrongAnswers: ["Andromeda Galaxy", "Sombrero Galaxy", "Whirlpool Galaxy"],
    fact: "Messier 87 is a giant galaxy famous for its central black hole."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA21770/PIA21770~orig.jpg",
    nasaId: "PIA21770",
    source: "NASA Image and Video Library",
    correctAnswer: "Jupiter's Great Red Spot",
    wrongAnswers: ["Saturn's Hexagon", "Neptune's Dark Spot", "Mars"],
    fact: "Jupiter's Great Red Spot is a storm larger than Earth."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA00521/PIA00521~orig.jpg",
    nasaId: "PIA00521",
    source: "NASA Image and Video Library",
    correctAnswer: "Ganymede",
    wrongAnswers: ["Callisto", "Europa", "Titan"],
    fact: "Ganymede is Jupiter's largest moon and the biggest moon of all."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA03456/PIA03456~orig.jpg",
    nasaId: "PIA03456",
    source: "NASA Image and Video Library",
    correctAnswer: "Callisto",
    wrongAnswers: ["Ganymede", "Europa", "The Moon"],
    fact: "Callisto is a Galilean moon with an old, heavily cratered surface."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA17195/PIA17195~orig.jpg",
    nasaId: "PIA17195",
    source: "NASA Image and Video Library",
    correctAnswer: "Dione",
    wrongAnswers: ["Rhea", "Tethys", "Enceladus"],
    fact: "Dione is an icy moon of Saturn with bright fractured terrain."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA12546/PIA12546~orig.jpg",
    nasaId: "PIA12546",
    source: "NASA Image and Video Library",
    correctAnswer: "Rhea",
    wrongAnswers: ["Dione", "Mimas", "Iapetus"],
    fact: "Rhea is Saturn's second-largest moon and is heavily cratered."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA12521/PIA12521~orig.jpg",
    nasaId: "PIA12521",
    source: "NASA Image and Video Library",
    correctAnswer: "Iapetus",
    wrongAnswers: ["Rhea", "Tethys", "Titan"],
    fact: "Iapetus is famous for its dramatic two-tone surface colors."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA00037/PIA00037~orig.jpg",
    nasaId: "PIA00037",
    source: "NASA Image and Video Library",
    correctAnswer: "Ariel",
    wrongAnswers: ["Miranda", "Triton", "Europa"],
    fact: "Ariel is a moon of Uranus photographed up close by Voyager 2."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01490/PIA01490~orig.jpg",
    nasaId: "PIA01490",
    source: "NASA Image and Video Library",
    correctAnswer: "Miranda",
    wrongAnswers: ["Ariel", "Dione", "Callisto"],
    fact: "Miranda has one of the strangest patchwork surfaces Voyager 2 saw."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA01994/PIA01994~orig.jpg",
    nasaId: "PIA01994",
    source: "NASA Image and Video Library",
    correctAnswer: "Triton",
    wrongAnswers: ["Titan", "Europa", "Ganymede"],
    fact: "Triton is Neptune's largest moon and orbits in reverse direction."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA13693/PIA13693~orig.jpg",
    nasaId: "PIA13693",
    source: "NASA Image and Video Library",
    correctAnswer: "Valles Marineris",
    wrongAnswers: ["Olympus Mons", "Gale Crater", "Phobos"],
    fact: "Valles Marineris is a vast canyon system stretching across Mars."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA00452/PIA00452~orig.jpg",
    nasaId: "PIA00452",
    source: "NASA Image and Video Library",
    correctAnswer: "Pale Blue Dot",
    wrongAnswers: ["Earthrise", "Blue Marble", "Andromeda Galaxy"],
    fact: "Pale Blue Dot shows Earth from billions of kilometers away."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001651/GSFC_20171208_Archive_e001651~orig.jpg",
    nasaId: "GSFC_20171208_Archive_e001651",
    source: "NASA Image and Video Library",
    correctAnswer: "Hubble Ultra Deep Field",
    wrongAnswers: ["Andromeda Galaxy", "Whirlpool Galaxy", "Pleiades"],
    fact: "The Hubble Ultra Deep Field reveals thousands of distant galaxies."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA13001/PIA13001~small.jpg",
    nasaId: "PIA13001",
    source: "NASA Image and Video Library",
    correctAnswer: "Venus",
    wrongAnswers: ["Mercury", "Mars", "Io"],
    fact: "Venus is wrapped in thick clouds and has one of the hottest surfaces in the solar system."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA02201/PIA02201~small.jpg",
    nasaId: "PIA02201",
    source: "NASA Image and Video Library",
    correctAnswer: "Io",
    wrongAnswers: ["Europa", "Ganymede", "Callisto"],
    fact: "Io is Jupiter's volcanic moon and the most geologically active world known."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA11826/PIA11826~small.jpg",
    nasaId: "PIA11826",
    source: "NASA Image and Video Library",
    correctAnswer: "Deimos",
    wrongAnswers: ["Phobos", "Ceres", "The Moon"],
    fact: "Deimos is the smaller outer moon of Mars and looks like a captured asteroid."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA06572/PIA06572~small.jpg",
    nasaId: "PIA06572",
    source: "NASA Image and Video Library",
    correctAnswer: "Mimas",
    wrongAnswers: ["Tethys", "Enceladus", "Rhea"],
    fact: "Mimas is a Saturn moon famous for the giant Herschel crater that dominates one hemisphere."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA02276/PIA02276~small.jpg",
    nasaId: "PIA02276",
    source: "NASA Image and Video Library",
    correctAnswer: "Tethys",
    wrongAnswers: ["Dione", "Rhea", "Mimas"],
    fact: "Tethys is an icy moon of Saturn marked by a huge canyon called Ithaca Chasma."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA07742/PIA07742~small.jpg",
    nasaId: "PIA07742",
    source: "NASA Image and Video Library",
    correctAnswer: "Hyperion",
    wrongAnswers: ["Phoebe", "Iapetus", "Mimas"],
    fact: "Hyperion has a porous sponge-like surface and tumbles chaotically around Saturn."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA00034/PIA00034~thumb.jpg",
    nasaId: "PIA00034",
    source: "NASA Image and Video Library",
    correctAnswer: "Oberon",
    wrongAnswers: ["Titania", "Umbriel", "Ariel"],
    fact: "Oberon is the outermost large moon of Uranus seen up close by Voyager 2."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA00040/PIA00040~thumb.jpg",
    nasaId: "PIA00040",
    source: "NASA Image and Video Library",
    correctAnswer: "Umbriel",
    wrongAnswers: ["Oberon", "Titania", "Miranda"],
    fact: "Umbriel is a dark Uranian moon with an old cratered surface."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA00039/PIA00039~small.jpg",
    nasaId: "PIA00039",
    source: "NASA Image and Video Library",
    correctAnswer: "Titania",
    wrongAnswers: ["Oberon", "Umbriel", "Triton"],
    fact: "Titania is the largest moon of Uranus and shows giant faults and bright scarps."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA18906/PIA18906~medium.jpg",
    nasaId: "PIA18906",
    source: "NASA Image and Video Library",
    correctAnswer: "Sun",
    wrongAnswers: ["Venus", "Jupiter", "Helix Nebula"],
    fact: "This view shows the Sun in high-energy X-rays, highlighting magnetic activity and hot plasma."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA15658/PIA15658~medium.jpg",
    nasaId: "PIA15658",
    source: "NASA Image and Video Library",
    correctAnswer: "Helix Nebula",
    wrongAnswers: ["Ring Nebula", "Cat's Eye Nebula", "Rosette Nebula"],
    fact: "The Helix Nebula is a nearby planetary nebula formed as a sun-like star shed its outer layers."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/carina_nebula/carina_nebula~medium.jpg",
    nasaId: "carina_nebula",
    source: "NASA Image and Video Library",
    correctAnswer: "Carina Nebula",
    wrongAnswers: ["Lagoon Nebula", "Trifid Nebula", "Tarantula Nebula"],
    fact: "The Carina Nebula is a turbulent star-forming region home to massive young stars."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA04220/PIA04220~small.jpg",
    nasaId: "PIA04220",
    source: "NASA Image and Video Library",
    correctAnswer: "Trifid Nebula",
    wrongAnswers: ["Lagoon Nebula", "Orion Nebula", "Eagle Nebula"],
    fact: "The Trifid Nebula mixes glowing emission gas with dark dust lanes that split its bright core."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA15635/PIA15635~medium.jpg",
    nasaId: "PIA15635",
    source: "NASA Image and Video Library",
    correctAnswer: "Flame Nebula",
    wrongAnswers: ["Horsehead Nebula", "Cone Nebula", "Helix Nebula"],
    fact: "The Flame Nebula glows near Alnitak in Orion and is threaded by dark dust."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA23121/PIA23121~medium.jpg",
    nasaId: "PIA23121",
    source: "NASA Image and Video Library",
    correctAnswer: "Butterfly Nebula",
    wrongAnswers: ["Ring Nebula", "Cat's Eye Nebula", "Flame Nebula"],
    fact: "The Butterfly Nebula is a bipolar planetary nebula with two bright wing-like lobes."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA25165/PIA25165~medium.jpg",
    nasaId: "PIA25165",
    source: "NASA Image and Video Library",
    correctAnswer: "Triangulum Galaxy",
    wrongAnswers: ["Andromeda Galaxy", "Whirlpool Galaxy", "Pinwheel Galaxy"],
    fact: "The Triangulum Galaxy, also called M33, is one of the closest spiral galaxies to the Milky Way."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA14403/PIA14403~medium.jpg",
    nasaId: "PIA14403",
    source: "NASA Image and Video Library",
    correctAnswer: "Pinwheel Galaxy",
    wrongAnswers: ["Triangulum Galaxy", "Whirlpool Galaxy", "Sombrero Galaxy"],
    fact: "The Pinwheel Galaxy, also known as M101, is a face-on spiral rich in star formation."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA03296/PIA03296~medium.jpg",
    nasaId: "PIA03296",
    source: "NASA Image and Video Library",
    correctAnswer: "Cartwheel Galaxy",
    wrongAnswers: ["Whirlpool Galaxy", "Antennae Galaxies", "Stephan Quintet"],
    fact: "The Cartwheel Galaxy likely got its ring shape after a dramatic galactic collision."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA04624/PIA04624~medium.jpg",
    nasaId: "PIA04624",
    source: "NASA Image and Video Library",
    correctAnswer: "Centaurus A",
    wrongAnswers: ["Messier 87", "Sculptor Galaxy", "Sombrero Galaxy"],
    fact: "Centaurus A is a peculiar galaxy with a bright core and a thick dark dust lane."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA17256/PIA17256~medium.jpg",
    nasaId: "PIA17256",
    source: "NASA Image and Video Library",
    correctAnswer: "Sculptor Galaxy",
    wrongAnswers: ["Centaurus A", "Pinwheel Galaxy", "M82 Galaxy"],
    fact: "The Sculptor Galaxy is a nearby spiral often studied in infrared and X-ray light."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001327/GSFC_20171208_Archive_e001327~small.jpg",
    nasaId: "GSFC_20171208_Archive_e001327",
    source: "NASA Image and Video Library",
    correctAnswer: "Antennae Galaxies",
    wrongAnswers: ["Stephan Quintet", "Cartwheel Galaxy", "Whirlpool Galaxy"],
    fact: "The Antennae Galaxies are two colliding spirals throwing out long tidal tails of stars and gas."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA09579/PIA09579~medium.jpg",
    nasaId: "PIA09579",
    source: "NASA Image and Video Library",
    correctAnswer: "M81 Galaxy",
    wrongAnswers: ["M82 Galaxy", "Triangulum Galaxy", "Andromeda Galaxy"],
    fact: "M81 is a grand-design spiral galaxy in the same sky neighborhood as starburst galaxy M82."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA04218/PIA04218~medium.jpg",
    nasaId: "PIA04218",
    source: "NASA Image and Video Library",
    correctAnswer: "M82 Galaxy",
    wrongAnswers: ["M81 Galaxy", "Whirlpool Galaxy", "Centaurus A"],
    fact: "M82 is a starburst galaxy blasting material into space from intense stellar activity."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA04201/PIA04201~medium.jpg",
    nasaId: "PIA04201",
    source: "NASA Image and Video Library",
    correctAnswer: "Stephan Quintet",
    wrongAnswers: ["Antennae Galaxies", "Cartwheel Galaxy", "Messier 87"],
    fact: "Stephan Quintet is a famous compact group of interacting galaxies."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000842/GSFC_20171208_Archive_e000842~medium.jpg",
    nasaId: "GSFC_20171208_Archive_e000842",
    source: "NASA Image and Video Library",
    correctAnswer: "Pillars of Creation",
    wrongAnswers: ["Horsehead Nebula", "Carina Nebula", "Veil Nebula"],
    fact: "The Pillars of Creation are towering columns of gas and dust inside the Eagle Nebula."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA19968/PIA19968~medium.jpg",
    nasaId: "PIA19968",
    source: "NASA Image and Video Library",
    correctAnswer: "Charon",
    wrongAnswers: ["Pluto", "Nix", "Triton"],
    fact: "Charon is Pluto's largest moon and shows canyons, fractures, and contrasting terrain colors."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA20287/PIA20287~small.jpg",
    nasaId: "PIA20287",
    source: "NASA Image and Video Library",
    correctAnswer: "Nix",
    wrongAnswers: ["Hydra", "Charon", "Deimos"],
    fact: "Nix is one of Pluto's small moons and has an irregular shape with bright icy patches."
  },
  {
    imageUrl: "https://www.nasa.gov/wp-content/uploads/2016/05/hydra_solo.jpg?w=648",
    nasaId: "hydra_solo",
    source: "NASA",
    correctAnswer: "Hydra",
    wrongAnswers: ["Nix", "Charon", "Phoebe"],
    fact: "Hydra is a small outer moon of Pluto discovered in 2005."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA06062/PIA06062~thumb.jpg",
    nasaId: "PIA06062",
    source: "NASA Image and Video Library",
    correctAnswer: "Phoebe",
    wrongAnswers: ["Hyperion", "Iapetus", "Mimas"],
    fact: "Phoebe is a dark irregular moon of Saturn that may have been captured from the outer solar system."
  },
  {
    imageUrl: "https://images-assets.nasa.gov/image/PIA10063/PIA10063~medium.jpg",
    nasaId: "PIA10063",
    source: "NASA Image and Video Library",
    correctAnswer: "Olympus Mons",
    wrongAnswers: ["Valles Marineris", "Gale Crater", "Venus"],
    fact: "Olympus Mons is the tallest volcano in the solar system and rises high above the Martian plains."
  }
];


//Difficulty mapping for each location based on its NASA ID^

const locationDifficultyById = {
  PIA15691: "easy",
  "as11-37-5545": "easy",
  PIA01262: "easy",
  PIA12513: "easy",
  iss045e013851: "easy",
  PIA01322: "medium",
  PIA01391: "medium",
  PIA01539: "medium",
  PIA04921: "medium",
  PIA09109: "medium",
  PIA12778: "medium",
  PIA17658: "medium",
  GSFC_20171208_Archive_e001625: "easy",
  PIA19693: "hard",
  PIA14443: "hard",
  PIA03606: "hard",
  PIA15226: "hard",
  PIA10957: "hard",
  PIA20309: "medium",
  PIA17211: "medium",
  PIA22056: "hard",
  GSFC_20171208_Archive_e001925: "hard",
  PIA04215: "hard",
  GSFC_20171208_Archive_e001955: "hard",
  PIA09268: "hard",
  GSFC_20171208_Archive_e002155: "hard",
  GSFC_20171208_Archive_e002058: "hard",
  PIA09262: "hard",
  GSFC_20171208_Archive_e001642: "hard",
  GSFC_20171208_Archive_e002039: "hard",
  PIA23122: "hard",
  PIA21770: "hard",
  PIA00521: "hard",
  PIA03456: "hard",
  PIA17195: "hard",
  PIA12546: "hard",
  PIA12521: "hard",
  PIA00037: "hard",
  PIA01490: "hard",
  PIA01994: "hard",
  PIA13693: "hard",
  PIA00452: "medium",
  GSFC_20171208_Archive_e001651: "hard",
  PIA13001: "easy",
  PIA02201: "medium",
  PIA11826: "hard",
  PIA06572: "hard",
  PIA02276: "hard",
  PIA07742: "hard",
  PIA00034: "hard",
  PIA00040: "hard",
  PIA00039: "hard",
  PIA18906: "easy",
  PIA15658: "medium",
  carina_nebula: "medium",
  PIA04220: "hard",
  PIA15635: "hard",
  PIA23121: "hard",
  PIA25165: "hard",
  PIA14403: "hard",
  PIA03296: "hard",
  PIA04624: "hard",
  PIA17256: "hard",
  GSFC_20171208_Archive_e001327: "hard",
  PIA09579: "hard",
  PIA04218: "hard",
  PIA04201: "hard",
  GSFC_20171208_Archive_e000842: "hard",
  PIA19968: "hard",
  PIA20287: "hard",
  PIA20581: "hard",
  hydra_solo: "hard",
  PIA06062: "hard",
  PIA10063: "medium"
};

spaceLocations.forEach((location) => {
  location.difficulty = locationDifficultyById[location.nasaId] || "medium";
});

export { spaceLocations };
