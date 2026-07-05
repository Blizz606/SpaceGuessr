// Main question/Image list for the game.
// I kept source + nasaId here so every image still has a clear origin.
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
    imageUrl: "https://images-assets.nasa.gov/image/PIA20581/PIA20581~small.jpg",
    nasaId: "PIA20581",
    source: "NASA Image and Video Library",
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

const gameModes = {
  quick: {
    label: "Quick",
    rounds: 3,
    index: 0,
    hints: 1,
    description: "A fast 3-round run for a quick challenge."
  },
  classic: {
    label: "Classic",
    rounds: 5,
    index: 1,
    hints: 2,
    description: "The standard experience with 5 rounds."
  },
  timed: {
    label: "Timed",
    rounds: 5,
    index: 2,
    hints: 1,
    seconds: 10,
    description: "Race against the clock and answer before time runs out."
  },
  blind: {
    label: "Blind Reveal",
    rounds: 5,
    index: 3,
    hints: 1,
    seconds: 15,
    description: "A hidden image slowly reveals itself, the countdown runs, and every reveal lowers the reward."
  },
  daily: {
    label: "Daily",
    rounds: 1,
    index: null,
    hints: 0,
    description: "One shared image per day, same challenge for everyone."
  }
};

// Small DOM grab section so everything important is up here in one place.
const screens = {
  start: document.getElementById("start-screen"),
  game: document.getElementById("game-screen"),
  end: document.getElementById("end-screen")
};

const gamePanel = document.querySelector(".game-panel");
const endPanel = document.querySelector(".end-panel");
const modeButtons = document.querySelectorAll(".mode-card");
const modeGrid = document.getElementById("mode-grid");
const mobileModeSelect = document.getElementById("mobile-mode-select");
const modeDescription = document.getElementById("mode-description");
const startButton = document.getElementById("start-button");
const dailyButton = document.getElementById("daily-button");
const helpWidget = document.getElementById("help-widget");
const helpToggleButton = document.getElementById("help-toggle-button");
const helpCloseButton = document.getElementById("help-close-button");
const helpPanel = document.getElementById("help-panel");
const homeButtons = document.querySelectorAll(".home-button, .end-home-button");
const playAgainButton = document.getElementById("play-again-button");
const nextButton = document.getElementById("next-button");
const gameHeader = document.querySelector(".game-header");
const roundLabel = document.getElementById("round-label");
const roundValue = document.getElementById("round-value");
const roundProgressBar = document.getElementById("round-progress-bar");
const mistakesLabel = document.getElementById("mistakes-label");
const streakLabel = document.getElementById("streak-label");
const timerLabel = document.getElementById("timer-label");
const scoreLabel = document.getElementById("score-label");
const spaceImage = document.getElementById("space-image");
const imageFrame = document.querySelector(".image-frame");
const confettiLayer = document.getElementById("confetti-layer");
const answersContainer = document.getElementById("answers-container");
const feedbackPanel = document.getElementById("feedback-panel");
const feedbackText = document.getElementById("feedback-text");
const factText = document.getElementById("fact-text");
const sourceText = document.getElementById("source-text");
const hintRow = document.querySelector(".hint-row");
const hintButton = document.getElementById("hint-button");
const hintCount = document.getElementById("hint-count");
const finalHeading = document.getElementById("final-heading");
const finalScore = document.getElementById("final-score");
const runSummaryTitle = document.getElementById("run-summary-title");
const runSummaryText = document.getElementById("run-summary-text");
const ratingText = document.getElementById("rating-text");
const rankBadge = document.getElementById("rank-badge");
const endStatCorrect = document.getElementById("end-stat-correct");
const endStatWrong = document.getElementById("end-stat-wrong");
const endStatAccuracy = document.getElementById("end-stat-accuracy");
const openShareButton = document.getElementById("open-share-button");
const shareModal = document.getElementById("share-modal");
const closeShareButton = document.getElementById("close-share-button");
const sharePreviewText = document.getElementById("share-preview-text");
const copyShareButton = document.getElementById("copy-share-button");
const nativeShareButton = document.getElementById("native-share-button");
const transitionOverlay = document.getElementById("transition-overlay");
const transitionText = document.getElementById("transition-text");
const toastMessage = document.getElementById("toast-message");
const themeToggle = document.getElementById("theme-toggle");
const scoreForm = document.getElementById("score-form");
const savedPlayerName = document.getElementById("saved-player-name");
const playerNameInput = document.getElementById("player-name");
const autoNameForm = document.getElementById("auto-name-form");
const autoPlayerNameInput = document.getElementById("auto-player-name");
const saveMessage = document.getElementById("save-message");
const leaderboardList = document.getElementById("leaderboard-list");
const leaderboardMode = document.getElementById("leaderboard-mode");
const menuScoreboardToggle = document.getElementById("menu-scoreboard-toggle");
const menuScoreboardPanel = document.getElementById("menu-scoreboard-panel");
const menuLeaderboardList = document.getElementById("menu-leaderboard-list");
const menuLeaderboardMode = document.getElementById("menu-leaderboard-mode");
const menuLeaderboardPanelCard = document.querySelector(".menu-leaderboard-panel");
const leaderboardOnlyElements = document.querySelectorAll(".leaderboard-only");

const uiStateTargets = [document.body, gamePanel, endPanel].filter(Boolean);
const uiStateClassMap = {
  transitioning: "is-transitioning",
  answering: "is-answering",
  feedbackOpen: "is-feedback-open",
  roundComplete: "is-round-complete",
  resultsView: "is-results-view"
};

const supabaseUrl = "https://dqevbyrtagkmgesrixrf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxZXZieXJ0YWdrbWdlc3JpeHJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MjA1NTUsImV4cCI6MjA5NzE5NjU1NX0.-OITqkgJLIGi1KPHQcxxdPsccUk6UYwr6kKo5wUVjUc";
const leaderboardTable = "leaderboard";
const leaderboardStorageKey = "spaceguessr-leaderboard";
const playerNameStorageKey = "spaceguessr-player-name";
const dailyPlayedStorageKey = "spaceguessr-daily-played";
const gameThemeStorageKey = "spaceguessr-game-theme";
const mobileThemeLock = window.matchMedia("(max-width: 640px)");
const supabaseClient = window.supabase
  ? window.supabase.createClient(supabaseUrl, supabaseAnonKey)
  : null;

let gameDeck = [];
let randomBag = [];
let currentRound = 0;
let totalRounds = gameModes.classic.rounds;
let score = 0;
let hasAnswered = false;
let selectedModeKey = "classic";
let hasSavedCurrentScore = false;
let wrongAnswerCount = 0;
let correctGuessCount = 0;
let currentStreak = 0;
let bestStreak = 0;
let hintsLeft = 0;
let usedHintThisRound = false;
let timeLeft = 0;
let scoreFeedbackTimer;
let rewardFeedbackTimer;
let streakFeedbackTimer;
let gameOverTimer;
let roundTimer;
let blindRevealTimer;
let blindRevealStepIndex = 0;
let confettiCleanupTimer;
let copyButtonResetTimer;
let roundStatusTimer;
let toastTimer;
let menuLeaderboardCache = null;
let menuLeaderboardPrefetchPromise = null;
let audioContext = null;
let audioMasterGain = null;
const TRANSITION_MIN_DURATION = 420;
const TRANSITION_MAX_DURATION = 2000;
const FEEDBACK_OPEN_DELAY = 220;
const NEXT_BUTTON_DELAY = 380;
const ROUND_PROGRESS_VISIBLE_DURATION = 1500;
const BLIND_REVEAL_INTERVAL = 2500;
const BLIND_REVEAL_STEPS = [0.14, 0.24, 0.36, 0.5, 0.66, 0.84, 1];
const BLIND_REVEAL_POINTS = [80, 70, 60, 50, 40, 30, 20];
const STREAK_BONUS_STEP = 10;
const CONFETTI_COLORS = ["#f2d74e", "#95c3de", "#ff9a91", "#7dd3fc", "#86efac"];
const CONFETTI_COUNT = 56;
const AUDIO_MASTER_LEVEL = 0.22;
const preloadedImageUrls = new Set();
const rankTiers = [
  { min: 0, title: "Space Noob" },
  { min: 50, title: "Asteroid Intern" },
  { min: 100, title: "Space Rookie" },
  { min: 200, title: "Moon Explorer" },
  { min: 300, title: "Star Navigator" },
  { min: 400, title: "Galaxy Brain" },
  { min: 500, title: "Cosmic Genius" },
  { min: 600, title: "Universe Legend" }
];

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
  PIA06062: "hard",
  PIA10063: "medium"
};

