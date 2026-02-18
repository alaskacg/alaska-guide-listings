import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface Guide {
  id: number;
  name: string;
  company: string;
  category: string;
  location: string;
  region: string;
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
  { id: 1, name: "Captain Mike Thompson", company: "Alaska Premier Fishing Charters", category: "Fishing", location: "Homer", region: "Kenai", specialties: ["Halibut", "King Salmon", "Silver Salmon"], certifications: ["USCG Licensed", "CPR/First Aid", "Alaska Guide License"], experience: "25+ years", rating: 4.9, reviews: 247, season: "May - September", image: "🎣", description: "Expert halibut and salmon fishing guide with over 25 years on Kachemak Bay. Consistent catches, top-quality gear, and unforgettable experiences.", phone: "(907) 555-0101", email: "mike@alaskapremiercharters.com" },
  { id: 2, name: "Sarah Chen", company: "Glacier Adventures Alaska", category: "Glacier Tours", location: "Juneau", region: "Tongass", specialties: ["Ice Climbing", "Glacier Hiking", "Photography Tours"], certifications: ["AMGA Certified", "Wilderness First Responder", "Alaska Guide License"], experience: "15 years", rating: 5.0, reviews: 189, season: "Year-round", image: "🏔️", description: "Professional glacier guide specializing in Mendenhall Glacier ice climbing and hiking adventures. Safe, educational, and breathtaking experiences.", phone: "(907) 555-0102", email: "sarah@glacieradventuresak.com" },
  { id: 3, name: "Tom 'Bear' Harrison", company: "Alaska Wilderness Hunts", category: "Hunting", location: "Kodiak", region: "Interior", specialties: ["Brown Bear", "Black Bear", "Sitka Deer"], certifications: ["Master Guide License", "Big Game Specialist", "Wilderness First Responder"], experience: "30+ years", rating: 4.8, reviews: 156, season: "Spring & Fall", image: "🎯", description: "Master guide with three decades of experience in Kodiak wilderness. Ethical hunts, safety first, and the adventure of a lifetime.", phone: "(907) 555-0103", email: "tom@alaskawildernesshunts.com" },
  { id: 4, name: "Jessica Rodriguez", company: "Wildlife Viewing Alaska", category: "Wildlife Viewing", location: "Denali", region: "Interior", specialties: ["Bear Viewing", "Moose Photography", "Bird Watching"], certifications: ["Certified Wildlife Biologist", "Alaska Guide License", "Naturalist Certification"], experience: "12 years", rating: 4.9, reviews: 203, season: "May - September", image: "🐻", description: "Wildlife biologist and expert guide offering intimate wildlife encounters in Denali. Educational tours with respect for nature.", phone: "(907) 555-0104", email: "jessica@wildlifeviewingak.com" },
  { id: 5, name: "Erik Johansen", company: "Kenai River Guides", category: "Fishing", location: "Soldotna", region: "Kenai", specialties: ["King Salmon", "Rainbow Trout", "Fly Fishing"], certifications: ["Master Guide", "Fly Fishing Instructor", "USCG Licensed"], experience: "20 years", rating: 4.8, reviews: 312, season: "May - October", image: "🎣", description: "Kenai River specialist with legendary knowledge of salmon runs. Premium drift boat fishing for all skill levels.", phone: "(907) 555-0105", email: "erik@kenairiverguides.com" },
  { id: 6, name: "Amanda White", company: "Arctic Kayak Adventures", category: "Kayaking", location: "Seward", region: "Kenai", specialties: ["Sea Kayaking", "Glacier Kayaking", "Wildlife Tours"], certifications: ["ACA Certified", "Wilderness First Responder", "Alaska Guide License"], experience: "10 years", rating: 5.0, reviews: 178, season: "May - September", image: "🛶", description: "Expert sea kayak guide exploring Resurrection Bay and Aialik Glacier. Small groups, personalized attention, unforgettable coastal adventures.", phone: "(907) 555-0106", email: "amanda@arctickayakak.com" },
  { id: 7, name: "James 'Trapper' McGraw", company: "Interior Alaska Outfitters", category: "Hunting", location: "Fairbanks", region: "Interior", specialties: ["Moose", "Caribou", "Dall Sheep"], certifications: ["Master Guide License", "Registered Guide-Outfitter", "Big Game Specialist"], experience: "28 years", rating: 4.9, reviews: 134, season: "August - October", image: "🎯", description: "Legendary Interior Alaska outfitter. Backcountry hunts for moose, caribou, and Dall sheep. High success rates, exceptional wilderness camps.", phone: "(907) 555-0107", email: "james@interioralaskaoutfitters.com" },
  { id: 8, name: "Rachel Kim", company: "Exit Glacier Adventures", category: "Glacier Tours", location: "Seward", region: "Kenai", specialties: ["Glacier Hiking", "Ice Trekking", "Nature Photography"], certifications: ["AMGA Guide", "Leave No Trace Trainer", "Alaska Guide License"], experience: "8 years", rating: 4.9, reviews: 221, season: "May - September", image: "🏔️", description: "Passionate glacier guide offering accessible hikes to expert ice trekking. Exit Glacier specialist with environmental education focus.", phone: "(907) 555-0108", email: "rachel@exitglacieradventures.com" },
  { id: 9, name: "David 'Brownie' Patterson", company: "Katmai Bear Viewing", category: "Wildlife Viewing", location: "King Salmon", region: "Interior", specialties: ["Brown Bear Photography", "Brooks Falls", "Wilderness Camps"], certifications: ["Master Guide", "Wildlife Photography Expert", "Naturalist"], experience: "22 years", rating: 5.0, reviews: 267, season: "June - September", image: "🐻", description: "Premier Katmai bear viewing guide. Brooks Falls expert, world-class bear photography opportunities, safe intimate wildlife encounters.", phone: "(907) 555-0109", email: "david@katmaibearviewing.com" },
  { id: 10, name: "Lisa Nakamura", company: "Chugach Powder Guides", category: "Backcountry", location: "Girdwood", region: "Chugach", specialties: ["Backcountry Skiing", "Heli-Skiing", "Avalanche Safety"], certifications: ["AMGA Ski Guide", "Avalanche Level 3", "Wilderness First Responder"], experience: "14 years", rating: 4.8, reviews: 156, season: "December - April", image: "⛷️", description: "Elite backcountry ski guide in the Chugach Mountains. Heli-skiing adventures, avalanche safety courses, and powder dreams come true.", phone: "(907) 555-0110", email: "lisa@chugachpowderguides.com" },
  { id: 11, name: "Robert 'Fishman' Anderson", company: "Prince William Sound Charters", category: "Fishing", location: "Valdez", region: "Chugach", specialties: ["Silver Salmon", "Pink Salmon", "Rockfish"], certifications: ["USCG Licensed", "Alaska Guide License", "CPR/First Aid"], experience: "18 years", rating: 4.7, reviews: 198, season: "May - September", image: "🎣", description: "Prince William Sound fishing expert. Scenic charters, abundant salmon, and halibut fishing surrounded by glaciers and wildlife.", phone: "(907) 555-0111", email: "robert@pwscharters.com" },
  { id: 12, name: "Maria Gonzales", company: "Iditarod Dog Sled Tours", category: "Backcountry", location: "Willow", region: "Interior", specialties: ["Dog Sledding", "Musher Training", "Winter Wilderness"], certifications: ["Iditarod Veteran", "Alaska Guide License", "Dog Care Specialist"], experience: "16 years", rating: 5.0, reviews: 284, season: "November - March", image: "🐕", description: "Iditarod musher offering authentic dog sled experiences. Meet champion sled dogs, learn mushing basics, winter wonderland adventures.", phone: "(907) 555-0112", email: "maria@iditaroddogsledtours.com" },
  { id: 13, name: "Chris 'Wingman' Taylor", company: "Alaska Flightseeing Adventures", category: "Backcountry", location: "Talkeetna", region: "Interior", specialties: ["Denali Flightseeing", "Glacier Landings", "Aerial Photography"], certifications: ["Commercial Pilot", "Glacier Landing Specialist", "20,000+ flight hours"], experience: "24 years", rating: 4.9, reviews: 412, season: "Year-round", image: "✈️", description: "Expert bush pilot offering breathtaking Denali flightseeing tours. Glacier landings, aerial photography, and the flight of a lifetime.", phone: "(907) 555-0113", email: "chris@alaskaflightseeing.com" },
  { id: 14, name: "Jennifer Brooks", company: "Southeast Alaska Eco Tours", category: "Wildlife Viewing", location: "Ketchikan", region: "Tongass", specialties: ["Whale Watching", "Rainforest Tours", "Marine Wildlife"], certifications: ["Marine Naturalist", "Alaska Guide License", "USCG Licensed"], experience: "11 years", rating: 4.8, reviews: 234, season: "May - September", image: "🐋", description: "Marine naturalist specializing in Southeast Alaska wildlife. Whale watching, rainforest ecology, and pristine Inside Passage exploration.", phone: "(907) 555-0114", email: "jennifer@southeastalaskaeco.com" },
  { id: 15, name: "Brian 'Ice' Morrison", company: "Arctic Circle Expeditions", category: "Backcountry", location: "Deadhorse", region: "Interior", specialties: ["Arctic Tours", "Northern Lights", "Polar Wildlife"], certifications: ["Master Guide", "Arctic Specialist", "Wilderness First Responder"], experience: "19 years", rating: 4.9, reviews: 167, season: "Year-round", image: "🌌", description: "Arctic expedition expert. Journey to the top of the world, aurora viewing, polar bear safety, and ultimate frontier adventures.", phone: "(907) 555-0115", email: "brian@arcticcircleexpeditions.com" },
];

