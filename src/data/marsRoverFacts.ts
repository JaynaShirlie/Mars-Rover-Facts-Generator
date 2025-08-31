export interface MarsRoverFact {
  id: number;
  title: string;
  fact: string;
  category: 'discovery' | 'technology' | 'mission' | 'environment';
}

export const marsRoverFacts: MarsRoverFact[] = [
  {
    id: 1,
    title: "Perseverance's Historic Landing",
    fact: "The Perseverance rover landed on Mars using a sky crane maneuver, a first-of-its-kind powered descent system that lowered the rover on cables from a hovering descent stage.",
    category: "technology"
  },
  {
    id: 2,
    title: "Martian Weather Station",
    fact: "NASA's rovers have detected dust devils on Mars that can reach heights of 12 miles (20 km) and travel at speeds of up to 70 mph (112 km/h).",
    category: "environment"
  },
  {
    id: 3,
    title: "Ancient Water Evidence",
    fact: "Rover missions have found definitive proof that liquid water once flowed on Mars, with evidence of ancient riverbeds, lake deposits, and hydrated minerals.",
    category: "discovery"
  },
  {
    id: 4,
    title: "Martian Helicopter",
    fact: "Ingenuity, the Mars helicopter, was originally planned for just 5 flights but has completed over 70 successful flights, revolutionizing planetary exploration.",
    category: "technology"
  },
  {
    id: 5,
    title: "Sol vs Earth Days",
    fact: "A Martian day (called a 'sol') is about 24 hours and 37 minutes long, which means rover mission schedules drift relative to Earth time.",
    category: "environment"
  },
  {
    id: 6,
    title: "Curiosity's Nuclear Power",
    fact: "The Curiosity rover is powered by a radioisotope thermoelectric generator (RTG) that converts heat from radioactive decay into electricity, allowing it to operate for years.",
    category: "technology"
  },
  {
    id: 7,
    title: "Methane Mystery",
    fact: "Mars rovers have detected mysterious seasonal spikes in atmospheric methane that could indicate either geological processes or potentially even microbial life.",
    category: "discovery"
  },
  {
    id: 8,
    title: "Perseverance's Sample Collection",
    fact: "Perseverance has collected rock and soil samples in sealed tubes that will be retrieved by a future Mars Sample Return mission, bringing Martian material to Earth for the first time.",
    category: "mission"
  },
  {
    id: 9,
    title: "Extreme Temperature Swings",
    fact: "Mars rovers experience temperature swings from about 70°F (20°C) during the day to -195°F (-125°C) at night, requiring sophisticated thermal management systems.",
    category: "environment"
  },
  {
    id: 10,
    title: "Opportunity's Marathon",
    fact: "The Opportunity rover operated for nearly 15 years on Mars, far exceeding its planned 90-day mission and traveling over 28 miles (45 km) across the Martian surface.",
    category: "mission"
  },
  {
    id: 11,
    title: "Martian Seasons",
    fact: "Mars has seasons similar to Earth due to its axial tilt, but each season lasts about twice as long because Mars takes 687 Earth days to orbit the Sun.",
    category: "environment"
  },
  {
    id: 12,
    title: "Laser Rock Analysis",
    fact: "Curiosity's ChemCam instrument can vaporize rocks from up to 20 feet away using a laser, then analyze the resulting plasma to determine their chemical composition.",
    category: "technology"
  },
  {
    id: 13,
    title: "Mars' Rusty Color",
    fact: "Mars appears red because iron oxide (rust) covers much of its surface, formed when iron-rich rocks reacted with oxygen and water billions of years ago.",
    category: "environment"
  },
  {
    id: 14,
    title: "Spirit's Stuck Wheel Victory",
    fact: "When one of Spirit's wheels stopped working, it actually helped science by dragging through the soil and exposing bright material that contained high concentrations of silica.",
    category: "discovery"
  },
  {
    id: 15,
    title: "Communication Delays",
    fact: "Radio signals between Earth and Mars can take anywhere from 4 to 24 minutes each way, depending on the planets' positions, making real-time rover control impossible.",
    category: "technology"
  },
  {
    id: 16,
    title: "Dust Storm Survival",
    fact: "In 2018, a planet-wide dust storm on Mars blocked sunlight for months, ultimately ending the Opportunity rover's mission after nearly 15 years of operation.",
    category: "environment"
  },
  {
    id: 17,
    title: "Martian Clouds",
    fact: "Mars rovers have photographed wispy clouds made of water ice and carbon dioxide, some reaching heights of up to 60 miles above the surface.",
    category: "environment"
  },
  {
    id: 18,
    title: "Sample Caching Strategy",
    fact: "Perseverance strategically places collected samples in specific locations called 'depots' to ensure future missions can find them even if the rover fails.",
    category: "mission"
  },
  {
    id: 19,
    title: "Rover Selfies",
    fact: "Mars rovers take 'selfies' using robotic arms to position cameras, but these are actually composite images made from dozens of individual photos stitched together.",
    category: "technology"
  },
  {
    id: 20,
    title: "Martian Soil Composition",
    fact: "Mars rovers have discovered that Martian soil contains perchlorate chemicals, which are toxic to Earth life but could potentially be used as rocket fuel for future missions.",
    category: "discovery"
  },
  {
    id: 21,
    title: "Six-Wheel Drive",
    fact: "All major Mars rovers use six-wheel drive systems with independent suspension, allowing them to traverse rocks up to wheel-diameter in size.",
    category: "technology"
  },
  {
    id: 22,
    title: "Martian Earthquakes",
    fact: "The InSight lander (rover's stationary cousin) detected over 1,300 marsquakes, revealing that Mars is still geologically active.",
    category: "discovery"
  },
  {
    id: 23,
    title: "Solar Panel Degradation",
    fact: "Mars rover solar panels lose efficiency over time due to dust accumulation, but occasional 'cleaning events' from wind can restore most of their power.",
    category: "technology"
  },
  {
    id: 24,
    title: "Ancient Magnetism",
    fact: "Rover measurements show that Mars once had a global magnetic field, but it disappeared billions of years ago, allowing solar wind to strip away much of the atmosphere.",
    category: "discovery"
  },
  {
    id: 25,
    title: "Crater Landing Sites",
    fact: "Most Mars rovers land in ancient impact craters because these depressions are relatively flat and often contain sedimentary rocks that preserve ancient environments.",
    category: "mission"
  },
  {
    id: 26,
    title: "Martian Sunsets",
    fact: "Mars rovers have captured images of blue sunsets on Mars, which occur because the planet's atmosphere scatters light differently than Earth's atmosphere.",
    category: "environment"
  },
  {
    id: 27,
    title: "Autonomous Navigation",
    fact: "Modern Mars rovers can autonomously navigate using computer vision to identify and avoid obstacles, traveling hundreds of meters without human intervention.",
    category: "technology"
  },
  {
    id: 28,
    title: "Organic Molecules",
    fact: "Curiosity discovered organic molecules in 3.5-billion-year-old rocks, though this doesn't necessarily indicate life—organics can form through non-biological processes.",
    category: "discovery"
  },
  {
    id: 29,
    title: "Wheel Wear Patterns",
    fact: "Curiosity's aluminum wheels developed holes from driving over sharp rocks, leading NASA to develop new driving techniques and wheel designs for future rovers.",
    category: "technology"
  },
  {
    id: 30,
    title: "Mars Sample Return",
    fact: "The planned Mars Sample Return mission will be humanity's first round-trip to another planet, requiring multiple spacecraft working together.",
    category: "mission"
  },
  {
    id: 31,
    title: "Atmospheric Pressure",
    fact: "Mars' atmospheric pressure is less than 1% of Earth's, meaning liquid water cannot exist stably on the surface at most locations.",
    category: "environment"
  },
  {
    id: 32,
    title: "Robotic Arm Precision",
    fact: "Mars rover robotic arms can position instruments with millimeter precision, allowing detailed analysis of rocks smaller than a coin.",
    category: "technology"
  },
  {
    id: 33,
    title: "Ancient Lake Beds",
    fact: "Rover evidence shows that Gale Crater once contained a lake that persisted for millions of years, with water levels that rose and fell over time.",
    category: "discovery"
  },
  {
    id: 34,
    title: "Entry, Descent, Landing",
    fact: "Mars landing is so challenging that only about 50% of missions succeed—the '7 minutes of terror' from atmospheric entry to touchdown requires perfect execution.",
    category: "mission"
  },
  {
    id: 35,
    title: "Seasonal Color Changes",
    fact: "Rover observations show that some areas of Mars change color seasonally as dust moves around and frost forms and sublimates.",
    category: "environment"
  },
  {
    id: 36,
    title: "Nuclear Battery Life",
    fact: "Curiosity's nuclear power source has a half-life of 87.7 years, meaning it will still provide significant power for decades to come.",
    category: "technology"
  },
  {
    id: 37,
    title: "Clay Mineral Discovery",
    fact: "Rovers have found clay minerals on Mars that form only in the presence of water, providing evidence of ancient wet conditions.",
    category: "discovery"
  },
  {
    id: 38,
    title: "Mission Extensions",
    fact: "Almost every successful Mars rover has far exceeded its planned mission duration, with some operating 50 times longer than originally intended.",
    category: "mission"
  },
  {
    id: 39,
    title: "Dust Devil Encounters",
    fact: "Mars rovers have been struck by dust devils thousands of times, sometimes actually helping by cleaning dust off solar panels.",
    category: "environment"
  },
  {
    id: 40,
    title: "Spectrometer Analysis",
    fact: "Rovers carry multiple types of spectrometers that can identify minerals, elements, and even potential organic compounds in rocks and soil.",
    category: "technology"
  },
  {
    id: 41,
    title: "Impact Glass Discovery",
    fact: "Rovers have found glass formed by ancient meteorite impacts, which could preserve signs of ancient life if it ever existed on Mars.",
    category: "discovery"
  },
  {
    id: 42,
    title: "Phobos Transit",
    fact: "Mars rovers have photographed the moon Phobos transiting across the Sun, appearing as a lumpy shadow due to its irregular potato-like shape.",
    category: "environment"
  },
  {
    id: 43,
    title: "Drill Sample Analysis",
    fact: "Rover drill bits can penetrate several centimeters into rocks, accessing unweathered material that reveals the rock's original composition.",
    category: "technology"
  },
  {
    id: 44,
    title: "Sulfate Mineral Evidence",
    fact: "Discovery of sulfate minerals by rovers indicates that ancient Mars had acidic water conditions, quite different from Earth's alkaline early oceans.",
    category: "discovery"
  },
  {
    id: 45,
    title: "Landing Ellipse Precision",
    fact: "Modern Mars rovers can land within ellipses as small as 7.7 x 6.6 kilometers, compared to early missions that had landing ellipses hundreds of kilometers wide.",
    category: "mission"
  },
  {
    id: 46,
    title: "Martian Wind Patterns",
    fact: "Rovers have observed that Mars has predictable seasonal wind patterns that create and modify sand dunes over time.",
    category: "environment"
  },
  {
    id: 47,
    title: "Sample Tube Sealing",
    fact: "Perseverance's sample tubes are hermetically sealed to prevent contamination, ensuring pristine Martian samples for eventual Earth analysis.",
    category: "technology"
  },
  {
    id: 48,
    title: "Carbonate Rock Evidence",
    fact: "Rovers have found carbonate rocks on Mars, which typically form in water-rich environments and could preserve biosignatures if life ever existed.",
    category: "discovery"
  },
  {
    id: 49,
    title: "Cross-Country Travel",
    fact: "The combined distance traveled by all Mars rovers exceeds 100 kilometers, with some individual rovers traveling marathon distances.",
    category: "mission"
  },
  {
    id: 50,
    title: "Polar Ice Observations",
    fact: "While rovers haven't visited the poles, orbital data shows that Mars has polar ice caps made of both water ice and frozen carbon dioxide.",
    category: "environment"
  },
  {
    id: 51,
    title: "X-Ray Fluorescence",
    fact: "Rover instruments use X-ray fluorescence to determine the elemental composition of rocks without damaging them, like a non-destructive chemical fingerprint.",
    category: "technology"
  },
  {
    id: 52,
    title: "Hydrated Mineral Discovery",
    fact: "Rovers have identified dozens of different hydrated minerals on Mars, each telling a story about specific water conditions in the planet's past.",
    category: "discovery"
  },
  {
    id: 53,
    title: "Airbag Landing System",
    fact: "Early Mars rovers like Sojourner used airbag landing systems, bouncing dozens of times across the surface before coming to rest.",
    category: "mission"
  },
  {
    id: 54,
    title: "Atmospheric Opacity",
    fact: "Mars rovers measure atmospheric opacity daily to track dust storms and seasonal changes that affect solar panel efficiency.",
    category: "environment"
  },
  {
    id: 55,
    title: "Microscopic Imaging",
    fact: "Rover microscopes can image features smaller than the width of a human hair, revealing details about rock texture and formation processes.",
    category: "technology"
  },
  {
    id: 56,
    title: "Phosphorus Discovery",
    fact: "Rovers have detected phosphorus on Mars, an essential element for life as we know it, though this doesn't prove life existed there.",
    category: "discovery"
  },
  {
    id: 57,
    title: "Route Planning",
    fact: "Mars rover routes are planned by teams of scientists and engineers on Earth, considering science targets, terrain hazards, and power constraints.",
    category: "mission"
  },
  {
    id: 58,
    title: "Frost Formation",
    fact: "Rovers have observed water frost forming on rocks and soil during Martian winter mornings, sublimating away as temperatures rise.",
    category: "environment"
  },
  {
    id: 59,
    title: "Alpha Particle X-Ray",
    fact: "APXS instruments on rovers use radioactive sources to bombard rocks with alpha particles, measuring the resulting X-rays to determine composition.",
    category: "technology"
  },
  {
    id: 60,
    title: "Hematite Spherules",
    fact: "Opportunity discovered tiny iron-rich spherules nicknamed 'blueberries' that formed in water-rich conditions billions of years ago.",
    category: "discovery"
  },
  {
    id: 61,
    title: "Communication Relays",
    fact: "Mars rovers often communicate with Earth through orbiting satellites rather than direct transmission, using the orbiters as communication relays.",
    category: "mission"
  },
  {
    id: 62,
    title: "Sand Ripple Migration",
    fact: "Rovers have documented how Martian sand ripples and dunes slowly migrate over time, shaped by seasonal wind patterns.",
    category: "environment"
  },
  {
    id: 63,
    title: "Neutron Spectroscopy",
    fact: "Some rovers carry neutron spectrometers that can detect hydrogen (indicating water) buried up to a meter below the surface.",
    category: "technology"
  },
  {
    id: 64,
    title: "Olivine Mineral Evidence",
    fact: "Rovers have found olivine minerals on Mars that weather quickly in water, suggesting some areas remained dry for long periods.",
    category: "discovery"
  },
  {
    id: 65,
    title: "Extended Mission Phases",
    fact: "Successful Mars rovers typically go through multiple mission phases, each with new scientific objectives as they explore different areas.",
    category: "mission"
  },
  {
    id: 66,
    title: "Atmospheric Argon",
    fact: "Rover measurements show that Mars' atmosphere contains argon isotopes that provide clues about how the planet lost most of its atmosphere.",
    category: "environment"
  },
  {
    id: 67,
    title: "Infrared Spectroscopy",
    fact: "Rover infrared instruments can identify minerals by their unique spectral signatures, like fingerprints for different rock types.",
    category: "technology"
  },
  {
    id: 68,
    title: "Stromatolite-like Structures",
    fact: "Rovers have found rock structures that resemble stromatolites—layered formations that on Earth are often created by ancient microbes.",
    category: "discovery"
  },
  {
    id: 69,
    title: "Sol Numbering System",
    fact: "Mars missions use 'sol' numbers (Martian days) starting from landing day, with some rovers now operating beyond sol 4000.",
    category: "mission"
  },
  {
    id: 70,
    title: "Atmospheric Water Vapor",
    fact: "Rovers measure atmospheric water vapor, which varies seasonally as water ice sublimates from the polar caps and refreezes.",
    category: "environment"
  },
  {
    id: 71,
    title: "Mössbauer Spectroscopy",
    fact: "Some rovers use Mössbauer spectroscopy to identify iron-bearing minerals with incredible precision, revealing details about ancient oxidation processes.",
    category: "technology"
  },
  {
    id: 72,
    title: "Jarosite Discovery",
    fact: "Rovers discovered jarosite minerals that form only in acidic, water-rich conditions, providing evidence of ancient Martian hot springs.",
    category: "discovery"
  },
  {
    id: 73,
    title: "International Cooperation",
    fact: "Mars rover missions often include instruments from multiple countries, representing international cooperation in planetary exploration.",
    category: "mission"
  },
  {
    id: 74,
    title: "Pressure Sensors",
    fact: "Rovers carry barometric pressure sensors that detect passing weather systems and seasonal atmospheric changes on Mars.",
    category: "environment"
  },
  {
    id: 75,
    title: "RAT Tool Usage",
    fact: "The Rock Abrasion Tool (RAT) on some rovers works like a dentist's drill, grinding away weathered rock surfaces to expose fresh material.",
    category: "technology"
  },
  {
    id: 76,
    title: "Gypsum Veins",
    fact: "Rovers have found gypsum veins in rocks, indicating that groundwater once flowed through cracks in the Martian crust.",
    category: "discovery"
  },
  {
    id: 77,
    title: "Landing Site Selection",
    fact: "Mars rover landing sites are chosen through years of analysis, balancing scientific interest with engineering safety requirements.",
    category: "mission"
  },
  {
    id: 78,
    title: "Dust Accumulation Rates",
    fact: "Rovers have measured dust accumulation rates on solar panels, helping engineers design better cleaning systems for future missions.",
    category: "environment"
  },
  {
    id: 79,
    title: "Stereo Imaging",
    fact: "Rover cameras work in pairs to create 3D stereo images, allowing precise navigation and detailed geological analysis.",
    category: "technology"
  },
  {
    id: 80,
    title: "Phyllosilicate Minerals",
    fact: "Discovery of phyllosilicate clay minerals by rovers indicates that early Mars had near-neutral pH water conditions suitable for life.",
    category: "discovery"
  },
  {
    id: 81,
    title: "Backup Landing Sites",
    fact: "Every Mars rover mission identifies multiple backup landing sites in case weather or technical issues prevent landing at the primary target.",
    category: "mission"
  },
  {
    id: 82,
    title: "Thermal Infrared Imaging",
    fact: "Rovers use thermal infrared cameras to study how rocks heat up and cool down, revealing information about their composition and structure.",
    category: "technology"
  },
  {
    id: 83,
    title: "Manganese Oxide Discovery",
    fact: "Curiosity found manganese oxides that typically require atmospheric oxygen to form, suggesting Mars once had more oxygen than today.",
    category: "discovery"
  },
  {
    id: 84,
    title: "Planetary Protection",
    fact: "Mars rovers are sterilized before launch to prevent Earth microbes from contaminating Mars and confusing the search for native life.",
    category: "mission"
  },
  {
    id: 85,
    title: "Wind Speed Measurements",
    fact: "Rover weather stations measure wind speeds on Mars, which rarely exceed 60 mph due to the thin atmosphere.",
    category: "environment"
  },
  {
    id: 86,
    title: "Sample Preparation System",
    fact: "Rovers can drill, crush, and sieve rock samples to specific size fractions for analysis by different onboard instruments.",
    category: "technology"
  },
  {
    id: 87,
    title: "Nodular Concretions",
    fact: "Rovers have found spherical rock nodules that formed in groundwater, similar to features found in Earth's sedimentary rocks.",
    category: "discovery"
  },
  {
    id: 88,
    title: "Mission Operations Teams",
    fact: "Mars rover missions employ hundreds of scientists and engineers who work on Martian time during critical mission phases.",
    category: "mission"
  },
  {
    id: 89,
    title: "Ultraviolet Radiation",
    fact: "Mars receives intense UV radiation due to its thin atmosphere and lack of a strong magnetic field, affecting surface chemistry.",
    category: "environment"
  },
  {
    id: 90,
    title: "ChemCam Laser Power",
    fact: "Curiosity's laser can focus over a million watts of power onto a pinhead-sized spot, creating plasma temperatures of 18,000°F.",
    category: "technology"
  },
  {
    id: 91,
    title: "Silica Enrichment",
    fact: "Rovers have found areas with high silica concentrations, indicating hydrothermal activity that could have supported ancient life.",
    category: "discovery"
  },
  {
    id: 92,
    title: "Technology Demonstrations",
    fact: "Many rover missions carry technology demonstration experiments, testing new systems for future Mars exploration.",
    category: "mission"
  },
  {
    id: 93,
    title: "Radiation Environment",
    fact: "Mars rovers measure space radiation levels that future human explorers will face, informing mission planning and spacecraft design.",
    category: "environment"
  },
  {
    id: 94,
    title: "Mass Spectrometry",
    fact: "Advanced rovers carry mass spectrometers that can detect and identify organic molecules at parts-per-billion concentrations.",
    category: "technology"
  },
  {
    id: 95,
    title: "Recurring Slope Lineae",
    fact: "Orbital images show dark streaks on Martian slopes that change seasonally, possibly indicating flowing briny water.",
    category: "discovery"
  },
  {
    id: 96,
    title: "Data Transmission Limits",
    fact: "Mars rovers can only transmit limited amounts of data each day, requiring careful prioritization of which observations to send to Earth.",
    category: "mission"
  },
  {
    id: 97,
    title: "Ground Temperature Sensors",
    fact: "Rovers measure soil temperature at different depths, revealing how heat flows through Martian regolith and bedrock.",
    category: "environment"
  },
  {
    id: 98,
    title: "Autonomous Science",
    fact: "Some rovers can autonomously select interesting rocks for analysis using artificial intelligence, reducing dependence on Earth-based commands.",
    category: "technology"
  },
  {
    id: 99,
    title: "Biosignature Preservation",
    fact: "Rovers have identified rock types that could preserve biosignatures for billions of years, guiding future life-detection missions.",
    category: "discovery"
  },
  {
    id: 100,
    title: "Future Human Missions",
    fact: "Data collected by Mars rovers is being used to plan future human missions, including identifying water sources and landing sites.",
    category: "mission"
  }
];