spaceLocations.forEach((location) => {
  location.difficulty = locationDifficultyById[location.nasaId] || "medium";
});

function getSupabaseErrorMessage(error, fallbackText) {
  if (!error) {
    return fallbackText;
  }

  const details = [error.message, error.details, error.hint]
    .filter(Boolean)
    .join(" ");

  return details
    ? `${fallbackText} (${details})`
    : fallbackText;
}

function applyGameTheme(themeName) {
  document.body.classList.remove("game-ui-dark");

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", "false");
    themeToggle.setAttribute("aria-label", "Game UI stays in light mode");
  }

  localStorage.setItem(gameThemeStorageKey, "light");
}

function loadGameTheme() {
  applyGameTheme("light");
}

function syncThemeForViewport() {
  applyGameTheme("light");
}

function ensureAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioContextClass();
    audioMasterGain = audioContext.createGain();
    audioMasterGain.gain.value = AUDIO_MASTER_LEVEL;
    audioMasterGain.connect(audioContext.destination);
  }

  if (audioContext.state === "suspended") {
    void audioContext.resume().catch(() => {});
  }

  return audioContext;
}

function scheduleTone(startTime, frequency, duration, volume, type = "sine") {
  const activeAudioContext = ensureAudioContext();

  if (!activeAudioContext || !audioMasterGain) {
    return;
  }

  const oscillator = activeAudioContext.createOscillator();
  const gainNode = activeAudioContext.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gainNode.gain.setValueAtTime(0.0001, startTime);
  gainNode.gain.exponentialRampToValueAtTime(Math.max(0.0001, volume), startTime + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gainNode);
  gainNode.connect(audioMasterGain);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.04);
}

function playSoundEffect(effectName) {
  const activeAudioContext = ensureAudioContext();

  if (!activeAudioContext) {
    return;
  }

  const now = activeAudioContext.currentTime + 0.01;

  if (effectName === "correct") {
    scheduleTone(now, 523.25, 0.12, 0.12, "triangle");
    scheduleTone(now + 0.1, 659.25, 0.16, 0.11, "triangle");
    scheduleTone(now + 0.2, 783.99, 0.22, 0.1, "sine");
    return;
  }

  if (effectName === "wrong") {
    scheduleTone(now, 220, 0.16, 0.11, "sawtooth");
    scheduleTone(now + 0.08, 174.61, 0.22, 0.1, "triangle");
    return;
  }

  if (effectName === "streak") {
    scheduleTone(now, 659.25, 0.08, 0.1, "square");
    scheduleTone(now + 0.07, 783.99, 0.1, 0.09, "square");
    scheduleTone(now + 0.14, 987.77, 0.14, 0.08, "triangle");
    return;
  }

  if (effectName === "hint") {
    scheduleTone(now, 440, 0.08, 0.06, "sine");
    scheduleTone(now + 0.08, 587.33, 0.1, 0.05, "triangle");
    return;
  }

  if (effectName === "finish-good") {
    scheduleTone(now, 392, 0.16, 0.12, "triangle");
    scheduleTone(now + 0.1, 523.25, 0.2, 0.11, "triangle");
    scheduleTone(now + 0.22, 659.25, 0.3, 0.1, "sine");
    scheduleTone(now + 0.36, 783.99, 0.42, 0.08, "sine");
    return;
  }

  if (effectName === "finish-bad") {
    scheduleTone(now, 311.13, 0.16, 0.1, "triangle");
    scheduleTone(now + 0.12, 261.63, 0.24, 0.09, "triangle");
  }
}

function isInfiniteMode() {
  return false;
}

function isDailyMode() {
  return selectedModeKey === "daily";
}

function isTimedMode() {
  return selectedModeKey === "timed";
}

function isBlindRevealMode() {
  return selectedModeKey === "blind";
}

function hasRoundCountdown() {
  return isTimedMode() || isBlindRevealMode();
}

function hasLeaderboardMode() {
  return !isDailyMode();
}

function getActiveModeConfig() {
  return gameModes[selectedModeKey];
}

function updateHintUI() {
  hintRow.classList.toggle("hidden", isDailyMode());

  if (isDailyMode()) {
    return;
  }

  hintButton.disabled = hasAnswered || usedHintThisRound || hintsLeft <= 0;
  hintCount.textContent = String(hintsLeft);

  if (usedHintThisRound) {
    hintButton.classList.add("used");
    return;
  }

  if (hintsLeft <= 0) {
    hintButton.classList.add("used");
    return;
  }

  hintButton.classList.remove("used");
}

function updateTimerUI() {
  if (!hasRoundCountdown()) {
    timerLabel.classList.add("hidden");
    return;
  }

  timerLabel.classList.remove("hidden");
  timerLabel.textContent = String(timeLeft);
  timerLabel.setAttribute("aria-label", `${timeLeft} seconds remaining`);
  timerLabel.classList.toggle("danger", timeLeft <= 5);
}

function stopRoundTimer() {
  clearInterval(roundTimer);
}

function startRoundTimer() {
  if (!hasRoundCountdown()) {
    updateTimerUI();
    return;
  }

  stopRoundTimer();
  timeLeft = getActiveModeConfig().seconds;
  updateTimerUI();

  roundTimer = setInterval(() => {
    timeLeft -= 1;
    updateTimerUI();

    if (timeLeft <= 0) {
      stopRoundTimer();
      handleAnswer(null, "__timeout__");
    }
  }, 1000);
}

function stopBlindRevealTimer() {
  window.clearInterval(blindRevealTimer);
  blindRevealTimer = null;
}

function getBlindRevealPoints() {
  const safeIndex = Math.min(blindRevealStepIndex, BLIND_REVEAL_POINTS.length - 1);
  return BLIND_REVEAL_POINTS[safeIndex];
}

function getStreakBonus(streakValue) {
  return Math.max(0, streakValue - 1) * STREAK_BONUS_STEP;
}

function getPointsForCorrectGuess(streakValue) {
  const basePoints = isBlindRevealMode() ? getBlindRevealPoints() : 50;
  const streakBonus = getStreakBonus(streakValue);

  return {
    basePoints,
    streakBonus,
    totalPoints: basePoints + streakBonus
  };
}

function setHelpPanelOpen(isOpen) {
  if (!helpWidget || !helpToggleButton || !helpPanel) {
    return;
  }

  helpWidget.classList.toggle("open", isOpen);
  helpPanel.classList.toggle("open", isOpen);
  helpPanel.setAttribute("aria-hidden", String(!isOpen));
  helpToggleButton.setAttribute("aria-expanded", String(isOpen));
}

function setBlindRevealProgress(progress) {
  const normalizedProgress = Math.max(0, Math.min(1, progress));
  const revealPercent = `${(normalizedProgress * 100).toFixed(2)}%`;
  const blurPixels = `${(18 - (normalizedProgress * 18)).toFixed(2)}px`;

  spaceImage.style.setProperty("--blind-reveal-progress", revealPercent);
  spaceImage.style.setProperty("--blind-reveal-blur", blurPixels);
}

