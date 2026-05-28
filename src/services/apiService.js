// Highly recognizable CDN images and media items for seeding a large television guide database
const IMAGES = {
  movies: [
    "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&q=80", // Action
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80", // Sci-Fi
    "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=800&q=80", // Drama
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80", // Fantasy
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80", // Horror
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80", // Thriller
    "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=800&q=80", // Adventure
    "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80", // Mystery
    "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=800&q=80", // Tech
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"  // Cyber
  ],
  live: [
    "https://images.unsplash.com/photo-1495020689067-958852a6565d?auto=format&fit=crop&w=800&q=80", // News
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80", // Anchors
    "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80", // Sports
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80", // Concerts
    "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80", // Play/Kids
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80", // Pop stage
    "https://images.unsplash.com/photo-1471295268307-f132f7e02538?auto=format&fit=crop&w=800&q=80", // Outdoors
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80", // Forests
    "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?auto=format&fit=crop&w=800&q=80", // Sky News
    "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=800&q=80"  // Tech show
  ],
  apps: {
    netflix: "https://img.icons8.com/color/512/netflix-desktop-app.png",
    prime: "https://img.icons8.com/color/512/amazon-prime-video.png",
    disney: "https://img.icons8.com/color/512/disney-plus.png",
    appletv: "https://img.icons8.com/ios-filled/512/apple-tv.png",
    youtube: "https://img.icons8.com/color/512/youtube-play.png",
    smartthings: "https://img.icons8.com/color/512/smartthings.png",
    tv: "https://img.icons8.com/fluency/512/tv.png",
    antenna: "https://img.icons8.com/fluency/512/antenna.png",
    xbox: "https://img.icons8.com/color/512/xbox.png",
    twitch: "https://img.icons8.com/color/512/twitch.png",
    nvidia: "https://img.icons8.com/color/512/nvidia.png",
    spotify: "https://img.icons8.com/color/512/spotify.png",
    hbo: "https://img.icons8.com/color/512/hbo.png",
    hulu: "https://img.icons8.com/color/512/hulu.png",
    steam: "https://img.icons8.com/ios-filled/512/steam.png",
    podcast: "https://img.icons8.com/color/512/podcast.png",
    chrome: "https://img.icons8.com/color/512/chrome.png",
    plex: "https://img.icons8.com/color/512/plex.png",
    vlc: "https://img.icons8.com/color/512/vlc.png",
    weather: "https://img.icons8.com/color/512/partly-cloudy-day.png"
  }
};