const activityCategories = [
  { name: 'Fishing', icon: '🎣', count: 3, color: 'from-blue-600 to-blue-400' },
  { name: 'Hunting', icon: '🎯', count: 2, color: 'from-amber-600 to-amber-400' },
  { name: 'Glacier Tours', icon: '🏔️', count: 2, color: 'from-cyan-600 to-cyan-400' },
  { name: 'Wildlife Viewing', icon: '🐻', count: 3, color: 'from-green-600 to-green-400' },
  { name: 'Backcountry', icon: '⛷️', count: 4, color: 'from-purple-600 to-purple-400' },
  { name: 'Kayaking', icon: '🛶', count: 1, color: 'from-teal-600 to-teal-400' },
];

const regions = [
  { name: 'Kenai Peninsula', key: 'Kenai', desc: 'World-class fishing on the Kenai River, glacier kayaking in Seward, and stunning coastal adventures.' },
  { name: 'Tongass National Forest', key: 'Tongass', desc: 'Glacier hiking in Juneau, whale watching in Ketchikan, and temperate rainforest exploration.' },
  { name: 'Chugach Region', key: 'Chugach', desc: 'Heli-skiing in Girdwood, Prince William Sound fishing, and mountain adventures.' },
  { name: 'Interior Alaska', key: 'Interior', desc: 'Denali wildlife viewing, Arctic expeditions, big game hunting, and Northern Lights tours.' },
];