function applyBlindRevealState() {
  const imageFrame = spaceImage.parentElement;

  if (!imageFrame) {
    return;
  }

  imageFrame.classList.toggle("blind-reveal-mode", isBlindRevealMode());

  if (!isBlindRevealMode()) {
    setBlindRevealProgress(1);
    stopBlindRevealTimer();
  }
}

function startBlindRevealTimer() {
  if (!isBlindRevealMode()) {
    applyBlindRevealState();
    return;
  }

  stopBlindRevealTimer();
  applyBlindRevealState();
  blindRevealStepIndex = 0;
  setBlindRevealProgress(BLIND_REVEAL_STEPS[blindRevealStepIndex]);

  blindRevealTimer = window.setInterval(() => {
    blindRevealStepIndex += 1;
    const nextProgress = BLIND_REVEAL_STEPS[Math.min(blindRevealStepIndex, BLIND_REVEAL_STEPS.length - 1)];
    setBlindRevealProgress(nextProgress);

    if (blindRevealStepIndex >= BLIND_REVEAL_STEPS.length - 1) {
      stopBlindRevealTimer();
    }
  }, BLIND_REVEAL_INTERVAL);
}

function waitForNextFrame() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => resolve());
  });
}

async function animateHintRemoval(buttonsToRemove) {
  const visibleButtons = Array.from(answersContainer.querySelectorAll(".answer-button"))
    .filter((button) => !button.hidden);
  const firstRects = new Map(
    visibleButtons.map((button) => [button, button.getBoundingClientRect()])
  );

  buttonsToRemove.forEach((button) => {
    button.disabled = true;
    button.setAttribute("aria-hidden", "true");
    button.classList.add("hint-removing");
  });

  await waitForNextFrame();
  await new Promise((resolve) => {
    setTimeout(resolve, 260);
  });

  buttonsToRemove.forEach((button) => {
    button.classList.remove("hint-removing");
    button.classList.add("hint-hidden");
    button.hidden = true;
  });

  await waitForNextFrame();

  visibleButtons
    .filter((button) => !buttonsToRemove.includes(button) && !button.hidden)
    .forEach((button) => {
      const firstRect = firstRects.get(button);
      const lastRect = button.getBoundingClientRect();
      const deltaX = firstRect.left - lastRect.left;
      const deltaY = firstRect.top - lastRect.top;

      if (deltaX === 0 && deltaY === 0) {
        return;
      }

      button.animate(
        [
          {
            transform: `translate(${deltaX}px, ${deltaY}px) scale(0.985)`,
            boxShadow: "0 18px 38px rgba(15, 23, 42, 0.14)"
          },
          {
            transform: "translate(0, 0) scale(1)",
            boxShadow: ""
          }
        ],
        {
          duration: 340,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)"
        }
      );
    });
}

async function useHint() {
  if (isDailyMode()) {
    return;
  }

  if (hasAnswered || usedHintThisRound || hintsLeft <= 0) {
    return;
  }

  const currentQuestion = gameDeck[currentRound];
  const answerButtons = Array.from(answersContainer.querySelectorAll(".answer-button"));
  const wrongButtons = shuffleArray(
    answerButtons.filter((button) => button.textContent !== currentQuestion.correctAnswer)
  ).slice(0, 2);

  hintsLeft -= 1;
  usedHintThisRound = true;
  playSoundEffect("hint");
  updateHintUI();
  await animateHintRemoval(wrongButtons);
}

function getDailyKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function getDailyQuestion() {
  const dailyKey = getDailyKey();
  const seed = [...dailyKey].reduce((total, character) => total + character.charCodeAt(0), 0);
  return spaceLocations[seed % spaceLocations.length];
}

function hasPlayedDailyToday() {
  return localStorage.getItem(dailyPlayedStorageKey) === getDailyKey();
}

function markDailyAsPlayed() {
  localStorage.setItem(dailyPlayedStorageKey, getDailyKey());
}

function updateDailyAvailability() {
  const isLocked = hasPlayedDailyToday();

  dailyButton.disabled = isLocked;
  dailyButton.classList.toggle("locked", isLocked);
  dailyButton.setAttribute(
    "aria-label",
    isLocked ? "Daily challenge already played today" : "Start daily challenge"
  );
}

function updateStats() {
  const totalGuesses = correctGuessCount + wrongAnswerCount;
  const accuracy = totalGuesses === 0
    ? 0
    : Math.round((correctGuessCount / totalGuesses) * 100);

  endStatCorrect.textContent = String(correctGuessCount);
  endStatWrong.textContent = String(wrongAnswerCount);
  endStatAccuracy.textContent = `${accuracy}%`;
}

function getAccuracyValue() {
  const totalGuesses = correctGuessCount + wrongAnswerCount;

  if (totalGuesses === 0) {
    return 0;
  }

  return Math.round((correctGuessCount / totalGuesses) * 100);
}

function getFinishedRounds() {
  return totalRounds;
}

function getRankInfo(scoreValue) {
  let currentRank = rankTiers[0];

  for (let i = 0; i < rankTiers.length; i += 1) {
    if (scoreValue >= rankTiers[i].min) {
      currentRank = rankTiers[i];
    }
  }

  return currentRank;
}

function getShareText() {
  const modeLabel = gameModes[selectedModeKey].label;
  const roundsText = `${getFinishedRounds()} round${getFinishedRounds() === 1 ? "" : "s"}`;
  const accuracyText = `${getAccuracyValue()}% accuracy`;
  const streakText = bestStreak > 1 ? ` | best streak ${bestStreak}` : "";

  if (isDailyMode()) {
    const dailyResult = score > 0 ? "Success" : "Failed";
    return `I played today's SpaceGuessr Daily: ${dailyResult} | ${accuracyText}${streakText} https://blizz606.github.io/SpaceGuessr`;
  }

  return `I finished a ${modeLabel} run in SpaceGuessr with ${score} points | ${roundsText} | ${accuracyText}${streakText} https://blizz606.github.io/SpaceGuessr`;
}

function updateShareCard() {
  const shareText = getShareText();

  sharePreviewText.textContent = shareText;
  nativeShareButton.classList.toggle("hidden", typeof navigator.share !== "function");
}

function toggleShareModal(forceOpen) {
  const shouldOpen = typeof forceOpen === "boolean"
    ? forceOpen
    : shareModal.classList.contains("hidden");

  shareModal.classList.toggle("hidden", !shouldOpen);
  shareModal.classList.toggle("open", shouldOpen);
  shareModal.setAttribute("aria-hidden", String(!shouldOpen));

  if (shouldOpen) {
    updateShareCard();
  }
}

async function copyShareText() {
  const shareText = getShareText();

  try {
    await navigator.clipboard.writeText(shareText);
    clearTimeout(copyButtonResetTimer);
    copyShareButton.classList.add("copied");
    copyButtonResetTimer = setTimeout(() => {
      copyShareButton.classList.remove("copied");
    }, 1200);
  } catch {}
}

async function shareRun() {
  if (typeof navigator.share !== "function") {
    return;
  }

  try {
    await navigator.share({
      title: "SpaceGuessr",
      text: getShareText(),
      url: "https://blizz606.github.io/SpaceGuessr"
    });
  } catch (error) {
    if (error?.name === "AbortError") {
      return;
    }
  }
}

function updateStreakLabel() {
  streakLabel.textContent = `Streak: ${currentStreak}`;
  streakLabel.classList.toggle("active", currentStreak >= 2);
}

function showStreakFeedback() {
  clearTimeout(streakFeedbackTimer);
  streakLabel.classList.remove("boost");
  void streakLabel.offsetWidth;
  streakLabel.classList.add("boost");
  streakFeedbackTimer = setTimeout(() => {
    streakLabel.classList.remove("boost");
  }, 760);
}