const SEED_DATA = {
  "for-you": {
    rows: [
      {
        title: "Quick Launch Apps",
        type: "square",
        items: [
          { id: "netflix_fl", title: "Netflix", iconUrl: IMAGES.apps.netflix, isApp: true },
          { id: "prime_fl", title: "Prime Video", iconUrl: IMAGES.apps.prime, isApp: true },
          { id: "disney_fl", title: "Disney+", iconUrl: IMAGES.apps.disney, isApp: true },
          { id: "appletv_fl", title: "Apple TV", iconUrl: IMAGES.apps.appletv, isApp: true, invertIcon: true },
          { id: "youtube_fl", title: "YouTube", iconUrl: IMAGES.apps.youtube, isApp: true },
          { id: "smartthings_fl", title: "SmartThings", iconUrl: IMAGES.apps.smartthings, isApp: true },
          { id: "samsung_fl", title: "Samsung Plus", iconUrl: IMAGES.apps.tv, isApp: true },
          { id: "live_fl", title: "Live TV", iconUrl: IMAGES.apps.antenna, isApp: true },
          { id: "xbox_fl", title: "Xbox Cloud", iconUrl: IMAGES.apps.xbox, isApp: true },
          { id: "twitch_fl", title: "Twitch", iconUrl: IMAGES.apps.twitch, isApp: true }
        ]
      },
      {
        title: "Recommended for You",
        type: "landscape",
        items: [
          { id: "reacher", title: "Reacher", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.1", year: "2024", resolution: "4K UHD", tags: ["Action", "Thriller"], description: "Veteran military police investigator Jack Reacher is falsely accused of murder and finds himself in a deadly conspiracy.", backdrop: IMAGES.movies[0], imageUrl: IMAGES.movies[0], actionText: "Watch Now", relatedTitle: "Adrenaline-Fueled Suspense Thrillers", bubbles: ["Alan Ritchson", "High-Octane Action", "Lee Child Novels", "Prime Originals"] },
          { id: "citadel", title: "Citadel", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 6.8", year: "2023", resolution: "HDR10+", tags: ["Sci-Fi", "Spy"], description: "Spy agency Citadel fell. Eight years later, elite agents reassemble to fight a global syndicate.", backdrop: IMAGES.movies[1], imageUrl: IMAGES.movies[1], relatedTitle: "High-Tech Espionage & Global Intrigues", bubbles: ["Richard Madden", "Priyanka Chopra", "Russo Brothers", "Spy Action"] },
          { id: "rings_of_power", title: "The Rings of Power", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 7.0", year: "2024", resolution: "Dolby Vision", tags: ["Fantasy", "Adventure"], description: "In the Second Age of Middle-earth, heroines confront the return of evil to the lands.", backdrop: IMAGES.movies[3], imageUrl: IMAGES.movies[3] },
          { id: "stranger_things", title: "Stranger Things", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 8.7", year: "2022", resolution: "4K Atmos", tags: ["Horror", "Sci-Fi"], description: "When a young boy vanishes, a small town uncovers secret experiments, supernatural forces, and a strange girl.", backdrop: IMAGES.movies[4], imageUrl: IMAGES.movies[4] },
          { id: "jack_ryan", title: "Jack Ryan", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.0", year: "2023", resolution: "4K UHD", tags: ["Thriller", "Action"], description: "CIA analyst Jack Ryan is thrust into dangerous field operations uncovering global terrorist communications.", backdrop: IMAGES.movies[5], imageUrl: IMAGES.movies[5] },
          { id: "the_boys", title: "The Boys", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.7", year: "2024", resolution: "HDR10+", tags: ["Action", "Dark Comedy"], description: "Superheroes behave as villains under a corrupt corporation. A vigilante squad fights back.", backdrop: IMAGES.movies[6], imageUrl: IMAGES.movies[6] },
          { id: "fallout", title: "Fallout", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.4", year: "2024", resolution: "Dolby Vision", tags: ["Sci-Fi", "Drama"], description: "The gentle denizens of luxury fallout shelters return to the irradiated hellscape their ancestors left behind.", backdrop: IMAGES.movies[7], imageUrl: IMAGES.movies[7] },
          { id: "wednesday", title: "Wednesday", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 8.1", year: "2022", resolution: "4K UHD", tags: ["Fantasy", "Mystery"], description: "Wednesday Addams investigates a monstrous killing spree while mastering her emerging psychic abilities.", backdrop: IMAGES.movies[8], imageUrl: IMAGES.movies[8] },
          { id: "the_crown", title: "The Crown", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 8.6", year: "2023", resolution: "4K HD", tags: ["Biography", "Drama"], description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.", backdrop: IMAGES.movies[9], imageUrl: IMAGES.movies[9] },
          { id: "reacher_s1", title: "Reacher Season 1", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.1", year: "2022", resolution: "1080p HD", tags: ["Action", "Crime"], description: "Jack Reacher visits Margrave, Georgia, only to find himself arrested for a murder he did not commit.", backdrop: IMAGES.movies[2], imageUrl: IMAGES.movies[2] }
        ]
      },
      {
        title: "Continue Watching",
        type: "landscape",
        items: [
          { id: "reacher_c", title: "Reacher - S2:E3", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.1", year: "2024", resolution: "4K", progress: 65, description: "Jack and team fall into a trap as they hunt down members of their former military unit.", backdrop: IMAGES.movies[0], imageUrl: IMAGES.movies[0] },
          { id: "rings_c", title: "Rings of Power - S1:E5", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 7.0", year: "2022", resolution: "Dolby Vision", progress: 35, description: "Elendil prepares to sail. Galadriel tries to convince Halbrand of his royal heritage.", backdrop: IMAGES.movies[3], imageUrl: IMAGES.movies[3] },
          { id: "stranger_c", title: "Stranger Things - S4:E2", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 8.7", year: "2022", resolution: "4K Atmos", progress: 80, description: "Dustin and Max investigate an urban legend. Mike travels to California to visit Eleven.", backdrop: IMAGES.movies[4], imageUrl: IMAGES.movies[4] },
          { id: "citadel_c", title: "Citadel - S1:E2", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 6.8", year: "2023", resolution: "1080p", progress: 50, description: "Mason and Nadia reunite in a high-stakes mission to secure the Citadel core database.", backdrop: IMAGES.movies[1], imageUrl: IMAGES.movies[1] },
          { id: "boys_c", title: "The Boys - S4:E4", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.7", year: "2024", resolution: "HDR10+", progress: 20, description: "Homelander returns to his childhood lab. Hughie faces a crisis at home.", backdrop: IMAGES.movies[6], imageUrl: IMAGES.movies[6] },
          { id: "fallout_c", title: "Fallout - S1:E3", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.4", year: "2024", resolution: "4K Atmos", progress: 90, description: "Lucy traverses the toxic ruins of Los Angeles. The Ghoul executes a heist.", backdrop: IMAGES.movies[7], imageUrl: IMAGES.movies[7] },
          { id: "wednesday_c", title: "Wednesday - S1:E3", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 8.1", year: "2022", resolution: "1080p", progress: 45, description: "Wednesday uncovers a dark secret about the founders of Jericho town.", backdrop: IMAGES.movies[8], imageUrl: IMAGES.movies[8] },
          { id: "crown_c", title: "The Crown - S6:E1", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 8.6", year: "2023", resolution: "4K", progress: 15, description: "Princess Diana spends a summer with Dodi Fayed in St. Tropez.", backdrop: IMAGES.movies[9], imageUrl: IMAGES.movies[9] },
          { id: "jack_c", title: "Jack Ryan - S4:E1", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.0", year: "2023", resolution: "4K UHD", progress: 30, description: "Jack investigates internal corruption inside the CIA covert black-ops units.", backdrop: IMAGES.movies[5], imageUrl: IMAGES.movies[5] },
          { id: "reacher1_c", title: "Reacher - S1:E2", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.1", year: "2022", resolution: "1080p", progress: 75, description: "Reacher teams up with local deputy Roscoe and chief detective Finlay.", backdrop: IMAGES.movies[2], imageUrl: IMAGES.movies[2] }
        ]
      },
      {
        title: "Trending Blockbusters",
        type: "landscape",
        items: [
          { id: "interstellar", title: "Interstellar", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 8.7", year: "2014", resolution: "Dolby Vision", tags: ["Sci-Fi", "Drama"], description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", backdrop: IMAGES.movies[1], imageUrl: IMAGES.movies[1] },
          { id: "inception", title: "Inception", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 8.8", year: "2010", resolution: "4K UHD", tags: ["Action", "Sci-Fi"], description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task.", backdrop: IMAGES.movies[2], imageUrl: IMAGES.movies[2] },
          { id: "oppenheimer", title: "Oppenheimer", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.9", year: "2023", resolution: "4K IMAX", tags: ["Biography", "History"], description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.", backdrop: IMAGES.movies[9], imageUrl: IMAGES.movies[9] },
          { id: "dune_2", title: "Dune: Part Two", brand: "HBO Max", brandColor: "#107C10", rating: "IMDb 8.6", year: "2024", resolution: "Dolby Atmos", tags: ["Sci-Fi", "Adventure"], description: "Paul Atreides unites with the Fremen while seeking revenge against the conspirators who destroyed his family.", backdrop: IMAGES.movies[3], imageUrl: IMAGES.movies[3] },
          { id: "dark_knight", title: "The Dark Knight", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 9.0", year: "2008", resolution: "4K HD", tags: ["Action", "Crime"], description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept his trial.", backdrop: IMAGES.movies[5], imageUrl: IMAGES.movies[5] },
          { id: "avatar_2", title: "Avatar: The Way of Water", brand: "Disney+", brandColor: "#113CCF", rating: "IMDb 7.6", year: "2022", resolution: "3D HDR", tags: ["Sci-Fi", "Fantasy"], description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.", backdrop: IMAGES.movies[4], imageUrl: IMAGES.movies[4] },
          { id: "gladiator", title: "Gladiator", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.5", year: "2000", resolution: "4K UHD", tags: ["Action", "History"], description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.", backdrop: IMAGES.movies[6], imageUrl: IMAGES.movies[6] },
          { id: "matrix", title: "The Matrix", brand: "HBO Max", brandColor: "#107C10", rating: "IMDb 8.7", year: "1999", resolution: "Dolby Vision", tags: ["Sci-Fi", "Action"], description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth.", backdrop: IMAGES.movies[7], imageUrl: IMAGES.movies[7] },
          { id: "spider_verse", title: "Across the Spider-Verse", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 8.6", year: "2023", resolution: "4K UHD", tags: ["Animation", "Action"], description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its existence.", backdrop: IMAGES.movies[8], imageUrl: IMAGES.movies[8] },
          { id: "knives_out", title: "Glass Onion: Knives Out", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 7.2", year: "2022", resolution: "4K Atmos", tags: ["Comedy", "Mystery"], description: "Famed Southern detective Benoit Blanc travels to Greece to peel back the layers of a mystery involving a tech billionaire.", backdrop: IMAGES.movies[0], imageUrl: IMAGES.movies[0] }
        ]
      },
      {
        title: "Prime Originals",
        type: "landscape",
        items: [
          { id: "fallout_orig", title: "Fallout", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.4", year: "2024", resolution: "4K Atmos", tags: ["Sci-Fi", "Drama"], description: "Lucy MacLean steps out of Vault 33 into the irradiated wasteland of post-apocalyptic Los Angeles.", backdrop: IMAGES.movies[7], imageUrl: IMAGES.movies[7] },
          { id: "boys_orig", title: "The Boys", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.7", year: "2024", resolution: "Dolby Vision", tags: ["Action", "Comedy"], description: "Vought's elite supes behave like corrupt gods. Billy Butcher's crew seeks to bring them down.", backdrop: IMAGES.movies[6], imageUrl: IMAGES.movies[6] },
          { id: "reacher_orig", title: "Reacher", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.1", year: "2024", resolution: "4K UHD", tags: ["Crime", "Action"], description: "Jack Reacher uncovers a conspiracy in Margrave and puts his massive military combat training to work.", backdrop: IMAGES.movies[0], imageUrl: IMAGES.movies[0] },
          { id: "invincible_orig", title: "Invincible", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.7", year: "2024", resolution: "Dolby Vision", tags: ["Animation", "Sci-Fi"], description: "Mark Grayson, son of the world's most powerful superhero, inherits his own powers and uncovers family secrets.", backdrop: IMAGES.movies[8], imageUrl: IMAGES.movies[8] },
          { id: "rings_orig", title: "The Rings of Power", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 7.0", year: "2024", resolution: "4K HDR", tags: ["Fantasy", "Epic"], description: "Galadriel, Elrond, and the kingdoms of Middle-earth forge rings to combat the shadows of Sauron.", backdrop: IMAGES.movies[3], imageUrl: IMAGES.movies[3] },
          { id: "citadel_orig", title: "Citadel", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 6.8", year: "2023", resolution: "HDR10+", tags: ["Spy", "Thriller"], description: "Global spies regain their memories years after their agency was destroyed by a shadow group.", backdrop: IMAGES.movies[1], imageUrl: IMAGES.movies[1] },
          { id: "jack_orig", title: "Jack Ryan", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.0", year: "2023", resolution: "4K UHD", tags: ["Action", "War"], description: "CIA analyst Jack Ryan investigates global financial crimes and gets deployed to deep covert ops.", backdrop: IMAGES.movies[5], imageUrl: IMAGES.movies[5] },
          { id: "wheel_time", title: "The Wheel of Time", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 7.2", year: "2023", resolution: "4K HDR", tags: ["Fantasy", "Adventure"], description: "Moiraine, a member of a powerful organization of women channelers, guides five young villagers on a dangerous journey.", backdrop: IMAGES.movies[4], imageUrl: IMAGES.movies[4] },
          { id: "good_omens", title: "Good Omens", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.0", year: "2023", resolution: "Dolby Vision", tags: ["Comedy", "Fantasy"], description: "An angel and a demon who have grown fond of Earth must team up to prevent the Apocalypse.", backdrop: IMAGES.movies[2], imageUrl: IMAGES.movies[2] },
          { id: "upload", title: "Upload", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 7.9", year: "2023", resolution: "1080p HD", tags: ["Comedy", "Sci-Fi"], description: "A man uploads his consciousness into a luxury digital afterlife, falling in love with his customer service agent.", backdrop: IMAGES.movies[9], imageUrl: IMAGES.movies[9] }
        ]
      },
      {
        title: "Action & Adventure",
        type: "landscape",
        items: [
          { id: "john_wick", title: "John Wick: Chapter 4", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 7.7", year: "2023", resolution: "4K", tags: ["Action", "Thriller"], description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face a new enemy.", backdrop: IMAGES.movies[0], imageUrl: IMAGES.movies[0] },
          { id: "top_gun", title: "Top Gun: Maverick", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.3", year: "2022", resolution: "Dolby Vision", tags: ["Action", "Drama"], description: "After thirty years, Maverick continues to push the envelope as a top naval aviator, training a new squad for an impossible mission.", backdrop: IMAGES.movies[9], imageUrl: IMAGES.movies[9] },
          { id: "mad_max", title: "Mad Max: Fury Road", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 8.1", year: "2015", resolution: "4K UHD", tags: ["Action", "Sci-Fi"], description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search of her homeland with the help of Max.", backdrop: IMAGES.movies[6], imageUrl: IMAGES.movies[6] },
          { id: "mission_8", title: "Mission: Impossible - Dead Reckoning", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 7.8", year: "2023", resolution: "4K Atmos", tags: ["Action", "Adventure"], description: "Ethan Hunt and his IMF team track down a dangerous weapon that threatens all of humanity.", backdrop: IMAGES.movies[5], imageUrl: IMAGES.movies[5] },
          { id: "dune_1", title: "Dune: Part One", brand: "HBO Max", brandColor: "#107C10", rating: "IMDb 8.0", year: "2021", resolution: "Dolby Vision", tags: ["Sci-Fi", "Adventure"], description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset on a desert planet.", backdrop: IMAGES.movies[3], imageUrl: IMAGES.movies[3] },
          { id: "batman_22", title: "The Batman", brand: "HBO Max", brandColor: "#107C10", rating: "IMDb 7.8", year: "2022", resolution: "4K UHD", tags: ["Action", "Crime"], description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.", backdrop: IMAGES.movies[1], imageUrl: IMAGES.movies[1] },
          { id: "bullet_train", title: "Bullet Train", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 7.3", year: "2022", resolution: "1080p HD", tags: ["Action", "Comedy"], description: "Five assassins aboard a fast-moving bullet train find their missions are all interconnected.", backdrop: IMAGES.movies[2], imageUrl: IMAGES.movies[2] },
          { id: "grey_man", title: "The Gray Man", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 6.5", year: "2022", resolution: "4K UHD", tags: ["Action", "Spy"], description: "When a shadowy CIA agent uncovers agency secrets, he becomes the target of a psychopathic rogue contractor.", backdrop: IMAGES.movies[8], imageUrl: IMAGES.movies[8] },
          { id: "northman", title: "The Northman", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 7.1", year: "2022", resolution: "Dolby Vision", tags: ["Action", "Drama"], description: "A young Viking prince embarks on a quest to avenge his father's murder and save his mother.", backdrop: IMAGES.movies[7], imageUrl: IMAGES.movies[7] },
          { id: "free_guy", title: "Free Guy", brand: "Disney+", brandColor: "#113CCF", rating: "IMDb 7.1", year: "2021", resolution: "4K UHD", tags: ["Action", "Comedy"], description: "A bank teller discovers that he's actually an NPC inside a brutal open-world video game.", backdrop: IMAGES.movies[4], imageUrl: IMAGES.movies[4] }
        ]
      },
      {
        title: "Sci-Fi & Fantasy",
        type: "landscape",
        items: [
          { id: "avatar_1", title: "Avatar", brand: "Disney+", brandColor: "#113CCF", rating: "IMDb 7.9", year: "2009", resolution: "4K HDR", tags: ["Sci-Fi", "Fantasy"], description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting his world.", backdrop: IMAGES.movies[4], imageUrl: IMAGES.movies[4] },
          { id: "star_wars_9", title: "Star Wars: The Rise of Skywalker", brand: "Disney+", brandColor: "#113CCF", rating: "IMDb 6.5", year: "2019", resolution: "4K Dolby", tags: ["Sci-Fi", "Adventure"], description: "The surviving Resistance faces the First Order once more in the final chapter of the Skywalker saga.", backdrop: IMAGES.movies[3], imageUrl: IMAGES.movies[3] },
          { id: "blade_runner_49", title: "Blade Runner 2049", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 8.0", year: "2017", resolution: "4K UHD", tags: ["Sci-Fi", "Mystery"], description: "A new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos.", backdrop: IMAGES.movies[1], imageUrl: IMAGES.movies[1] },
          { id: "tenet", title: "Tenet", brand: "HBO Max", brandColor: "#107C10", rating: "IMDb 7.3", year: "2020", resolution: "4K Atmos", tags: ["Sci-Fi", "Action"], description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world.", backdrop: IMAGES.movies[2], imageUrl: IMAGES.movies[2] },
          { id: "harry_potter_8", title: "Harry Potter & Deathly Hallows II", brand: "HBO Max", brandColor: "#107C10", rating: "IMDb 8.1", year: "2011", resolution: "1080p HD", tags: ["Fantasy", "Adventure"], description: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord.", backdrop: IMAGES.movies[8], imageUrl: IMAGES.movies[8] },
          { id: "arrival", title: "Arrival", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 7.9", year: "2016", resolution: "4K UHD", tags: ["Sci-Fi", "Drama"], description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.", backdrop: IMAGES.movies[5], imageUrl: IMAGES.movies[5] },
          { id: "ex_machina", title: "Ex Machina", brand: "HBO Max", brandColor: "#107C10", rating: "IMDb 7.7", year: "2014", resolution: "1080p", tags: ["Sci-Fi", "Mystery"], description: "A programmer at an internet-search giant is invited to administer the Turing test to an intelligent humanoid robot.", backdrop: IMAGES.movies[9], imageUrl: IMAGES.movies[9] },
          { id: "ready_player", title: "Ready Player One", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 7.4", year: "2018", resolution: "4K Atmos", tags: ["Sci-Fi", "Adventure"], description: "When the creator of a virtual reality world dies, he releases a video in which he challenges all OASIS users to find his Easter egg.", backdrop: IMAGES.movies[0], imageUrl: IMAGES.movies[0] },
          { id: "prestige", title: "The Prestige", brand: "Prime Video", brandColor: "#00A8E1", rating: "IMDb 8.5", year: "2006", resolution: "1080p HD", tags: ["Drama", "Mystery"], description: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion.", backdrop: IMAGES.movies[6], imageUrl: IMAGES.movies[6] },
          { id: "edge_tomorrow", title: "Edge of Tomorrow", brand: "Netflix", brandColor: "#E50914", rating: "IMDb 7.9", year: "2014", resolution: "4K UHD", tags: ["Sci-Fi", "Action"], description: "A soldier fighting aliens gets caught in a time loop, repeating his last day of combat over and over.", backdrop: IMAGES.movies[7], imageUrl: IMAGES.movies[7] }
        ]
      },

    ]
  },
  "live": {
    rows: [
      {
        title: "Live Featured Channels",
        type: "landscape",
        items: [
          { id: "abc_live", title: "ABC News Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p HD", liveShow: "ABC News Live Prime with Linsey Davis", progress: 45, duration: "7:00 PM - 8:30 PM", tags: ["News", "World"], description: "Linsey Davis anchors live coverage of today's primary international headlines, featuring reporting from the field.", backdrop: IMAGES.live[0], imageUrl: IMAGES.live[0], actionText: "Watch Live" },
          { id: "nbc_live", title: "NBC News NOW", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p HD", liveShow: "Top Story with Tom Llamas", progress: 75, duration: "8:00 PM - 9:00 PM", tags: ["News", "US"], description: "Tom Llamas leads a fast-paced rundown of the day's top political and cultural headlines, bringing field reporters in live.", backdrop: IMAGES.live[1], imageUrl: IMAGES.live[1] },
          { id: "cbs_sports_live", title: "CBS Sports HQ", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p HD", liveShow: "Fantasy Football Today Live", progress: 60, duration: "8:00 PM - 10:00 PM", tags: ["Sports", "Fantasy"], description: "Start and sit advice, waiver wire suggestions, and expert mock drafts to prepare you for league victory.", backdrop: IMAGES.live[2], imageUrl: IMAGES.live[2] },
          { id: "vevo_pop_live", title: "vevo pop", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p HD", liveShow: "Today's Top Pop Hits!", progress: 90, duration: "8:00 PM - 8:45 PM", tags: ["Music", "Pop"], description: "Continuous stream of Billboard-charting pop music videos from global hit artists in high definition.", backdrop: IMAGES.live[3], imageUrl: IMAGES.live[3] },
          { id: "moonbug_live", title: "Moonbug Kids Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "720p", liveShow: "CoComelon & Friends Kids Hour", progress: 20, duration: "8:15 PM - 8:45 PM", tags: ["Kids", "Cartoons"], description: "JJ, Cody, and Nina host a fun-filled, musical learning adventure with songs, numbers, and educational cartoons.", backdrop: IMAGES.live[4], imageUrl: IMAGES.live[4] },
          { id: "redbull_live", title: "Red Bull TV", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p HD", liveShow: "Red Bull Soapbox Race Live", progress: 35, duration: "8:00 PM - 10:00 PM", tags: ["Sports", "Extreme"], description: "Amateur racers pilot homemade gravity-powered soapbox vehicles down a specialized obstacle course in London.", backdrop: IMAGES.live[6], imageUrl: IMAGES.live[6] },
          { id: "bloomberg_live", title: "Bloomberg TV", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p HD", liveShow: "Bloomberg Technology Live", progress: 50, duration: "8:00 PM - 9:00 PM", tags: ["News", "Business"], description: "Daily reports on global tech trends, financial mergers, stocks, VC funding, and interviews with CEOs.", backdrop: IMAGES.live[9], imageUrl: IMAGES.live[9] },
          { id: "sky_news_live", title: "Sky News Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p HD", liveShow: "Sky News at Ten", progress: 85, duration: "10:00 PM - 11:00 PM", tags: ["News", "International"], description: "In-depth reporting on political shifts in the UK and overseas, with analytical reports and roundtables.", backdrop: IMAGES.live[8], imageUrl: IMAGES.live[8] },
          { id: "weather_live", title: "WeatherNation Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "720p", liveShow: "National Weather Forecast", progress: 10, duration: "8:30 PM - 9:00 PM", tags: ["Weather", "Safety"], description: "Real-time radar updates, regional weather projections, storm tracking, and severe weather warnings.", backdrop: IMAGES.live[7], imageUrl: IMAGES.live[7] },
          { id: "discovery_live", title: "Discovery Live Channel", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p HD", liveShow: "MythBusters Marathon Live", progress: 40, duration: "8:00 PM - 9:30 PM", tags: ["Entertainment", "Science"], description: "Adam and Jamie put popular science urban legends to the test, separating myths from actual physical facts.", backdrop: IMAGES.live[5], imageUrl: IMAGES.live[5] }
        ]
      },
      {
        title: "Live News & World Reports",
        type: "landscape",
        items: [
          { id: "abc_news_desk", title: "ABC News Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Global Reports Live", progress: 60, duration: "8 PM - 9 PM", tags: ["News"], description: "ABC correspondents bring international headlines from the frontlines.", backdrop: IMAGES.live[0], imageUrl: IMAGES.live[0] },
          { id: "nbc_news_desk", title: "NBC News NOW", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Now Tonight with Gadi Schwartz", progress: 45, duration: "8 PM - 9 PM", tags: ["News"], description: "Fast-paced reporting on culture, tech, and hard news from across the United States.", backdrop: IMAGES.live[1], imageUrl: IMAGES.live[1] },
          { id: "sky_news_desk", title: "Sky News Global", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Sky Press Preview Live", progress: 80, duration: "8 PM - 9:30 PM", tags: ["News"], description: "A review of tomorrow's papers with leading journalists, commentators and politicians.", backdrop: IMAGES.live[8], imageUrl: IMAGES.live[8] },
          { id: "bloomberg_desk", title: "Bloomberg TV", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Bloomberg Markets: Balance of Power", progress: 30, duration: "8 PM - 9 PM", tags: ["News", "Finance"], description: "Focusing on political influence on global market economies and business trading.", backdrop: IMAGES.live[9], imageUrl: IMAGES.live[9] },
          { id: "dw_news_desk", title: "DW News Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "DW News Asia/Europe Desk", progress: 70, duration: "8 PM - 8:30 PM", tags: ["News", "Global"], description: "DW's flagship news program providing German and European perspectives on world affairs.", backdrop: IMAGES.live[0], imageUrl: IMAGES.live[0] },
          { id: "france24_desk", title: "France 24 English", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Eye on Africa Live", progress: 15, duration: "8:15 PM - 8:45 PM", tags: ["News"], description: "Comprehensive analysis of political, economic, and cultural news from across the African continent.", backdrop: IMAGES.live[7], imageUrl: IMAGES.live[7] },
          { id: "aljazeera_desk", title: "Al Jazeera English", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Inside Story Live", progress: 95, duration: "8 PM - 8:30 PM", tags: ["News", "Documentary"], description: "In-depth analysis of global political controversies, featuring panels of international guests.", backdrop: IMAGES.live[5], imageUrl: IMAGES.live[5] },
          { id: "cnet_news", title: "Cheddar News", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "720p", liveShow: "Cheddar Business News Live", progress: 40, duration: "8 PM - 9 PM", tags: ["News", "Tech"], description: "Focuses on tech innovations, financial start-ups, and modern consumer trends.", backdrop: IMAGES.live[4], imageUrl: IMAGES.live[4] },
          { id: "euronews_desk", title: "EuroNews", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "EuroNews Evening Live", progress: 55, duration: "8 PM - 9 PM", tags: ["News", "Europe"], description: "Unrivaled coverage of politics, migrations, trade, and culture within the EU zone.", backdrop: IMAGES.live[6], imageUrl: IMAGES.live[6] },
          { id: "cbs_news_desk", title: "CBS News Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "CBS Evening News with Norah O'Donnell", progress: 85, duration: "8 PM - 8:30 PM", tags: ["News"], description: "Norah O'Donnell anchors coverage of major US domestic politics and breaking stories.", backdrop: IMAGES.live[2], imageUrl: IMAGES.live[2] }
        ]
      },
      {
        title: "Live Sports & Action",
        type: "landscape",
        items: [
          { id: "cbs_sports_s", title: "CBS Sports HQ", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "College Football Today", progress: 70, duration: "8 PM - 10 PM", tags: ["Sports"], description: "Live pregame analysis, score previews, and injury reports for NCAA matchups.", backdrop: IMAGES.live[2], imageUrl: IMAGES.live[2] },
          { id: "redbull_s", title: "Red Bull TV Action", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Crankworx Mountain Biking Live", progress: 45, duration: "8 PM - 9:30 PM", tags: ["Sports", "MTB"], description: "The world's best mountain bikers descend on Whistler for high-flying slopestyle gravity leaps.", backdrop: IMAGES.live[6], imageUrl: IMAGES.live[6] },
          { id: "fox_sports_s", title: "FOX Sports HQ Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "The Herd with Colin Cowherd", progress: 20, duration: "8 PM - 9 PM", tags: ["Sports", "Talk"], description: "Colin Cowherd shares his biting, analytical takes on major NFL and NBA quarterback rivalries.", backdrop: IMAGES.live[9], imageUrl: IMAGES.live[9] },
          { id: "wwe_live", title: "WWE Channel Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Monday Night Raw Classics", progress: 90, duration: "8 PM - 11 PM", tags: ["Sports", "Wrestling"], description: "Relive epic matches of the Attitude Era, featuring Stone Cold, The Rock, and Triple H.", backdrop: IMAGES.live[3], imageUrl: IMAGES.live[3] },
          { id: "golf_live", title: "Golf Pass Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "720p", liveShow: "PGA Tour Academy Live Tips", progress: 10, duration: "8:30 PM - 9 PM", tags: ["Sports", "Golf"], description: "Top coaches demonstrate drive adjustments, putting stances, and sand-wedge chip shots.", backdrop: IMAGES.live[7], imageUrl: IMAGES.live[7] },
          { id: "billiards_live", title: "Billiards TV", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "720p", liveShow: "World 9-Ball Championship Live", progress: 50, duration: "8 PM - 10 PM", tags: ["Sports"], description: "The world's elite pool players compete in high-stakes matches of strategic nine-ball angles.", backdrop: IMAGES.live[4], imageUrl: IMAGES.live[4] },
          { id: "outdoor_live", title: "Outdoor Channel Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Major League Fishing Live", progress: 30, duration: "8 PM - 9:30 PM", tags: ["Sports", "Outdoors"], description: "Pro anglers compete to catch, weigh, and release maximum bass on Lake Champlain.", backdrop: IMAGES.live[5], imageUrl: IMAGES.live[5] },
          { id: "motor_live", title: "MotorTrend Live Channel", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Roadkill Garage Live", progress: 85, duration: "8 PM - 9 PM", tags: ["Sports", "Cars"], description: "David Freiburger and Steve Dulcich rebuild junk muscle cars to running form.", backdrop: IMAGES.live[1], imageUrl: IMAGES.live[1] },
          { id: "fight_live", title: "Impact Wrestling Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Impact Wrestling Classics", progress: 65, duration: "8 PM - 9:30 PM", tags: ["Sports"], description: "Top stars of Impact battle in high-intensity tag-team and heavy-weight titles.", backdrop: IMAGES.live[0], imageUrl: IMAGES.live[0] },
          { id: "world_surf", title: "WSL Surf Live Channel", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Tahiti Pro Legends Live", progress: 75, duration: "8 PM - 10 PM", tags: ["Sports", "Surf"], description: "Top surfers slide through massive barrel pipelines at Teahupo'o in extreme swells.", backdrop: IMAGES.live[8], imageUrl: IMAGES.live[8] }
        ]
      },
      {
        title: "Live Music Channels",
        type: "landscape",
        items: [
          { id: "vevo_pop_m", title: "vevo pop", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Harry Styles Special Hour", progress: 90, duration: "8 PM - 9 PM", tags: ["Music"], description: "Vevo pop showcases the complete videography of British pop sensation Harry Styles.", backdrop: IMAGES.live[3], imageUrl: IMAGES.live[3] },
          { id: "vevo_country", title: "Vevo Country Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Country Hits of the 2020s", progress: 45, duration: "8 PM - 9 PM", tags: ["Music"], description: "Nashville hits from Luke Combs, Morgan Wallen, and Carrie Underwood.", backdrop: IMAGES.live[7], imageUrl: IMAGES.live[7] },
          { id: "vevo_hiphop", title: "Vevo Hip-Hop Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "90s West Coast Rap Special", progress: 70, duration: "8 PM - 9 PM", tags: ["Music"], description: "Classic music videos from Tupac, Snoop Dogg, Ice Cube, and Dr. Dre.", backdrop: IMAGES.live[0], imageUrl: IMAGES.live[0] },
          { id: "mtv_live", title: "MTV Live Channel", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Unplugged Marathon Live", progress: 20, duration: "8 PM - 10 PM", tags: ["Music"], description: "Acoustic concert sets of legendary bands including Nirvana, Pearl Jam, and Alice in Chains.", backdrop: IMAGES.live[1], imageUrl: IMAGES.live[1] },
          { id: "tomorrowland_live", title: "Tomorrowland TV Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Mainstage EDM Sets Live", progress: 60, duration: "8 PM - Midnight", tags: ["Music", "EDM"], description: "Live streams of epic DJ sets from Martin Garrix, Tiësto, and Armin van Buuren.", backdrop: IMAGES.live[5], imageUrl: IMAGES.live[5] },
          { id: "clubbing_live", title: "Clubbing TV", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Ibiza Summer Warm-Up", progress: 85, duration: "8 PM - 9:30 PM", tags: ["Music", "House"], description: "Deep house, tech-house, and techno sets live from the hottest clubs in Ibiza.", backdrop: IMAGES.live[2], imageUrl: IMAGES.live[2] },
          { id: "classical_live", title: "Stingray Classica Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Beethoven: Symphony No. 9", progress: 10, duration: "8:30 PM - 9:45 PM", tags: ["Music", "Classical"], description: "The Vienna Philharmonic orchestra performs Beethoven's absolute masterpiece.", backdrop: IMAGES.live[4], imageUrl: IMAGES.live[4] },
          { id: "jazz_live", title: "Stingray DJAZZ Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Miles Davis Montreux Set", progress: 50, duration: "8 PM - 9 PM", tags: ["Music", "Jazz"], description: "A historic broadcast recording of Miles Davis performing live at Montreux Jazz Festival.", backdrop: IMAGES.live[9], imageUrl: IMAGES.live[9] },
          { id: "karaoke_live", title: "Stingray Karaoke Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "720p", liveShow: "80s Rock Karaoke Sing-Along", progress: 30, duration: "8 PM - 9 PM", tags: ["Music"], description: "Grab the mic and sing along to hits by Journey, Bon Jovi, and Def Leppard.", backdrop: IMAGES.live[6], imageUrl: IMAGES.live[6] },
          { id: "qello_concerts", title: "Qello Concerts Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Queen: Live at Wembley 1986", progress: 75, duration: "8 PM - 9:45 PM", tags: ["Music"], description: "Freddie Mercury leads Queen in their most famous stadium performance.", backdrop: IMAGES.live[8], imageUrl: IMAGES.live[8] }
        ]
      },
      {
        title: "Live Kids & Family",
        type: "landscape",
        items: [
          { id: "moonbug_k", title: "Moonbug Kids Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "720p", liveShow: "CoComelon Sing-Along", progress: 20, duration: "8 PM - 8:30 PM", tags: ["Kids"], description: "JJ and friends teach numbers, letters, and classic nursery rhymes with songs.", backdrop: IMAGES.live[4], imageUrl: IMAGES.live[4] },
          { id: "nick_jr_live", title: "Nick Jr. Classics Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "PAW Patrol Marathon", progress: 50, duration: "8 PM - 9 PM", tags: ["Kids"], description: "Ryder leads the PAW Patrol pups on high-stakes search and rescue missions in Adventure Bay.", backdrop: IMAGES.live[5], imageUrl: IMAGES.live[5] },
          { id: "disney_live", title: "Disney Channel Classics", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Phineas and Ferb Live", progress: 95, duration: "8 PM - 8:30 PM", tags: ["Kids"], description: "Stepbrothers Phineas and Ferb build wild backyard inventions while their platypus fights evil.", backdrop: IMAGES.live[3], imageUrl: IMAGES.live[3] },
          { id: "pbs_kids_live", title: "PBS Kids Live Channel", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "720p", liveShow: "Daniel Tiger's Neighborhood", progress: 10, duration: "8:30 PM - 9 PM", tags: ["Kids"], description: "Daniel Tiger teaches young children primary social-emotional lessons with song.", backdrop: IMAGES.live[7], imageUrl: IMAGES.live[7] },
          { id: "cartoon_live", title: "Cartoon Network Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Adventure Time Live", progress: 75, duration: "8 PM - 9 PM", tags: ["Kids"], description: "Finn the human and Jake the shape-shifting dog venture across the magical Land of Ooo.", backdrop: IMAGES.live[2], imageUrl: IMAGES.live[2] },
          { id: "pokemon_live", title: "Pokémon TV Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Indigo League Marathon", progress: 85, duration: "8 PM - 9:30 PM", tags: ["Kids"], description: "Ash Ketchum begins his quest with Pikachu to collect badges and enter Indigo League.", backdrop: IMAGES.live[1], imageUrl: IMAGES.live[1] },
          { id: "lego_live", title: "LEGO TV Channel Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "720p", liveShow: "Ninjago: Masters of Spinjitzu", progress: 30, duration: "8 PM - 9 PM", tags: ["Kids"], description: "Four ninja master high-end elemental spinjitzu to protect Ninjago from Skeletons.", backdrop: IMAGES.live[6], imageUrl: IMAGES.live[6] },
          { id: "ryans_world", title: "Ryan & Friends Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "720p", liveShow: "Ryan's Mystery Playdate Live", progress: 40, duration: "8 PM - 8:30 PM", tags: ["Kids"], description: "Ryan solves fun riddles and faces challenges to meet mystery playdates.", backdrop: IMAGES.live[0], imageUrl: IMAGES.live[0] },
          { id: "babar_live", title: "Babar Classics Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "720p", liveShow: "Babar the Elephant King", progress: 65, duration: "8 PM - 8:30 PM", tags: ["Kids"], description: "The classic adventures of Babar as he builds the peaceful city of Celesteville.", backdrop: IMAGES.live[8], imageUrl: IMAGES.live[8] },
          { id: "kidz_bop_live", title: "KIDZ BOP TV Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Kids Pop Concert Sing-Along", progress: 55, duration: "8 PM - 9 PM", tags: ["Kids", "Music"], description: "The Kidz Bop kids perform clean pop hits in high definition.", backdrop: IMAGES.live[9], imageUrl: IMAGES.live[9] }
        ]
      },
      {
        title: "Live Entertainment & Drama",
        type: "landscape",
        items: [
          { id: "hallmark_e", title: "Hallmark Movies Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "A Christmas Romance Live", progress: 40, duration: "8 PM - 9:30 PM", tags: ["Drama"], description: "A city designer travels to a small mountain town and finds unexpected romance during snow storms.", backdrop: IMAGES.live[5], imageUrl: IMAGES.live[5] },
          { id: "comedy_e", title: "Comedy Central Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "The Daily Show Classics", progress: 15, duration: "8:15 PM - 8:45 PM", tags: ["Comedy"], description: "A satirical news program that takes comedic aim at US politics and media reporting.", backdrop: IMAGES.live[1], imageUrl: IMAGES.live[1] },
          { id: "hbo_e", title: "HBO Live Channel", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "House of the Dragon Live", progress: 65, duration: "8 PM - 9 PM", tags: ["Drama"], description: "Follows the rise and bloody infighting of House Targaryen 200 years before Game of Thrones.", backdrop: IMAGES.live[9], imageUrl: IMAGES.live[9] },
          { id: "tnt_e", title: "TNT Live Channel", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "NBA Basketball Tonight", progress: 85, duration: "8 PM - 10:30 PM", tags: ["Sports"], description: "Inside the NBA hosts analyze tonight's blockbuster East Coast match live.", backdrop: IMAGES.live[2], imageUrl: IMAGES.live[2] },
          { id: "usa_e", title: "USA Network Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Law & Order: SVU Marathon", progress: 30, duration: "8 PM - 10 PM", tags: ["Drama", "Crime"], description: "Captain Benson leads elite detectives investigating specialized crimes in New York City.", backdrop: IMAGES.live[0], imageUrl: IMAGES.live[0] },
          { id: "tbs_e", title: "TBS Live Channel", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "The Big Bang Theory Live", progress: 55, duration: "8 PM - 8:30 PM", tags: ["Comedy"], description: "Physicists Leonard and Sheldon navigate romance and daily life in Pasadena.", backdrop: IMAGES.live[6], imageUrl: IMAGES.live[6] },
          { id: "syfy_e", title: "Syfy Live Channel", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Resident Alien Marathon", progress: 75, duration: "8 PM - 9 PM", tags: ["Sci-Fi"], description: "An alien crash-lands in a Colorado mountain town and assumes the identity of a doctor.", backdrop: IMAGES.live[3], imageUrl: IMAGES.live[3] },
          { id: "amc_e", title: "AMC Live Channel", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "The Walking Dead Live", progress: 95, duration: "8 PM - 9 PM", tags: ["Drama", "Horror"], description: "Rick Grimes leads a squad of survivors through zombie-infested lands in search of safety.", backdrop: IMAGES.live[4], imageUrl: IMAGES.live[4] },
          { id: "fx_e", title: "FX Live Channel", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Fargo: Season 5 Live", progress: 50, duration: "8 PM - 9:30 PM", tags: ["Drama", "Crime"], description: "An ordinary housewife gets caught in a dangerous web of kidnapping and police hunts.", backdrop: IMAGES.live[8], imageUrl: IMAGES.live[8] },
          { id: "paramount_e", title: "Paramount Live TV", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Yellowstone Marathon", progress: 70, duration: "8 PM - 10 PM", tags: ["Drama"], description: "John Dutton defends his massive Montana cattle ranch against developers and borders.", backdrop: IMAGES.live[7], imageUrl: IMAGES.live[7] }
        ]
      },
      {
        title: "Live Documentaries & Science",
        type: "landscape",
        items: [
          { id: "natgeo_live", title: "Nat Geo Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Incredible Animal Migrations", progress: 35, duration: "8 PM - 9 PM", tags: ["Documentary"], description: "Stunning aerial photography tracks millions of wildebeest migrating across Serengeti rivers.", backdrop: IMAGES.live[5], imageUrl: IMAGES.live[5] },
          { id: "discovery_live2", title: "Discovery Science", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "How It's Made: Tech Gear", progress: 65, duration: "8 PM - 8:30 PM", tags: ["Documentary"], description: "Camera crews trace the raw robotic manufacturing lines of microchips, lenses, and OLED screens.", backdrop: IMAGES.live[9], imageUrl: IMAGES.live[9] },
          { id: "history_live", title: "History Live Channel", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "The Curse of Oak Island", progress: 50, duration: "8 PM - 9:30 PM", tags: ["Documentary"], description: "The Lagina brothers dig deep in search of the legendary 200-year-old Money Pit treasure.", backdrop: IMAGES.live[7], imageUrl: IMAGES.live[7] },
          { id: "nasa_live", title: "NASA TV Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "ISS Space Walk Broadcast", progress: 20, duration: "8 PM - 10 PM", tags: ["Documentary", "Space"], description: "Astronauts deploy solar arrays on the International Space Station live in orbit.", backdrop: IMAGES.live[6], imageUrl: IMAGES.live[6] },
          { id: "animal_live", title: "Animal Planet Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "River Monsters Marathon", progress: 85, duration: "8 PM - 9 PM", tags: ["Documentary"], description: "Jeremy Wade travels to the Amazon in search of a legendary freshwater piranha beast.", backdrop: IMAGES.live[5], imageUrl: IMAGES.live[5] },
          { id: "smithsonian_live", title: "Smithsonian Live Channel", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Aerial America: Alaska", progress: 40, duration: "8 PM - 9 PM", tags: ["Documentary"], description: "Fly over massive glaciers, volcanic mountains, and wild forests in a stunning visual tour.", backdrop: IMAGES.live[0], imageUrl: IMAGES.live[0] },
          { id: "crime_invest", title: "Crime Investigation", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Cold Case Files Live", progress: 55, duration: "8 PM - 9 PM", tags: ["Documentary"], description: "Detectives utilize modern DNA forensics to solve 30-year-old homicide cold cases.", backdrop: IMAGES.live[1], imageUrl: IMAGES.live[1] },
          { id: "food_live", title: "Food Network Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "720p", liveShow: "Chopped: Dinner Battles", progress: 30, duration: "8 PM - 9 PM", tags: ["Documentary", "Food"], description: "Four chefs battle to turn a basket of bizarre mystery ingredients into a three-course meal.", backdrop: IMAGES.live[2], imageUrl: IMAGES.live[2] },
          { id: "travel_live", title: "Travel Channel Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "720p", liveShow: "Expedition Unknown Live", progress: 75, duration: "8 PM - 9:30 PM", tags: ["Documentary"], description: "Josh Gates travels to Egypt in search of a lost royal sarcophagus in hidden catacombs.", backdrop: IMAGES.live[8], imageUrl: IMAGES.live[8] },
          { id: "science_live", title: "Science Channel Live", brand: "Samsung TV Plus", brandColor: "#FF6B00", rating: "Live", resolution: "1080p", liveShow: "Outrageous Acts of Science", progress: 90, duration: "8 PM - 9 PM", tags: ["Documentary"], description: "Scientists breakdown viral internet videos to explain the physical laws behind extreme stunts.", backdrop: IMAGES.live[3], imageUrl: IMAGES.live[3] }
        ]
      }
    ]
  },
  "apps": {
    rows: [
      {
        title: "Featured TV Applications",
        type: "square",
        items: [
          { id: "netflix_a", title: "Netflix", iconUrl: IMAGES.apps.netflix, isApp: true },
          { id: "prime_a", title: "Prime Video", iconUrl: IMAGES.apps.prime, isApp: true },
          { id: "disney_a", title: "Disney+", iconUrl: IMAGES.apps.disney, isApp: true },
          { id: "apple_a", title: "Apple TV", iconUrl: IMAGES.apps.appletv, isApp: true, invertIcon: true },
          { id: "youtube_a", title: "YouTube", iconUrl: IMAGES.apps.youtube, isApp: true },
          { id: "smartthings_a", title: "SmartThings", iconUrl: IMAGES.apps.smartthings, isApp: true },
          { id: "samsung_a", title: "Samsung Plus", iconUrl: IMAGES.apps.tv, isApp: true },
          { id: "live_a", title: "Live TV", iconUrl: IMAGES.apps.antenna, isApp: true },
          { id: "xbox_a", title: "Xbox Cloud", iconUrl: IMAGES.apps.xbox, isApp: true },
          { id: "twitch_a", title: "Twitch", iconUrl: IMAGES.apps.twitch, isApp: true }
        ]
      },
      {
        title: "Video Streaming Services",
        type: "square",
        items: [
          { id: "netflix_v", title: "Netflix", iconUrl: IMAGES.apps.netflix, isApp: true },
          { id: "prime_v", title: "Prime Video", iconUrl: IMAGES.apps.prime, isApp: true },
          { id: "disney_v", title: "Disney+", iconUrl: IMAGES.apps.disney, isApp: true },
          { id: "apple_v", title: "Apple TV", iconUrl: IMAGES.apps.appletv, isApp: true, invertIcon: true },
          { id: "hbo_v", title: "Max (HBO)", iconUrl: IMAGES.apps.hbo, isApp: true },
          { id: "hulu_v", title: "Hulu", iconUrl: IMAGES.apps.hulu, isApp: true },
          { id: "plex_v", title: "Plex Media", iconUrl: IMAGES.apps.plex, isApp: true },
          { id: "vlc_v", title: "VLC Player", iconUrl: IMAGES.apps.vlc, isApp: true },
          { id: "youtube_v", title: "YouTube Video", iconUrl: IMAGES.apps.youtube, isApp: true },
          { id: "samsung_v", title: "Samsung TV+", iconUrl: IMAGES.apps.tv, isApp: true }
        ]
      },
      {
        title: "Music, Radio & Podcasts",
        type: "square",
        items: [
          { id: "spotify_m", title: "Spotify", iconUrl: IMAGES.apps.spotify, isApp: true },
          { id: "podcast_m", title: "TuneIn Radio", iconUrl: IMAGES.apps.podcast, isApp: true },
          { id: "youtube_m", title: "YouTube Music", iconUrl: IMAGES.apps.youtube, isApp: true },
          { id: "apple_m", title: "Apple Music", iconUrl: IMAGES.apps.appletv, isApp: true, invertIcon: true },
          { id: "amazon_m", title: "Amazon Music", iconUrl: IMAGES.apps.prime, isApp: true },
          { id: "deezer_m", title: "Deezer Live", iconUrl: IMAGES.apps.tv, isApp: true },
          { id: "iheart_m", title: "iHeartRadio", iconUrl: IMAGES.apps.antenna, isApp: true },
          { id: "sound_m", title: "SoundCloud", iconUrl: IMAGES.apps.podcast, isApp: true },
          { id: "tidal_m", title: "Tidal HiFi", iconUrl: IMAGES.apps.spotify, isApp: true },
          { id: "radio_m", title: "Internet Radio", iconUrl: IMAGES.apps.antenna, isApp: true }
        ]
      },
      {
        title: "Cloud Gaming & eSports",
        type: "square",
        items: [
          { id: "xbox_g", title: "Xbox Gaming", iconUrl: IMAGES.apps.xbox, isApp: true },
          { id: "geforce_g", title: "GeForce NOW", iconUrl: IMAGES.apps.nvidia, isApp: true },
          { id: "twitch_g", title: "Twitch Streams", iconUrl: IMAGES.apps.twitch, isApp: true },
          { id: "steam_g", title: "Steam Link", iconUrl: IMAGES.apps.steam, isApp: true, invertIcon: true },
          { id: "retro_g", title: "RetroArcade", iconUrl: IMAGES.apps.tv, isApp: true },
          { id: "roblox_g", title: "Roblox TV", iconUrl: IMAGES.apps.netflix, isApp: true },
          { id: "epic_g", title: "Epic Games", iconUrl: IMAGES.apps.nvidia, isApp: true },
          { id: "play_g", title: "PlayStation", iconUrl: IMAGES.apps.smartthings, isApp: true },
          { id: "chess_g", title: "Chess.com TV", iconUrl: IMAGES.apps.weather, isApp: true },
          { id: "esports_g", title: "eSports Live", iconUrl: IMAGES.apps.twitch, isApp: true }
        ]
      },
      {
        title: "Smart Home & Utilities",
        type: "square",
        items: [
          { id: "smart_u", title: "SmartThings", iconUrl: IMAGES.apps.smartthings, isApp: true },
          { id: "chrome_u", title: "Web Browser", iconUrl: IMAGES.apps.chrome, isApp: true },
          { id: "weather_u", title: "TV Weather", iconUrl: IMAGES.apps.weather, isApp: true },
          { id: "plex_u", title: "Plex Server", iconUrl: IMAGES.apps.plex, isApp: true },
          { id: "vlc_u", title: "VLC Media Hub", iconUrl: IMAGES.apps.vlc, isApp: true },
          { id: "camera_u", title: "Ring Cameras", iconUrl: IMAGES.apps.smartthings, isApp: true },
          { id: "speed_u", title: "Speedtest TV", iconUrl: IMAGES.apps.tv, isApp: true },
          { id: "clean_u", title: "Memory Booster", iconUrl: IMAGES.apps.weather, isApp: true },
          { id: "files_u", title: "File Manager", iconUrl: IMAGES.apps.steam, isApp: true, invertIcon: true },
          { id: "clock_u", title: "TV Screensaver", iconUrl: IMAGES.apps.weather, isApp: true }
        ]
      },
      {
        title: "Lifestyle, Sports & Fitness",
        type: "square",
        items: [
          { id: "fiton_l", title: "FitOn Workouts", iconUrl: IMAGES.apps.spotify, isApp: true },
          { id: "ted_l", title: "TED Talks", iconUrl: IMAGES.apps.youtube, isApp: true },
          { id: "master_l", title: "MasterClass", iconUrl: IMAGES.apps.netflix, isApp: true },
          { id: "espn_l", title: "ESPN+", iconUrl: IMAGES.apps.antenna, isApp: true },
          { id: "dazn_l", title: "DAZN Boxing", iconUrl: IMAGES.apps.tv, isApp: true },
          { id: "redbull_l", title: "Red Bull Active", iconUrl: IMAGES.apps.twitch, isApp: true },
          { id: "peloton_l", title: "Peloton TV", iconUrl: IMAGES.apps.spotify, isApp: true },
          { id: "nasa_l", title: "NASA Science", iconUrl: IMAGES.apps.steam, isApp: true, invertIcon: true },
          { id: "yoga_l", title: "Daily Yoga", iconUrl: IMAGES.apps.weather, isApp: true },
          { id: "nba_l", title: "NBA Pass", iconUrl: IMAGES.apps.tv, isApp: true }
        ]
      },
      {
        title: "Social Hub & Creators",
        type: "square",
        items: [
          { id: "twitch_s", title: "Twitch Gaming", iconUrl: IMAGES.apps.twitch, isApp: true },
          { id: "tiktok_s", title: "TikTok TV", iconUrl: IMAGES.apps.youtube, isApp: true },
          { id: "discord_s", title: "Discord Live", iconUrl: IMAGES.apps.xbox, isApp: true },
          { id: "facebook_s", title: "Facebook Watch", iconUrl: IMAGES.apps.chrome, isApp: true },
          { id: "vimeo_s", title: "Vimeo HighDef", iconUrl: IMAGES.apps.plex, isApp: true },
          { id: "reddit_s", title: "Reddit TV", iconUrl: IMAGES.apps.chrome, isApp: true },
          { id: "pinterest_s", title: "Pinterest TV", iconUrl: IMAGES.apps.weather, isApp: true },
          { id: "flickr_s", title: "Flickr Art", iconUrl: IMAGES.apps.chrome, isApp: true },
          { id: "daily_s", title: "Dailymotion", iconUrl: IMAGES.apps.vlc, isApp: true },
          { id: "behance_s", title: "Behance TV", iconUrl: IMAGES.apps.tv, isApp: true }
        ]
      }
    ]
  }
};

// Formats seeder structures to database format
const buildDatabase = () => {
  const db = {};
  
  Object.keys(SEED_DATA).forEach((tab) => {
    db[tab] = {
      shelves: SEED_DATA[tab].rows.map((row, index) => ({
        id: `${tab}_shelf_${index}`,
        title: row.title,
        type: row.type,
        items: row.items
      }))
    };
  });
  
  return db;
};

// Global active database state loaded from seeder
let LOCAL_DATABASE = buildDatabase();

// Capture logging analytics inside debug table
let API_LOGS = [];

export const addApiLog = (method, endpoint, status, duration, details = "") => {
  const log = {
    id: Math.random().toString(36).substr(2, 9),
    timestamp: new Date().toLocaleTimeString(),
    method,
    endpoint,
    status,
    duration: `${duration}ms`,
    details
  };
  API_LOGS.unshift(log);
  if (API_LOGS.length > 50) API_LOGS.pop();
  
  window.dispatchEvent(new CustomEvent("api-log-updated"));
};

export const getApiLogs = () => API_LOGS;
export const clearApiLogs = () => {
  API_LOGS = [];
  window.dispatchEvent(new CustomEvent("api-log-updated"));
};

export const apiService = {
  // GET /api/v1/layout?tab={tab}
  fetchTabContent: async (tab = "for-you", latency = 500) => {
    const startTime = Date.now();
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = LOCAL_DATABASE[tab] || LOCAL_DATABASE["for-you"];
        const duration = Date.now() - startTime;
        addApiLog("GET", `/api/v1/layout?tab=${tab}`, 200, duration, `Captured ${data.shelves.length} horizontal content shelves populated with ${data.shelves[0].items.length} items each.`);
        resolve({
          status: "success",
          code: 200,
          timestamp: new Date().toISOString(),
          latency: `${duration}ms`,
          tab,
          response: data
        });
      }, latency);
    });
  },

  // POST /api/v1/analytics/focus
  reportFocusAnalytics: async (itemId, title, category) => {
    const duration = Math.floor(Math.random() * 15) + 3;
    addApiLog("POST", `/api/v1/analytics/focus?item=${itemId}`, 204, duration, `Focused item: "${title}" in shelf "${category}"`);
  },

  // PATCH /api/v1/layout/row/{id}
  updateRowTitle: (tab, shelfId, newTitle) => {
    const tabData = LOCAL_DATABASE[tab];
    if (tabData) {
      const shelf = tabData.shelves.find(s => s.id === shelfId);
      if (shelf) {
        const oldTitle = shelf.title;
        shelf.title = newTitle;
        addApiLog("PATCH", `/api/v1/layout/row/${shelfId}`, 200, 5, `Mutated row "${oldTitle}" to "${newTitle}"`);
        window.dispatchEvent(new CustomEvent("db-updated"));
        return true;
      }
    }
    return false;
  },

  // Reset database back to factory mock settings
  resetDatabase: () => {
    LOCAL_DATABASE = buildDatabase();
    addApiLog("POST", `/api/v1/layout/reset`, 200, 10, "Restored TV Database mock to default seeded states.");
    window.dispatchEvent(new CustomEvent("db-updated"));
  },

  // Fetch active raw JSON layout state
  getRawData: (tab) => {
    return LOCAL_DATABASE[tab] || LOCAL_DATABASE;
  }
};
