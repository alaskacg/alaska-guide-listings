import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface Guide {
  id: number;
  name: string;
  company: string;
  category: string;
  location: string;
  specialties: string[];
  certifications: string[];
  experience: string;
  rating: number;
  reviews: number;
  season: string;
  image: string;
  description: string;
  phone: string;
  email: string;
}

const guides: Guide[] = [
  {
    id: 1,
    name: "Captain Mike Thompson",
    company: "Alaska Premier Fishing Charters",
    category: "Fishing",
    location: "Homer",
    specialties: ["Halibut", "King Salmon", "Silver Salmon"],
    certifications: ["USCG Licensed", "CPR/First Aid", "Alaska Guide License"],
    experience: "25+ years",
    rating: 4.9,
    reviews: 247,
    season: "May - September",
    image: "🎣",
    description: "Expert halibut and salmon fishing guide with over 25 years on Kachemak Bay. Consistent catches, top-quality gear, and unforgettable experiences.",
    phone: "(907) 555-0101",
    email: "mike@alaskapremiercharters.com"
  },
  {
    id: 2,
    name: "Sarah Chen",
    company: "Glacier Adventures Alaska",
    category: "Glacier Tours",
    location: "Juneau",
    specialties: ["Ice Climbing", "Glacier Hiking", "Photography Tours"],
    certifications: ["AMGA Certified", "Wilderness First Responder", "Alaska Guide License"],
    experience: "15 years",
    rating: 5.0,
    reviews: 189,
    season: "Year-round",
    image: "🏔️",
    description: "Professional glacier guide specializing in Mendenhall Glacier ice climbing and hiking adventures. Safe, educational, and breathtaking experiences.",
    phone: "(907) 555-0102",
    email: "sarah@glacieradventuresak.com"
  },
  {
    id: 3,
    name: "Tom 'Bear' Harrison",
    company: "Alaska Wilderness Hunts",
    category: "Hunting",
    location: "Kodiak",
    specialties: ["Brown Bear", "Black Bear", "Sitka Deer"],
    certifications: ["Master Guide License", "Big Game Specialist", "Wilderness First Responder"],
    experience: "30+ years",
    rating: 4.8,
    reviews: 156,
    season: "Spring & Fall",
    image: "🎯",
    description: "Master guide with three decades of experience in Kodiak wilderness. Ethical hunts, safety first, and the adventure of a lifetime.",
    phone: "(907) 555-0103",
    email: "tom@alaskawildernesshunts.com"
  },
  {
    id: 4,
    name: "Jessica Rodriguez",
    company: "Wildlife Viewing Alaska",
    category: "Wildlife Viewing",
    location: "Denali",
    specialties: ["Bear Viewing", "Moose Photography", "Bird Watching"],
    certifications: ["Certified Wildlife Biologist", "Alaska Guide License", "Naturalist Certification"],
    experience: "12 years",
    rating: 4.9,
    reviews: 203,
    season: "May - September",
    image: "🐻",
    description: "Wildlife biologist and expert guide offering intimate wildlife encounters in Denali. Educational tours with respect for nature.",
    phone: "(907) 555-0104",
    email: "jessica@wildlifeviewingak.com"
  },
  {
    id: 5,
    name: "Erik Johansen",
    company: "Kenai River Guides",
    category: "Fishing",
    location: "Soldotna",
    specialties: ["King Salmon", "Rainbow Trout", "Fly Fishing"],
    certifications: ["Master Guide", "Fly Fishing Instructor", "USCG Licensed"],
    experience: "20 years",
    rating: 4.8,
    reviews: 312,
    season: "May - October",
    image: "🎣",
    description: "Kenai River specialist with legendary knowledge of salmon runs. Premium drift boat fishing for all skill levels.",
    phone: "(907) 555-0105",
    email: "erik@kenairiverguides.com"
  },
  {
    id: 6,
    name: "Amanda White",
    company: "Arctic Kayak Adventures",
    category: "Adventure Sports",
    location: "Seward",
    specialties: ["Sea Kayaking", "Glacier Kayaking", "Wildlife Tours"],
    certifications: ["ACA Certified", "Wilderness First Responder", "Alaska Guide License"],
    experience: "10 years",
    rating: 5.0,
    reviews: 178,
    season: "May - September",
    image: "🛶",
    description: "Expert sea kayak guide exploring Resurrection Bay and Aialik Glacier. Small groups, personalized attention, unforgettable coastal adventures.",
    phone: "(907) 555-0106",
    email: "amanda@arctickayakak.com"
  },
  {
    id: 7,
    name: "James 'Trapper' McGraw",
    company: "Interior Alaska Outfitters",
    category: "Hunting",
    location: "Fairbanks",
    specialties: ["Moose", "Caribou", "Dall Sheep"],
    certifications: ["Master Guide License", "Registered Guide-Outfitter", "Big Game Specialist"],
    experience: "28 years",
    rating: 4.9,
    reviews: 134,
    season: "August - October",
    image: "🎯",
    description: "Legendary Interior Alaska outfitter. Backcountry hunts for moose, caribou, and Dall sheep. High success rates, exceptional wilderness camps.",
    phone: "(907) 555-0107",
    email: "james@interioralaskaoutfitters.com"
  },
  {
    id: 8,
    name: "Rachel Kim",
    company: "Exit Glacier Adventures",
    category: "Glacier Tours",
    location: "Seward",
    specialties: ["Glacier Hiking", "Ice Trekking", "Nature Photography"],
    certifications: ["AMGA Guide", "Leave No Trace Trainer", "Alaska Guide License"],
    experience: "8 years",
    rating: 4.9,
    reviews: 221,
    season: "May - September",
    image: "🏔️",
    description: "Passionate glacier guide offering accessible hikes to expert ice trekking. Exit Glacier specialist with environmental education focus.",
    phone: "(907) 555-0108",
    email: "rachel@exitglacieradventures.com"
  },
  {
    id: 9,
    name: "David 'Brownie' Patterson",
    company: "Katmai Bear Viewing",
    category: "Wildlife Viewing",
    location: "King Salmon",
    specialties: ["Brown Bear Photography", "Brooks Falls", "Wilderness Camps"],
    certifications: ["Master Guide", "Wildlife Photography Expert", "Naturalist"],
    experience: "22 years",
    rating: 5.0,
    reviews: 267,
    season: "June - September",
    image: "🐻",
    description: "Premier Katmai bear viewing guide. Brooks Falls expert, world-class bear photography opportunities, safe intimate wildlife encounters.",
    phone: "(907) 555-0109",
    email: "david@katmaibearviewing.com"
  },
  {
    id: 10,
    name: "Lisa Nakamura",
    company: "Chugach Powder Guides",
    category: "Adventure Sports",
    location: "Girdwood",
    specialties: ["Backcountry Skiing", "Heli-Skiing", "Avalanche Safety"],
    certifications: ["AMGA Ski Guide", "Avalanche Level 3", "Wilderness First Responder"],
    experience: "14 years",
    rating: 4.8,
    reviews: 156,
    season: "December - April",
    image: "⛷️",
    description: "Elite backcountry ski guide in the Chugach Mountains. Heli-skiing adventures, avalanche safety courses, and powder dreams come true.",
    phone: "(907) 555-0110",
    email: "lisa@chugachpowderguides.com"
  },
  {
    id: 11,
    name: "Robert 'Fishman' Anderson",
    company: "Prince William Sound Charters",
    category: "Fishing",
    location: "Valdez",
    specialties: ["Silver Salmon", "Pink Salmon", "Rockfish"],
    certifications: ["USCG Licensed", "Alaska Guide License", "CPR/First Aid"],
    experience: "18 years",
    rating: 4.7,
    reviews: 198,
    season: "May - September",
    image: "🎣",
    description: "Prince William Sound fishing expert. Scenic charters, abundant salmon, and halibut fishing surrounded by glaciers and wildlife.",
    phone: "(907) 555-0111",
    email: "robert@pwscharters.com"
  },
  {
    id: 12,
    name: "Maria Gonzales",
    company: "Iditarod Dog Sled Tours",
    category: "Adventure Sports",
    location: "Willow",
    specialties: ["Dog Sledding", "Musher Training", "Winter Wilderness"],
    certifications: ["Iditarod Veteran", "Alaska Guide License", "Dog Care Specialist"],
    experience: "16 years",
    rating: 5.0,
    reviews: 284,
    season: "November - March",
    image: "🐕",
    description: "Iditarod musher offering authentic dog sled experiences. Meet champion sled dogs, learn mushing basics, winter wonderland adventures.",
    phone: "(907) 555-0112",
    email: "maria@iditaroddogsledtours.com"
  },
  {
    id: 13,
    name: "Chris 'Wingman' Taylor",
    company: "Alaska Flightseeing Adventures",
    category: "Adventure Sports",
    location: "Talkeetna",
    specialties: ["Denali Flightseeing", "Glacier Landings", "Aerial Photography"],
    certifications: ["Commercial Pilot", "Glacier Landing Specialist", "20,000+ flight hours"],
    experience: "24 years",
    rating: 4.9,
    reviews: 412,
    season: "Year-round",
    image: "✈️",
    description: "Expert bush pilot offering breathtaking Denali flightseeing tours. Glacier landings, aerial photography, and the flight of a lifetime.",
    phone: "(907) 555-0113",
    email: "chris@alaskaflightseeing.com"
  },
  {
    id: 14,
    name: "Jennifer Brooks",
    company: "Southeast Alaska Eco Tours",
    category: "Wildlife Viewing",
    location: "Ketchikan",
    specialties: ["Whale Watching", "Rainforest Tours", "Marine Wildlife"],
    certifications: ["Marine Naturalist", "Alaska Guide License", "USCG Licensed"],
    experience: "11 years",
    rating: 4.8,
    reviews: 234,
    season: "May - September",
    image: "🐋",
    description: "Marine naturalist specializing in Southeast Alaska wildlife. Whale watching, rainforest ecology, and pristine Inside Passage exploration.",
    phone: "(907) 555-0114",
    email: "jennifer@southeastalaskaeco.com"
  },
  {
    id: 15,
    name: "Brian 'Ice' Morrison",
    company: "Arctic Circle Expeditions",
    category: "Adventure Sports",
    location: "Deadhorse",
    specialties: ["Arctic Tours", "Northern Lights", "Polar Wildlife"],
    certifications: ["Master Guide", "Arctic Specialist", "Wilderness First Responder"],
    experience: "19 years",
    rating: 4.9,
    reviews: 167,
    season: "Year-round",
    image: "🌌",
    description: "Arctic expedition expert. Journey to the top of the world, aurora viewing, polar bear safety, and ultimate frontier adventures.",
    phone: "(907) 555-0115",
    email: "brian@arcticcircleexpeditions.com"
  }
];