function clearConfetti() {
  clearTimeout(confettiCleanupTimer);

  if (!confettiLayer) {
    return;
  }

  confettiLayer.innerHTML = "";
  confettiLayer.classList.remove("is-active");
}

function showConfetti() {
  if (!confettiLayer) {
    return;
  }

  clearConfetti();
  confettiLayer.classList.add("is-active");

  for (let index = 0; index < CONFETTI_COUNT; index += 1) {
    const piece = document.createElement("span");
    const color = CONFETTI_COLORS[index % CONFETTI_COLORS.length];
    const left = 4 + Math.random() * 92;
    const delay = Math.random() * 0.35;
    const duration = 3.4 + Math.random() * 1.4;
    const drift = Math.random() * 24 - 12;
    const rotate = 720 + Math.random() * 900;
    const size = 8 + Math.random() * 9;

    piece.className = "confetti";
    piece.style.setProperty("--confetti-color", color);
    piece.style.setProperty("--confetti-left", `${left.toFixed(2)}%`);
    piece.style.setProperty("--confetti-delay", `${delay.toFixed(2)}s`);
    piece.style.setProperty("--confetti-duration", `${duration.toFixed(2)}s`);
    piece.style.setProperty("--confetti-drift", `${drift.toFixed(2)}vw`);
    piece.style.setProperty("--confetti-drift-a", `${(drift * -0.45).toFixed(2)}vw`);
    piece.style.setProperty("--confetti-drift-b", `${(drift * 0.55).toFixed(2)}vw`);
    piece.style.setProperty("--confetti-drift-c", `${(drift * -0.85).toFixed(2)}vw`);
    piece.style.setProperty("--confetti-rotate", `${rotate.toFixed(0)}deg`);
    piece.style.setProperty("--confetti-size", `${size.toFixed(0)}px`);
    piece.style.setProperty("--confetti-radius", index % 3 === 0 ? "999px" : "3px");
    confettiLayer.appendChild(piece);
  }

  confettiCleanupTimer = setTimeout(clearConfetti, 4600);
}

function updateMistakesLabel() {
  mistakesLabel.classList.add("hidden");
  mistakesLabel.innerHTML = "";
}

function updateRoundDisplay() {
  const currentRoundNumber = currentRound + 1;
  roundValue.textContent = `${currentRoundNumber} / ${totalRounds}`;

  roundLabel.classList.remove("show-progress");
  roundLabel.classList.remove("round-status-good", "round-status-bad");
  roundProgressBar.style.transform = `scaleX(${Math.min(currentRoundNumber / totalRounds, 1)})`;
  roundLabel.setAttribute(
    "aria-label",
    `Round ${currentRoundNumber} of ${totalRounds}`
  );
}

function showRoundStatus(message, isGood) {
  clearTimeout(roundStatusTimer);
  roundValue.textContent = message;
  roundLabel.classList.toggle("round-status-good", isGood);
  roundLabel.classList.toggle("round-status-bad", !isGood);
  roundStatusTimer = setTimeout(() => {
    updateRoundDisplay();
  }, 1150);
}

async function playRoundProgressTransition(fromRound = currentRound) {
  if (fromRound >= totalRounds - 1) {
    return;
  }

  clearTimeout(roundStatusTimer);

  const currentProgress = Math.min((fromRound + 1) / totalRounds, 1);
  const nextProgress = Math.min((fromRound + 2) / totalRounds, 1);

  roundLabel.classList.remove("round-status-good", "round-status-bad");
  roundLabel.classList.add("show-progress");
  roundProgressBar.style.transform = `scaleX(${currentProgress})`;
  void roundProgressBar.offsetWidth;
  roundProgressBar.style.transform = `scaleX(${nextProgress})`;

  await wait(ROUND_PROGRESS_VISIBLE_DURATION);
  updateRoundDisplay();
}

function updateLeaderboardVisibility() {
  leaderboardOnlyElements.forEach((element) => {
    element.classList.toggle("hidden", !hasLeaderboardMode());
  });

  updateMistakesLabel();
}

function syncGameHeaderLayout() {
  gameHeader.classList.toggle("timed-layout", hasRoundCountdown());
}

function selectMode(modeKey) {
  selectedModeKey = modeKey;
  const activeMode = getActiveModeConfig();
  const selectedIndex = gameModes[selectedModeKey].index;

  modeButtons.forEach((button) => {
    const isSelected = button.dataset.mode === selectedModeKey;
    button.classList.toggle("selected", isSelected);
  });

  if (selectedIndex !== null) {
    modeGrid.style.setProperty("--selected-mode-index", selectedIndex);
  }

  modeDescription.textContent = activeMode.description;
  startButton.textContent = `Start ${activeMode.label}`;
  syncGameHeaderLayout();
  updateLeaderboardVisibility();
  if (mobileModeSelect) {
    mobileModeSelect.value = modeKey;
  }

  if (menuScoreboardPanel && menuScoreboardPanel.classList.contains("open")) {
    renderLeaderboard(menuLeaderboardList, menuLeaderboardMode, null);
  }

  menuLeaderboardCache = null;
  void preloadMenuLeaderboard(true);
}

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => {
    screen.classList.remove("active");
  });

  screens[screenName].classList.add("active");
  if (themeToggle) {
    themeToggle.hidden = screenName !== "start";
    themeToggle.setAttribute("aria-hidden", String(screenName !== "start"));
  }
  setUiState("resultsView", screenName === "end");

  if (screenName !== "game") {
    setUiState("answering", false);
    setUiState("feedbackOpen", false);
    setUiState("roundComplete", false);
  }
}

function isScreenActive(screenName) {
  return screens[screenName].classList.contains("active");
}

function isTypingTarget(target) {
  return target instanceof HTMLElement
    && (
      target.tagName === "INPUT"
      || target.tagName === "TEXTAREA"
      || target.isContentEditable
    );
}

function setTransitionState(isVisible, label = "Loading mission...") {
  transitionText.textContent = label;
  transitionOverlay.classList.toggle("visible", isVisible);
  transitionOverlay.setAttribute("aria-hidden", String(!isVisible));
  setUiState("transitioning", isVisible);
}

function setUiState(stateKey, isActive) {
  const stateClassName = uiStateClassMap[stateKey];

  if (!stateClassName) {
    return;
  }

  uiStateTargets.forEach((element) => {
    element.classList.toggle(stateClassName, isActive);
  });
}

function replayClass(element, className, duration = 520) {
  if (!element) {
    return;
  }

  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  window.setTimeout(() => {
    element.classList.remove(className);
  }, duration);
}

function showToast(message, type = "error") {
  if (!toastMessage || !message) {
    return;
  }

  clearTimeout(toastTimer);
  toastMessage.textContent = message;
  toastMessage.classList.remove("hidden", "error", "info");
  toastMessage.classList.add(type);

  toastTimer = window.setTimeout(() => {
    toastMessage.classList.add("hidden");
  }, 4200);
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function preloadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();

    image.onload = () => resolve(src);
    image.onerror = () => resolve(src);
    image.src = src;
  });
}

function preloadImageOnce(src) {
  if (!src || preloadedImageUrls.has(src)) {
    return Promise.resolve(src);
  }

  return preloadImage(src).then((loadedSrc) => {
    preloadedImageUrls.add(loadedSrc);
    return loadedSrc;
  });
}

function getQuestionPool() {
  return spaceLocations;
}

async function preloadImagesInBackground(imageUrls) {
  for (const imageUrl of imageUrls) {
    await preloadImageOnce(imageUrl);
    await wait(0);
  }
}