const testimonials = [
  { quote: "Captain Mike put us on halibut all day. Best fishing trip of my life — we'll be back every summer.", author: "Jake R.", location: "Seattle, WA", rating: 5 },
  { quote: "Sarah's glacier tour was absolutely breathtaking. She made ice climbing feel safe and exhilarating at the same time.", author: "Emily T.", location: "Denver, CO", rating: 5 },
  { quote: "David's bear viewing tour at Brooks Falls exceeded all expectations. We were 20 feet from feeding brown bears.", author: "Michael S.", location: "Austin, TX", rating: 5 },
  { quote: "The dog sled experience with Maria was magical. My kids are still talking about it six months later.", author: "Linda K.", location: "Portland, OR", rating: 5 },
  { quote: "Erik knows every inch of the Kenai River. We landed a 65-pound king salmon on our first morning out.", author: "Tom W.", location: "Chicago, IL", rating: 5 },
];

const categories = ["All", "Fishing", "Hunting", "Glacier Tours", "Wildlife Viewing", "Backcountry", "Kayaking"];
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
    "knowsAbout": ["Fishing Guides", "Hunting Outfitters", "Glacier Tours", "Wildlife Viewing", "Backcountry", "Kayaking"]
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-slate-950 text-white">
        <Helmet>
          <title>Alaska Guide Listings — Find Expert Alaska Fishing Guides, Hunting Outfitters & Adventure Tours</title>
          <meta name="description" content="Discover Alaska's best fishing guides, hunting outfitters, glacier tour guides, and adventure specialists. Certified professionals, verified reviews, easy booking." />
          <meta name="keywords" content="Alaska fishing guides, hunting outfitters Alaska, Alaska adventure tours, glacier tour guides, Alaska guide directory, fishing charters Alaska, bear viewing guides" />
          <link rel="canonical" href="https://alaskaguidelistings.com" />
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>

        {/* Hero */}
        <header className="relative py-24 md:py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Find Your Perfect Alaska Guide
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              15+ verified guides & outfitters across Alaska — fishing, hunting, glacier tours, wildlife viewing, and more.
            </p>
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search guides, activities, specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 text-lg"
              />
            </div>
          </div>
        </header>

        {/* Activity Categories */}
        <section className="py-16 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Browse by Activity</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {activityCategories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(selectedCategory === cat.name ? "All" : cat.name)}
                  className={`relative overflow-hidden rounded-xl p-5 text-center transition-all hover:-translate-y-1 ${selectedCategory === cat.name ? 'ring-2 ring-blue-400 bg-slate-800' : 'bg-slate-800/50 border border-slate-700/50 hover:border-slate-600'}`}
                >
                  <span className="text-3xl block mb-2">{cat.icon}</span>
                  <span className="font-semibold text-sm">{cat.name}</span>
                  <span className="block text-xs text-slate-400 mt-1">{cat.count} guides</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Bar + Guide Grid */}
        <section className="py-12 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
              <div className="flex-1 flex flex-col sm:flex-row gap-4 w-full">
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500">
                  {categories.map(cat => <option key={cat} value={cat}>{cat === "All" ? "All Categories" : cat}</option>)}
                </select>
                <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500">
                  {locations.map(loc => <option key={loc} value={loc}>{loc === "All" ? "All Locations" : loc}</option>)}
                </select>
              </div>
              <p className="text-slate-400 text-sm">{filteredGuides.length} guides found</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides.map(guide => (
                <div key={guide.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all hover:-translate-y-1 group">
                  <div className="p-6">
                    <div className="text-5xl mb-4 text-center">{guide.image}</div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition">{guide.name}</h3>
                    <p className="text-blue-400 font-medium text-sm mb-3">{guide.company}</p>
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400 text-sm">{'★'.repeat(Math.floor(guide.rating))}{'☆'.repeat(5 - Math.floor(guide.rating))}</div>
                      <span className="ml-2 text-xs text-slate-400">{guide.rating} ({guide.reviews} reviews)</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                      <div><span className="text-slate-500">Location:</span> <span className="text-slate-300">{guide.location}</span></div>
                      <div><span className="text-slate-500">Experience:</span> <span className="text-slate-300">{guide.experience}</span></div>
                      <div><span className="text-slate-500">Season:</span> <span className="text-slate-300">{guide.season}</span></div>
                      <div><span className="text-slate-500">Category:</span> <span className="text-slate-300">{guide.category}</span></div>
                    </div>
                    <p className="text-sm text-slate-400 line-clamp-2 mb-4">{guide.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {guide.specialties.map((s, i) => (
                        <span key={i} className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded-full">{s}</span>
                      ))}
                    </div>
                    <button onClick={() => setSelectedGuide(guide)} className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-medium transition">
                      View Details & Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Guide Locations Across Alaska</h2>
            <p className="text-slate-400 text-center mb-10">Our guides operate in Alaska's most sought-after destinations</p>
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                {["Homer", "Juneau", "Seward", "Denali", "Fairbanks", "Kodiak", "Valdez", "Talkeetna", "Ketchikan", "Girdwood"].map(loc => (
                  <button key={loc} onClick={() => { setSelectedLocation(loc); setSelectedCategory("All"); }} className="bg-slate-900/50 border border-slate-600 rounded-xl p-4 hover:border-blue-500 hover:bg-blue-900/20 transition">
                    <span className="text-2xl block mb-1">📍</span>
                    <span className="text-sm font-medium">{loc}</span>
                    <span className="block text-xs text-slate-400">{guides.filter(g => g.location === loc).length} guides</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regional Sections */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Explore by Region</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regions.map((region) => {
                const regionGuides = guides.filter(g => g.region === region.key);
                return (
                  <div key={region.key} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-600 transition">
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">{region.name}</h3>
                    <p className="text-slate-400 mb-4">{region.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {regionGuides.slice(0, 3).map(g => (
                        <span key={g.id} className="text-xs bg-slate-800 border border-slate-700 px-3 py-1 rounded-full text-slate-300">{g.name}</span>
                      ))}
                    </div>
                    <button onClick={() => { setSelectedLocation("All"); setSelectedCategory("All"); setSearchTerm(region.key); }} className="text-blue-400 text-sm font-medium hover:text-blue-300 transition">
                      View {regionGuides.length} guides in this region →
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">What Adventurers Say</h2>
            <p className="text-slate-400 text-center mb-12">Real reviews from real Alaska adventures</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <div className="flex text-yellow-400 mb-3">{'★'.repeat(t.rating)}</div>
                  <p className="text-slate-300 italic mb-4">"{t.quote}"</p>
                  <div>
                    <p className="font-semibold text-sm">{t.author}</p>
                    <p className="text-xs text-slate-500">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* List Your Guide Service CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-emerald-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">List Your Guide Service</h2>
            <p className="text-xl text-slate-300 mb-8">Join Alaska's premier guide directory and connect with thousands of adventure seekers.</p>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div><span className="text-3xl block mb-2">📈</span><span className="font-semibold">10,000+ Monthly Visitors</span></div>
                <div><span className="text-3xl block mb-2">⭐</span><span className="font-semibold">Verified Reviews System</span></div>
                <div><span className="text-3xl block mb-2">📱</span><span className="font-semibold">Direct Booking Leads</span></div>
              </div>
            </div>
            <div className="space-y-2">
              <a href="mailto:partners@alaskaguidelistings.com" className="inline-block bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition text-lg">
                Apply to List Your Service
              </a>
              <p className="text-sm text-slate-300">Contact: partners@alaskaguidelistings.com · (907) 555-GUIDE</p>
            </div>
          </div>
        </section>

        {/* Cross Promotion */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Explore Our Alaska Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="https://alaskasstore.com" className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-emerald-600/50 transition group text-center">
                <span className="text-3xl block mb-2">🛍️</span>
                <h3 className="font-bold text-emerald-400">Alaska's Store</h3>
                <p className="text-sm text-slate-400 mt-1">Authentic Alaska gear & products</p>
              </a>
              <a href="https://alaskadronesurvey.com" className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-sky-600/50 transition group text-center">
                <span className="text-3xl block mb-2">📸</span>
                <h3 className="font-bold text-sky-400">Alaska Drone Survey</h3>
                <p className="text-sm text-slate-400 mt-1">Aerial photography & mapping</p>
              </a>
              <a href="https://juneau.air" className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-600/50 transition group text-center">
                <span className="text-3xl block mb-2">✈️</span>
                <h3 className="font-bold text-amber-400">Juneau Air</h3>
                <p className="text-sm text-slate-400 mt-1">Bush charter flights across Alaska</p>
              </a>
            </div>
          </div>
        </section>

        {/* Guide Detail Modal */}
        {selectedGuide && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setSelectedGuide(null)}>
            <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedGuide.name}</h2>
                    <p className="text-blue-400 font-medium">{selectedGuide.company}</p>
                  </div>
                  <button onClick={() => setSelectedGuide(null)} className="text-slate-400 hover:text-white text-2xl leading-none">×</button>
                </div>
                <div className="text-5xl mb-6 text-center">{selectedGuide.image}</div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">{'★'.repeat(Math.floor(selectedGuide.rating))}</div>
                  <span className="ml-2 text-sm text-slate-400">{selectedGuide.rating} ({selectedGuide.reviews} reviews)</span>
                </div>
                <p className="text-slate-300 mb-6">{selectedGuide.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div><span className="text-slate-500">Category:</span> <span className="text-slate-200">{selectedGuide.category}</span></div>
                  <div><span className="text-slate-500">Location:</span> <span className="text-slate-200">{selectedGuide.location}</span></div>
                  <div><span className="text-slate-500">Experience:</span> <span className="text-slate-200">{selectedGuide.experience}</span></div>
                  <div><span className="text-slate-500">Season:</span> <span className="text-slate-200">{selectedGuide.season}</span></div>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-slate-400 mb-2">Specialties</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedGuide.specialties.map((s, i) => <span key={i} className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">{s}</span>)}
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-medium text-slate-400 mb-2">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedGuide.certifications.map((c, i) => <span key={i} className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full text-sm">{c}</span>)}
                  </div>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 mb-6">
                  <h3 className="font-bold mb-2">Contact Information</h3>
                  <p className="text-sm text-slate-300">Phone: {selectedGuide.phone}</p>
                  <p className="text-sm text-slate-300">Email: {selectedGuide.email}</p>
                </div>
                <div className="flex gap-3">
                  <a href={`tel:${selectedGuide.phone}`} className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-medium text-center transition">Call Now</a>
                  <a href={`mailto:${selectedGuide.email}`} className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-medium text-center transition">Email Inquiry</a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-3 text-blue-400">Alaska Guide Listings</h3>
                <p className="text-slate-400 text-sm">Your trusted directory for Alaska's best guides and outfitters.</p>
              </div>
              <div>
                <h3 className="font-bold mb-3">Activities</h3>
                <ul className="space-y-1 text-sm text-slate-400">
                  {categories.filter(c => c !== "All").map(c => <li key={c}>{c}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Regions</h3>
                <ul className="space-y-1 text-sm text-slate-400">
                  {regions.map(r => <li key={r.key}>{r.name}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Contact</h3>
                <p className="text-sm text-slate-400">info@alaskaguidelistings.com</p>
                <p className="text-sm text-slate-400">(907) 555-GUIDE</p>
                <p className="text-sm text-slate-400 mt-2">partners@alaskaguidelistings.com</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
              <p>© 2024 Alaska Guide Listings. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