const categories = ["All", "Fishing", "Hunting", "Glacier Tours", "Wildlife Viewing", "Adventure Sports"];
const locations = ["All", "Homer", "Juneau", "Kodiak", "Denali", "Soldotna", "Seward", "Fairbanks", "King Salmon", "Girdwood", "Valdez", "Willow", "Talkeetna", "Ketchikan", "Deadhorse"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  const filteredGuides = guides.filter(guide => {
    const matchesCategory = selectedCategory === "All" || guide.category === selectedCategory;
    const matchesLocation = selectedLocation === "All" || guide.location === selectedLocation;
    const matchesSearch = searchTerm === "" || 
      guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesLocation && matchesSearch;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Alaska Guide Listings",
    "description": "Comprehensive directory of Alaska fishing guides, hunting outfitters, glacier tour guides, and adventure specialists",
    "url": "https://alaskaguidelistings.com",
    "areaServed": "Alaska",
    "knowsAbout": ["Fishing Guides", "Hunting Outfitters", "Glacier Tours", "Wildlife Viewing", "Adventure Sports"]
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50">
        <Helmet>
          <title>Alaska Guide Listings - Find Expert Alaska Fishing Guides, Hunting Outfitters & Adventure Tours</title>
          <meta name="description" content="Discover Alaska's best fishing guides, hunting outfitters, glacier tour guides, and adventure specialists. Certified professionals, verified reviews, easy booking." />
          <meta name="keywords" content="Alaska fishing guides, hunting outfitters Alaska, Alaska adventure tours, glacier tour guides, Alaska guide directory, fishing charters Alaska, bear viewing guides" />
          <link rel="canonical" href="https://alaskaguidelistings.com" />
          <meta property="og:title" content="Alaska Guide Listings - Expert Alaska Guides & Outfitters" />
          <meta property="og:description" content="Find certified Alaska fishing guides, hunting outfitters, glacier tours, and adventure specialists" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://alaskaguidelistings.com" />
          <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
          </script>
        </Helmet>

        <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Alaska Guide Listings</h1>
            <p className="text-xl text-blue-100">Find Expert Guides & Outfitters for Your Alaska Adventure</p>
          </div>
        </header>

        <div className="bg-white shadow-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Search guides, companies, specialties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {locations.map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>
            </div>
            <p className="mt-4 text-gray-600">{filteredGuides.length} guides found</p>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map(guide => (
              <div key={guide.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="text-6xl mb-4 text-center">{guide.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{guide.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{guide.company}</p>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < Math.floor(guide.rating) ? '★' : '☆'}</span>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{guide.rating} ({guide.reviews} reviews)</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <span className="text-gray-500 text-sm font-medium w-24">Category:</span>
                      <span className="text-sm text-gray-900">{guide.category}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-500 text-sm font-medium w-24">Location:</span>
                      <span className="text-sm text-gray-900">{guide.location}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-500 text-sm font-medium w-24">Experience:</span>
                      <span className="text-sm text-gray-900">{guide.experience}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-500 text-sm font-medium w-24">Season:</span>
                      <span className="text-sm text-gray-900">{guide.season}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 line-clamp-2">{guide.description}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-medium text-gray-500 mb-1">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {guide.specialties.map((specialty, idx) => (
                        <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedGuide(guide)}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    View Details & Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>

        {selectedGuide && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedGuide(null)}>
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{selectedGuide.name}</h2>
                    <p className="text-xl text-blue-600 font-medium">{selectedGuide.company}</p>
                  </div>
                  <button onClick={() => setSelectedGuide(null)} className="text-gray-400 hover:text-gray-600 text-2xl">×</button>
                </div>

                <div className="text-6xl mb-4 text-center">{selectedGuide.image}</div>

                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < Math.floor(selectedGuide.rating) ? '★' : '☆'}</span>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">{selectedGuide.rating} ({selectedGuide.reviews} reviews)</span>
                </div>

                <p className="text-gray-700 mb-6">{selectedGuide.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="font-medium text-gray-700">Category</p>
                    <p className="text-gray-600">{selectedGuide.category}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Location</p>
                    <p className="text-gray-600">{selectedGuide.location}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Experience</p>
                    <p className="text-gray-600">{selectedGuide.experience}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Season</p>
                    <p className="text-gray-600">{selectedGuide.season}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="font-medium text-gray-700 mb-2">Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedGuide.specialties.map((specialty, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="font-medium text-gray-700 mb-2">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedGuide.certifications.map((cert, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700"><span className="font-medium">Phone:</span> {selectedGuide.phone}</p>
                    <p className="text-gray-700"><span className="font-medium">Email:</span> {selectedGuide.email}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a href={`tel:${selectedGuide.phone}`} className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-center">
                    Call Now
                  </a>
                  <a href={`mailto:${selectedGuide.email}`} className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
                    Email Inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <footer className="bg-gray-800 text-white mt-12">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3">Alaska Guide Listings</h3>
                <p className="text-gray-300 text-sm">Your trusted directory for Alaska's best guides and outfitters.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Categories</h3>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>Fishing Guides</li>
                  <li>Hunting Outfitters</li>
                  <li>Glacier Tours</li>
                  <li>Wildlife Viewing</li>
                  <li>Adventure Sports</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-3">Contact</h3>
                <p className="text-gray-300 text-sm">Email: info@alaskaguidelistings.com</p>
                <p className="text-gray-300 text-sm">Phone: (907) 555-GUIDE</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
              <p>© 2024 Alaska Guide Listings. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