function buildInitialGameDeck() {
  if (isDailyMode()) {
    return [getDailyQuestion()];
  }

  const selectedQuestionIds = new Set();

  return Array.from({ length: totalRounds }, () => {
    const nextQuestion = drawRandomQuestion(selectedQuestionIds);
    selectedQuestionIds.add(nextQuestion.nasaId);
    return nextQuestion;
  });
}

function goHome() {
  clearTimeout(gameOverTimer);
  clearTimeout(streakFeedbackTimer);
  stopRoundTimer();
  hasAnswered = false;
  feedbackPanel.classList.remove("open");
  feedbackPanel.classList.remove("feedback-good", "feedback-bad");
  feedbackPanel.setAttribute("aria-hidden", "true");
  gamePanel.classList.remove("round-feedback-good", "round-feedback-bad");
  feedbackText.textContent = "";
  factText.textContent = "";
  sourceText.textContent = "";
  nextButton.disabled = false;
  nextButton.classList.remove("hidden", "staged", "ready-pulse");
  clearTimeout(roundStatusTimer);
  stopBlindRevealTimer();
  clearConfetti();
  applyBlindRevealState();
  setUiState("answering", false);
  setUiState("feedbackOpen", false);
  setUiState("roundComplete", false);
  setUiState("resultsView", false);
  setTransitionState(false);
  toggleShareModal(false);
  updateDailyAvailability();
  showScreen("start");
}

function getAnswerButtons() {
  return Array.from(answersContainer.querySelectorAll(".answer-button"));
}

function handleKeyboardAnswer(answerIndex) {
  if (!isScreenActive("game") || hasAnswered) {
    return;
  }

  const answerButtons = getAnswerButtons();
  const selectedButton = answerButtons[answerIndex];

  if (!selectedButton || selectedButton.disabled) {
    return;
  }

  void handleAnswer(selectedButton, selectedButton.textContent);
}

function shuffleArray(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
}

function drawRandomQuestion(excludedIds = new Set()) {
  if (isDailyMode()) {
    return getDailyQuestion();
  }

  const availableQuestions = randomBag.filter((question) => !excludedIds.has(question.nasaId));

  if (availableQuestions.length > 0) {
    const nextQuestion = availableQuestions[availableQuestions.length - 1];
    const nextQuestionIndex = randomBag.findIndex((question) => question.nasaId === nextQuestion.nasaId);

    if (nextQuestionIndex >= 0) {
      randomBag.splice(nextQuestionIndex, 1);
    }

    return nextQuestion;
  }

  const freshPool = getQuestionPool().filter((question) => !excludedIds.has(question.nasaId));

  if (freshPool.length === 0) {
    return getQuestionPool()[Math.floor(Math.random() * getQuestionPool().length)];
  }

  randomBag = shuffleArray(freshPool);
  return randomBag.pop();
}

// Reset the whole game state and then jump into the first round.
async function startGame(modeKey = selectedModeKey) {
  if (modeKey === "daily" && hasPlayedDailyToday()) {
    updateDailyAvailability();
    showScreen("start");
    return;
  }

  selectedModeKey = modeKey;
  totalRounds = getActiveModeConfig().rounds;
  randomBag = shuffleArray(getQuestionPool());
  gameDeck = [];
  currentRound = 0;
  score = 0;
  hasAnswered = false;
  hasSavedCurrentScore = false;
  wrongAnswerCount = 0;
  correctGuessCount = 0;
  currentStreak = 0;
  bestStreak = 0;
  hintsLeft = getActiveModeConfig().hints;
  usedHintThisRound = false;
  blindRevealStepIndex = 0;
  timeLeft = getActiveModeConfig().seconds || 0;
  saveMessage.textContent = "";
  toggleAutoNameForm(false);
  if (playerNameInput) {
    playerNameInput.value = localStorage.getItem(playerNameStorageKey) || "";
  }
  clearTimeout(scoreFeedbackTimer);
  clearTimeout(rewardFeedbackTimer);
  clearTimeout(streakFeedbackTimer);
  clearTimeout(gameOverTimer);
  clearTimeout(roundStatusTimer);
  clearConfetti();
  stopBlindRevealTimer();
  scoreLabel.classList.remove("penalty");
  scoreLabel.classList.remove("reward");
  setUiState("answering", false);
  setUiState("feedbackOpen", false);
  setUiState("roundComplete", false);
  setUiState("resultsView", false);
  updateScoreFormState();
  updateLeaderboardVisibility();
  updateStats();
  updateStreakLabel();
  updateHintUI();
  updateTimerUI();
  applyBlindRevealState();

  if (isDailyMode()) {
    markDailyAsPlayed();
    updateDailyAvailability();
  }

  // Build the round list first so the opening preload knows what to load.
  gameDeck = buildInitialGameDeck();
  updateScore();
  showScreen("game");
  await renderRound(true);
}

function updateScore() {
  scoreLabel.textContent = `Score: ${score}`;
  scoreLabel.classList.toggle("zero-score", score === 0);
}

function setScore(nextScore) {
  // Penalties should feel clear, but the visible score never goes below zero.
  score = Math.max(0, nextScore);
  updateScore();
}

function showScorePenaltyFeedback() {
  clearTimeout(scoreFeedbackTimer);
  scoreLabel.classList.add("penalty");
  scoreFeedbackTimer = setTimeout(() => {
    scoreLabel.classList.remove("penalty");
  }, 650);
}

function showCorrectAnswerReward() {
  clearTimeout(rewardFeedbackTimer);
  scoreLabel.classList.add("reward");
  rewardFeedbackTimer = setTimeout(() => {
    scoreLabel.classList.remove("reward");
  }, 760);
}

function endGame() {
  clearTimeout(gameOverTimer);
  stopRoundTimer();
  setUiState("answering", false);
  setUiState("feedbackOpen", false);
  setUiState("roundComplete", false);
  finalHeading.textContent = isDailyMode() ? "Daily result" : "Your final score";
  saveMessage.textContent = "";
  updateLeaderboardVisibility();
  ratingText.textContent = isDailyMode() ? getDailyResultText() : getRating(score);
  rankBadge.classList.toggle("daily-badge", isDailyMode());
  const runSummary = getRunSummary();
  runSummaryTitle.textContent = runSummary.title;
  runSummaryText.textContent = runSummary.text;
  updateShareCard();

  renderLeaderboard();

  showScreen("end");
  if (isDailyMode()) {
    playSoundEffect(score > 0 ? "finish-good" : "finish-bad");
    showDailyResult();
    return;
  }

  playSoundEffect(score >= 120 || getAccuracyValue() >= 70 ? "finish-good" : "finish-bad");
  animateFinalScore(score);
  void autoSaveCurrentScore();
}

// This fills the UI with the current question and fresh answer buttons.
async function renderRound(showTransition = false) {
  clearConfetti();
  if (imageFrame) {
    imageFrame.classList.remove("round-resolve-good", "round-resolve-bad", "round-final-reveal");
  }

  if (!gameDeck[currentRound]) {
    gameDeck[currentRound] = drawRandomQuestion();
  }

  const currentQuestion = gameDeck[currentRound];
  const answerOptions = shuffleArray([
    currentQuestion.correctAnswer,
    ...currentQuestion.wrongAnswers
  ]);

  updateRoundDisplay();
  updateMistakesLabel();
  spaceImage.classList.remove("loaded");
  spaceImage.onload = () => {
    spaceImage.classList.add("loaded");
  };
  spaceImage.src = currentQuestion.imageUrl;
  if (spaceImage.complete) {
    spaceImage.classList.add("loaded");
  }
  spaceImage.alt = `Space image for ${currentQuestion.correctAnswer}`;
  applyBlindRevealState();
  replayClass(imageFrame, "round-intro", 1200);

  if (showTransition) {
    setTransitionState(true, "Preparing mission...");
    const currentImageReady = Promise.all([
      preloadImageOnce(currentQuestion.imageUrl),
      wait(TRANSITION_MIN_DURATION)
    ]);
    const allUpcomingImageUrls = gameDeck
      .slice(currentRound + 1)
      .map((question) => question.imageUrl);

    // Start loading the rest quietly in the background.
    void preloadImagesInBackground(allUpcomingImageUrls);

    await Promise.race([
      currentImageReady,
      wait(TRANSITION_MAX_DURATION)
    ]);
  }
  answersContainer.innerHTML = "";
  feedbackPanel.classList.remove("open");
  feedbackPanel.classList.remove("feedback-good", "feedback-bad");
  feedbackPanel.setAttribute("aria-hidden", "true");
  gamePanel.classList.remove("round-feedback-good", "round-feedback-bad");
  feedbackText.textContent = "";
  factText.textContent = "";
  sourceText.textContent = "";
  nextButton.disabled = false;
  nextButton.classList.remove("hidden", "ready-pulse");
  nextButton.classList.add("staged");
  hasAnswered = false;
  usedHintThisRound = false;
  setUiState("answering", false);
  setUiState("feedbackOpen", false);
  setUiState("roundComplete", false);
  updateHintUI();
  startRoundTimer();
  startBlindRevealTimer();

  if (showTransition) {
    setTransitionState(false);
  }

  answerOptions.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.style.setProperty("--answer-index", index);
    button.textContent = answer;
    button.addEventListener("click", () => {
      void handleAnswer(button, answer);
    });
    answersContainer.appendChild(button);
  });
}

// Main answer logic: score, feedback, highlights and reveal timing all happen here.
async function handleAnswer(selectedButton, selectedAnswer) {
  if (hasAnswered) {
    return;
  }

  hasAnswered = true;
  setUiState("answering", true);
  stopRoundTimer();
  timerLabel.classList.add("hidden");
  stopBlindRevealTimer();
  if (isBlindRevealMode()) {
    setBlindRevealProgress(1);
  }

  const currentQuestion = gameDeck[currentRound];
  const answerButtons = answersContainer.querySelectorAll(".answer-button");
  const isTimeOut = selectedAnswer === "__timeout__";
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const panelFeedbackClass = isCorrect ? "round-feedback-good" : "round-feedback-bad";
  const feedbackAnimationClass = isCorrect ? "feedback-good" : "feedback-bad";
  let earnedPoints = 0;
  let streakBonus = 0;

  if (isCorrect) {
    correctGuessCount += 1;
    currentStreak += 1;
    bestStreak = Math.max(bestStreak, currentStreak);
    const pointBreakdown = getPointsForCorrectGuess(currentStreak);
    earnedPoints = pointBreakdown.totalPoints;
    streakBonus = pointBreakdown.streakBonus;
    setScore(score + earnedPoints);
    showCorrectAnswerReward();
    showConfetti();
    playSoundEffect("correct");
    if (currentStreak >= 2) {
      showStreakFeedback();
      playSoundEffect("streak");
    }
  } else {
    setScore(score - 25);
    showScorePenaltyFeedback();
    wrongAnswerCount += 1;
    currentStreak = 0;
    playSoundEffect("wrong");
  }

  replayClass(gamePanel, panelFeedbackClass, 1800);
  replayClass(imageFrame, isCorrect ? "round-resolve-good" : "round-resolve-bad", 1200);
  replayClass(imageFrame, "round-final-reveal", 950);
  showRoundStatus(isCorrect ? "Locked in" : "Try again", isCorrect);

  updateMistakesLabel();
  updateStats();
  updateStreakLabel();
  updateHintUI();

  answerButtons.forEach((button) => {
    const isMatchingCorrectAnswer = button.textContent === currentQuestion.correctAnswer;
    button.disabled = true;
    button.classList.add("locked");
    button.classList.toggle("correct", isMatchingCorrectAnswer);
    button.classList.toggle("dimmed", button !== selectedButton && !isMatchingCorrectAnswer);

    if (button === selectedButton && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  if (selectedButton) {
    selectedButton.classList.add("answered");
  }

  feedbackText.textContent = isCorrect
    ? streakBonus > 0
      ? `+${earnedPoints} points. +${streakBonus} streak bonus. ${currentStreak}x streak.`
      : `+${earnedPoints} points. Clean guess.`
    : isTimeOut
      ? `Time is up. The correct answer was ${currentQuestion.correctAnswer}.`
      : `Not quite. The correct answer was ${currentQuestion.correctAnswer}.`;

  factText.textContent = currentQuestion.fact;
  sourceText.textContent = `Source: ${currentQuestion.source} (${currentQuestion.nasaId})`;
  await wait(FEEDBACK_OPEN_DELAY);
  feedbackPanel.classList.add("open");
  feedbackPanel.setAttribute("aria-hidden", "false");
  replayClass(feedbackPanel, feedbackAnimationClass, 1400);
  setUiState("feedbackOpen", true);
  setUiState("roundComplete", true);
  setUiState("answering", false);

  await wait(Math.max(0, NEXT_BUTTON_DELAY - FEEDBACK_OPEN_DELAY));
  nextButton.classList.remove("staged");
  replayClass(nextButton, "ready-pulse", 1100);
}

function getRating(scoreValue) {
  return getRankInfo(scoreValue).title;
}

function getDailyResultText() {
  return score > 0
    ? "You nailed today's image."
    : "Not today. Come back for the next one.";
}

function getRunSummary() {
  const accuracy = getAccuracyValue();
  const modeLabel = getActiveModeConfig().label;

  if (isDailyMode()) {
    return score > 0
      ? {
          title: "Daily mission cleared",
          text: `You solved today's shared ${modeLabel.toLowerCase()} challenge with ${accuracy}% accuracy.`
        }
      : {
          title: "Daily mission missed",
          text: "Today's shared challenge got away, but the next daily image is another shot at it."
        };
  }

  if (accuracy >= 90 && bestStreak >= 4) {
    return {
      title: "Near flawless orbit",
      text: `Clinical answers, a ${bestStreak}x streak, and almost no wasted motion.`
    };
  }

  if (score >= 220 && bestStreak >= 3) {
    return {
      title: "Momentum run",
      text: `You built real pressure with a ${bestStreak}x streak and kept the score climbing.`
    };
  }

  if (isBlindRevealMode() && score >= 180) {
    return {
      title: "Reveal sniper",
      text: "You were reading the image early and cashing in before the easy clues appeared."
    };
  }

  if (isTimedMode() && accuracy >= 70) {
    return {
      title: "Fast hands",
      text: `Strong reads under the clock. ${accuracy}% accuracy in timed play is the real deal.`
    };
  }

  if (accuracy >= 70) {
    return {
      title: "Sharp navigation",
      text: `You kept the run tidy and landed ${accuracy}% of your guesses.`
    };
  }

  if (bestStreak >= 3) {
    return {
      title: "Flash of brilliance",
      text: `That ${bestStreak}x streak showed you had the read, even if the run swung around later.`
    };
  }

  if (score === 0) {
    return {
      title: "Rough landing",
      text: "This one never really ignited, but one clean streak changes the whole board."
    };
  }

  return {
    title: "Steady flight",
    text: "A balanced run with room to push your streak higher on the next launch."
  };
}

function showDailyResult() {
  const isSuccess = score > 0;
  finalScore.classList.remove("zero-score");
  finalScore.classList.toggle("daily-result", true);
  finalScore.classList.toggle("success", isSuccess);
  finalScore.classList.toggle("failed", !isSuccess);
  finalScore.textContent = isSuccess ? "Success" : "Failed";
}

function animateFinalScore(targetScore) {
  const duration = 900;
  const startTime = performance.now();
  finalScore.classList.remove("daily-result", "success", "failed");
  finalScore.classList.toggle("zero-score", targetScore === 0);

  function updateScoreCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    finalScore.textContent = `${Math.round(targetScore * easedProgress)} pts`;

    if (progress < 1) {
      requestAnimationFrame(updateScoreCounter);
    }
  }

  finalScore.textContent = "0 pts";
  requestAnimationFrame(updateScoreCounter);
}

function updateScoreFormState() {
  const storedName = localStorage.getItem(playerNameStorageKey);

  if (scoreForm) {
    scoreForm.classList.toggle("has-saved-name", Boolean(storedName));
  }

  if (savedPlayerName) {
    savedPlayerName.textContent = storedName ? `Saving as ${storedName}` : "";
  }
}

function getLeaderboard() {
  const savedScores = localStorage.getItem(leaderboardStorageKey);

  if (!savedScores) {
    return [];
  }

  try {
    return JSON.parse(savedScores);
  } catch {
    return [];
  }
}

function saveLeaderboard(scores) {
  localStorage.setItem(leaderboardStorageKey, JSON.stringify(scores));
}

function getCurrentModeEntries() {
  return getLeaderboard()
    .filter((entry) => (
      entry.mode === selectedModeKey
      && (!isDailyMode() || entry.dailyKey === getDailyKey())
    ))
    .sort((a, b) => b.score - a.score || b.rounds - a.rounds)
    .slice(0, 5);
}

function normalizeName(name) {
  return name.trim().toLowerCase();
}

function upsertLocalScore(scoreEntry) {
  const scores = getLeaderboard();
  const normalizedName = normalizeName(scoreEntry.name);
  const existingIndex = scores.findIndex((entry) => (
    normalizeName(entry.name) === normalizedName && entry.mode === scoreEntry.mode
    && (!scoreEntry.dailyKey || entry.dailyKey === scoreEntry.dailyKey)
  ));

  if (existingIndex === -1) {
    scores.push(scoreEntry);
    saveLeaderboard(scores);
    return "saved";
  }

  const existingEntry = scores[existingIndex];
  const isBetterScore = scoreEntry.score > existingEntry.score;
  const isTieWithMoreRounds = scoreEntry.score === existingEntry.score && scoreEntry.rounds > existingEntry.rounds;

  if (isBetterScore || isTieWithMoreRounds) {
    scores[existingIndex] = {
      ...existingEntry,
      ...scoreEntry
    };
    saveLeaderboard(scores);
    return "improved";
  }

  return "kept";
}

function renderLeaderboardEntries(entries, listElement = leaderboardList, modeElement = leaderboardMode) {
  modeElement.textContent = isDailyMode()
      ? `Daily ${getDailyKey()}`
      : getActiveModeConfig().label;
  listElement.innerHTML = "";

  if (entries.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "leaderboard-empty";
    emptyItem.textContent = "No scores yet.";
    listElement.appendChild(emptyItem);
    return;
  }

  entries.forEach((entry) => {
    const item = document.createElement("li");
    const name = document.createElement("span");
    const points = document.createElement("span");
    const rounds = document.createElement("span");

    name.className = "leaderboard-name";
    points.className = "leaderboard-score";
    rounds.className = "leaderboard-meta";
    name.textContent = entry.name;
    points.textContent = `${entry.score} pts`;
    rounds.textContent = isDailyMode()
      ? "Today"
      : `${entry.rounds} rounds`;

    item.append(name, points, rounds);
    listElement.appendChild(item);
  });
}

async function fetchLeaderboardEntries(renderMenuInfiniteBoard = false) {
  if (!supabaseClient) {
    return {
      entries: getCurrentModeEntries(),
      usedFallback: true
    };
  }

  let query = supabaseClient
    .from(leaderboardTable)
    .select("name, score, mode, rounds, created_at")
    .eq("mode", selectedModeKey);

  if (!renderMenuInfiniteBoard && isDailyMode()) {
    const dailyStart = `${getDailyKey()}T00:00:00.000Z`;
    const dailyEnd = `${getDailyKey()}T23:59:59.999Z`;
    query = query.gte("created_at", dailyStart).lte("created_at", dailyEnd);
  }

  const { data, error } = await query
    .order("score", { ascending: false })
    .order("rounds", { ascending: false })
    .limit(5);

  if (error) {
    return {
      entries: getCurrentModeEntries(),
      usedFallback: true
    };
  }

  return {
    entries: data,
    usedFallback: false
  };
}

async function preloadMenuLeaderboard(forceRefresh = false) {
  if (!menuLeaderboardList || !menuLeaderboardMode) {
    return [];
  }

  if (menuLeaderboardCache && !forceRefresh) {
    return menuLeaderboardCache;
  }

  if (menuLeaderboardPrefetchPromise && !forceRefresh) {
    return menuLeaderboardPrefetchPromise;
  }

  menuLeaderboardPrefetchPromise = fetchLeaderboardEntries(true)
    .then(({ entries }) => {
      menuLeaderboardCache = entries;
      return entries;
    })
    .finally(() => {
      menuLeaderboardPrefetchPromise = null;
    });

  return menuLeaderboardPrefetchPromise;
}

async function renderLeaderboard(
  listElement = leaderboardList,
  modeElement = leaderboardMode,
  messageElement = saveMessage
) {
  const renderMenuInfiniteBoard = listElement === menuLeaderboardList;

  modeElement.textContent = isDailyMode()
      ? `Daily ${getDailyKey()}`
      : getActiveModeConfig().label;
  listElement.innerHTML = "";

  const loadingItem = document.createElement("li");
  loadingItem.className = "leaderboard-empty";
  loadingItem.textContent = "Loading scores...";
  listElement.appendChild(loadingItem);

  if (renderMenuInfiniteBoard && menuLeaderboardCache) {
    renderLeaderboardEntries(menuLeaderboardCache, listElement, modeElement);
    return;
  }

  const { entries, usedFallback } = await fetchLeaderboardEntries(renderMenuInfiniteBoard);

  if (renderMenuInfiniteBoard && !usedFallback) {
    menuLeaderboardCache = entries;
  }

  if (usedFallback) {
    renderLeaderboardEntries(entries, listElement, modeElement);
    if (messageElement) {
      messageElement.textContent = "";
      showToast("Global leaderboard unavailable. Showing local scores.");
    }

    return;
  }

  renderLeaderboardEntries(entries, listElement, modeElement);
}

function toggleAutoNameForm(isVisible) {
  if (!autoNameForm) {
    return;
  }

  autoNameForm.classList.toggle("hidden", !isVisible);
  autoNameForm.setAttribute("aria-hidden", String(!isVisible));

  if (isVisible) {
    autoPlayerNameInput?.focus();
  }
}

async function autoSaveCurrentScore() {
  if (!hasLeaderboardMode() || hasSavedCurrentScore) {
    return;
  }

  if (score <= 0) {
    toggleAutoNameForm(false);
    saveMessage.textContent = "";
    return;
  }

  let playerName = localStorage.getItem(playerNameStorageKey) || "";

  if (!playerName) {
    toggleAutoNameForm(true);
    saveMessage.textContent = "Choose a leaderboard name to save this run.";
    return;
  }

  toggleAutoNameForm(false);
  saveMessage.textContent = "";
  await saveCurrentScore(null, playerName);
}

async function saveCurrentScore(event, providedName = "") {
  event?.preventDefault();

  if (!hasLeaderboardMode()) {
    showToast("Scores are not saved for Daily mode.");
    return;
  }

  if (score <= 0) {
    toggleAutoNameForm(false);
    saveMessage.textContent = "";
    showToast("Only runs above 0 points can be saved.");
    return;
  }

  const storedName = localStorage.getItem(playerNameStorageKey);
  const inputName = playerNameInput ? playerNameInput.value : "";
  const playerName = (providedName || storedName || inputName).trim().slice(0, 18);

  if (!playerName) {
    showToast("Enter a name first.");
    (autoPlayerNameInput || playerNameInput)?.focus();
    return;
  }

  if (hasSavedCurrentScore) {
    return;
  }

  const scoreEntry = {
    name: playerName,
    score,
    mode: selectedModeKey,
    rounds: totalRounds,
    date: new Date().toISOString(),
    dailyKey: isDailyMode() ? getDailyKey() : null
  };

  localStorage.setItem(playerNameStorageKey, playerName);
  toggleAutoNameForm(false);
  updateScoreFormState();
  upsertLocalScore(scoreEntry);

  // Save local first, then try the online leaderboard when the mode supports it.
  if (supabaseClient) {
    let existingQuery = supabaseClient
      .from(leaderboardTable)
      .select("id, score, rounds")
      .eq("mode", scoreEntry.mode)
      .ilike("name", scoreEntry.name);

    if (isDailyMode()) {
      existingQuery = existingQuery
        .gte("created_at", `${getDailyKey()}T00:00:00.000Z`)
        .lte("created_at", `${getDailyKey()}T23:59:59.999Z`);
    }

    const { data: existingEntries, error: selectError } = await existingQuery.limit(1);

    if (selectError) {
      showToast(getSupabaseErrorMessage(selectError, "Saved locally, but global save failed."));
      hasSavedCurrentScore = true;
      renderLeaderboardEntries(getCurrentModeEntries());
      return;
    }

    const existingEntry = existingEntries[0];

    if (existingEntry) {
      const isBetterScore = scoreEntry.score > existingEntry.score;
      const isTieWithMoreRounds = scoreEntry.score === existingEntry.score && scoreEntry.rounds > existingEntry.rounds;

      if (!isBetterScore && !isTieWithMoreRounds) {
        hasSavedCurrentScore = true;
        saveMessage.textContent = "";
        await renderLeaderboard();
        await preloadMenuLeaderboard(true);
        return;
      }

      const { error: updateError } = await supabaseClient
        .from(leaderboardTable)
        .update({
          name: scoreEntry.name,
          score: scoreEntry.score,
          rounds: scoreEntry.rounds,
          created_at: scoreEntry.date
        })
        .eq("id", existingEntry.id);

      if (updateError) {
        showToast(getSupabaseErrorMessage(updateError, "Saved locally, but global update failed."));
        hasSavedCurrentScore = true;
        renderLeaderboardEntries(getCurrentModeEntries());
        await preloadMenuLeaderboard(true);
        return;
      }
    } else {
      const { error: insertError } = await supabaseClient.from(leaderboardTable).insert({
        name: scoreEntry.name,
        score: scoreEntry.score,
        mode: scoreEntry.mode,
        rounds: scoreEntry.rounds,
        created_at: scoreEntry.date
      });

      if (insertError) {
        showToast(getSupabaseErrorMessage(insertError, "Saved locally, but global save failed."));
        hasSavedCurrentScore = true;
        renderLeaderboardEntries(getCurrentModeEntries());
        await preloadMenuLeaderboard(true);
        return;
      }
    }
  }

  hasSavedCurrentScore = true;
  saveMessage.textContent = "";
  await renderLeaderboard();
  await preloadMenuLeaderboard(true);
}

// Move forward one step. Either next round... or game over if the mode says so.
async function goToNextStep() {
  const previousRound = currentRound;

  currentRound += 1;

  if (currentRound < totalRounds) {
    await renderRound();
    void playRoundProgressTransition(previousRound);
    return;
  }

  endGame();
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectMode(button.dataset.mode);
  });
});

if (mobileModeSelect) {
  mobileModeSelect.addEventListener("change", (event) => {
    selectMode(event.target.value);
  });
}

themeToggle?.addEventListener("click", () => {
  applyGameTheme("light");
});

mobileThemeLock.addEventListener("change", syncThemeForViewport);

startButton.addEventListener("click", () => {
  startGame(selectedModeKey);
});
dailyButton.addEventListener("click", () => {
  startGame("daily");
});
helpToggleButton?.addEventListener("click", () => {
  const isOpen = helpWidget?.classList.contains("open") || false;
  setHelpPanelOpen(!isOpen);
});
helpCloseButton?.addEventListener("click", () => {
  setHelpPanelOpen(false);
});
homeButtons.forEach((button) => {
  button.addEventListener("click", goHome);
});
scoreForm?.addEventListener("submit", saveCurrentScore);
autoNameForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  void saveCurrentScore(null, autoPlayerNameInput?.value || "");
});
if (menuScoreboardToggle && menuScoreboardPanel) {
  menuScoreboardToggle.addEventListener("click", async () => {
    const shouldOpen = !menuScoreboardPanel.classList.contains("open");

    if (shouldOpen) {
      await preloadMenuLeaderboard();
    }

    const isOpen = menuScoreboardPanel.classList.toggle("open");
    menuScoreboardToggle.setAttribute("aria-expanded", String(isOpen));
    menuScoreboardPanel.setAttribute("aria-hidden", String(!isOpen));

    if (isOpen) {
      if (menuLeaderboardCache) {
        renderLeaderboardEntries(menuLeaderboardCache, menuLeaderboardList, menuLeaderboardMode);
      } else {
        void renderLeaderboard(menuLeaderboardList, menuLeaderboardMode, null);
      }
    }
  });
}
document.addEventListener("click", (event) => {
  if (!menuScoreboardToggle || !menuScoreboardPanel || !menuLeaderboardPanelCard) {
    return;
  }

  const target = event.target;

  if (!(target instanceof Node)) {
    return;
  }

  const clickedInsideLeaderboard = menuLeaderboardPanelCard.contains(target);
  const clickedToggle = menuScoreboardToggle.contains(target);

  if (!clickedInsideLeaderboard && !clickedToggle) {
    menuScoreboardPanel.classList.remove("open");
    menuScoreboardToggle.setAttribute("aria-expanded", "false");
    menuScoreboardPanel.setAttribute("aria-hidden", "true");
  }
});
document.addEventListener("click", (event) => {
  if (!helpWidget || !helpWidget.classList.contains("open")) {
    return;
  }

  const target = event.target;

  if (target instanceof Node && !helpWidget.contains(target)) {
    setHelpPanelOpen(false);
  }
});
selectMode(selectedModeKey);
loadGameTheme();
updateLeaderboardVisibility();
updateDailyAvailability();
updateStreakLabel();
void preloadMenuLeaderboard();
if (menuScoreboardPanel && menuScoreboardPanel.classList.contains("open")) {
  void renderLeaderboard(menuLeaderboardList, menuLeaderboardMode, null);
}
playAgainButton.addEventListener("click", () => {
  startGame(selectedModeKey);
});
nextButton.addEventListener("click", () => {
  goToNextStep();
});
hintButton.addEventListener("click", useHint);
openShareButton.addEventListener("click", () => {
  toggleShareModal(true);
});
closeShareButton.addEventListener("click", () => {
  toggleShareModal(false);
});
copyShareButton.addEventListener("click", () => {
  copyShareText();
});
nativeShareButton.addEventListener("click", () => {
  shareRun();
});

document.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeShare === "true") {
    toggleShareModal(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && helpWidget?.classList.contains("open")) {
    setHelpPanelOpen(false);
    return;
  }

  if (event.key === "Escape" && shareModal.classList.contains("open")) {
    toggleShareModal(false);
    return;
  }

  if (isTypingTarget(event.target)) {
    return;
  }

  if (event.key >= "1" && event.key <= "4") {
    event.preventDefault();
    handleKeyboardAnswer(Number(event.key) - 1);
    return;
  }

  if (event.key === "Enter" && isScreenActive("game") && hasAnswered && !nextButton.disabled) {
    event.preventDefault();
    nextButton.click();
  }
});
