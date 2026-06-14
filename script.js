const storageKey = "egypt-governorates-counter";

const governorates = [
  { name: "Alexandria", region: "Mediterranean", x: 107, y: 82 },
  { name: "Aswan", region: "Upper Egypt", x: 164, y: 426 },
  { name: "Asyut", region: "Upper Egypt", x: 145, y: 293 },
  { name: "Beheira", region: "Delta", x: 121, y: 105 },
  { name: "Beni Suef", region: "Upper Egypt", x: 145, y: 211 },
  { name: "Cairo", region: "Greater Cairo", x: 165, y: 174 },
  { name: "Dakahlia", region: "Delta", x: 171, y: 103 },
  { name: "Damietta", region: "Delta", x: 194, y: 86 },
  { name: "Faiyum", region: "Upper Egypt", x: 128, y: 195 },
  { name: "Gharbia", region: "Delta", x: 151, y: 112 },
  { name: "Giza", region: "Greater Cairo", x: 132, y: 173 },
  { name: "Ismailia", region: "Canal", x: 224, y: 153 },
  { name: "Kafr El Sheikh", region: "Delta", x: 148, y: 87 },
  { name: "Luxor", region: "Upper Egypt", x: 160, y: 373 },
  { name: "Matruh", region: "Frontier", x: 51, y: 100 },
  { name: "Minya", region: "Upper Egypt", x: 141, y: 250 },
  { name: "Monufia", region: "Delta", x: 148, y: 132 },
  { name: "New Valley", region: "Frontier", x: 79, y: 335 },
  { name: "North Sinai", region: "Sinai", x: 285, y: 132 },
  { name: "Port Said", region: "Canal", x: 229, y: 87 },
  { name: "Qalyubia", region: "Greater Cairo", x: 166, y: 148 },
  { name: "Qena", region: "Upper Egypt", x: 164, y: 347 },
  { name: "Red Sea", region: "Frontier", x: 220, y: 315 },
  { name: "Sharqia", region: "Delta", x: 184, y: 128 },
  { name: "Sohag", region: "Upper Egypt", x: 151, y: 321 },
  { name: "South Sinai", region: "Sinai", x: 256, y: 230 },
  { name: "Suez", region: "Canal", x: 221, y: 187 }
];

const attractionsByGovernorate = {
  Alexandria: [
    { name: "Bibliotheca Alexandrina", type: "Culture", description: "A modern landmark built around Alexandria's identity as a Mediterranean center of learning.", url: "https://en.wikipedia.org/wiki/Bibliotheca_Alexandrina" },
    { name: "Qaitbay Citadel", type: "Historical", description: "A fifteenth-century coastal fortress standing near the site of the ancient Lighthouse of Alexandria.", url: "https://en.wikipedia.org/wiki/Citadel_of_Qaitbay" }
  ],
  Aswan: [
    { name: "Philae Temple", type: "Historical", description: "A graceful island temple complex dedicated to Isis and rescued during the Nubian monuments campaign.", url: "https://en.wikipedia.org/wiki/Philae" },
    { name: "Nubian Museum", type: "Culture", description: "A calm, beautifully curated introduction to Nubian history, art, and identity.", url: "https://en.wikipedia.org/wiki/Nubian_Museum" }
  ],
  Asyut: [
    { name: "Meir Tombs", type: "Historical", description: "Ancient rock-cut tombs known for scenes of daily life from Middle Kingdom Egypt.", url: "https://en.wikipedia.org/wiki/Meir,_Egypt" },
    { name: "Al-Muharraq Monastery", type: "Spiritual", description: "One of Egypt's important Coptic monastery sites, tied to traditions of the Holy Family route.", url: "https://en.wikipedia.org/wiki/Monastery_of_the_Holy_Virgin_at_Al-Muharraq" }
  ],
  Beheira: [
    { name: "Rosetta", type: "Heritage", description: "A Nile Delta city famous for Ottoman houses and the story of the Rosetta Stone.", url: "https://en.wikipedia.org/wiki/Rosetta" },
    { name: "Wadi El Natrun", type: "Spiritual", description: "A desert monastic area with some of Egypt's most significant Coptic monasteries.", url: "https://en.wikipedia.org/wiki/Wadi_El_Natrun" }
  ],
  "Beni Suef": [
    { name: "Meidum Pyramid", type: "Historical", description: "A striking early pyramid connected with the development of pyramid architecture.", url: "https://en.wikipedia.org/wiki/Meidum" },
    { name: "Wadi Sannur Cave", type: "Nature", description: "A protected limestone cave known for rare geological formations.", url: "https://en.wikipedia.org/wiki/Wadi_Sannur_Cave" }
  ],
  Cairo: [
    { name: "The Egyptian Museum", type: "Museum", description: "A classic Cairo stop for ancient Egyptian collections and royal treasures.", url: "https://en.wikipedia.org/wiki/Egyptian_Museum" },
    { name: "Khan el-Khalili", type: "Heritage", description: "A historic market district full of architecture, craft shops, cafes, and old Cairo atmosphere.", url: "https://en.wikipedia.org/wiki/Khan_el-Khalili" }
  ],
  Dakahlia: [
    { name: "Dar Ibn Lockman", type: "Historical", description: "A Mansoura landmark linked to the captivity of Louis IX during the Seventh Crusade.", url: "https://en.wikipedia.org/wiki/Mansoura,_Egypt" },
    { name: "Lake Manzala", type: "Nature", description: "A major northern lake and bird habitat shared by the Delta's coastal landscape.", url: "https://en.wikipedia.org/wiki/Lake_Manzala" }
  ],
  Damietta: [
    { name: "Ras El Bar", type: "Coastal", description: "A beloved resort town where the Nile meets the Mediterranean Sea.", url: "https://en.wikipedia.org/wiki/Ras_El_Bar" },
    { name: "Damietta Old City", type: "Heritage", description: "A compact historic city known for woodcraft, Nile views, and coastal character.", url: "https://en.wikipedia.org/wiki/Damietta" }
  ],
  Faiyum: [
    { name: "Wadi El Rayan", type: "Nature", description: "A protected desert area with lakes, waterfalls, dunes, and wide open scenery.", url: "https://en.wikipedia.org/wiki/Wadi_El_Rayan" },
    { name: "Tunis Village", type: "Culture", description: "A lakeside village known for pottery workshops, quiet stays, and Faiyum craft culture.", url: "https://en.wikipedia.org/wiki/Faiyum_Governorate" }
  ],
  Gharbia: [
    { name: "El Sayed El Badawi Mosque", type: "Spiritual", description: "A major Tanta landmark and one of the Delta's best-known religious sites.", url: "https://en.wikipedia.org/wiki/Ahmad_al-Badawi_Mosque" },
    { name: "Tanta Museum", type: "Museum", description: "A regional museum presenting artifacts from Lower Egypt's long history.", url: "https://en.wikipedia.org/wiki/Tanta" }
  ],
  Giza: [
    { name: "Giza Pyramid Complex", type: "Historical", description: "Egypt's most iconic ancient site, with the pyramids, the Sphinx, and desert views.", url: "https://en.wikipedia.org/wiki/Giza_pyramid_complex" },
    { name: "Saqqara", type: "Historical", description: "A vast necropolis anchored by the Step Pyramid of Djoser.", url: "https://en.wikipedia.org/wiki/Saqqara" }
  ],
  Ismailia: [
    { name: "Suez Canal", type: "Landmark", description: "A defining modern waterway and a central part of Ismailia's identity.", url: "https://en.wikipedia.org/wiki/Suez_Canal" },
    { name: "Lake Timsah", type: "Nature", description: "A lakeside escape in the heart of Ismailia with relaxed canal-city views.", url: "https://en.wikipedia.org/wiki/Lake_Timsah" }
  ],
  "Kafr El Sheikh": [
    { name: "Burullus Lake", type: "Nature", description: "A coastal lake and protected wetland important for birds and fishing communities.", url: "https://en.wikipedia.org/wiki/Lake_Burullus" },
    { name: "Desouk", type: "Heritage", description: "A Delta city known for religious heritage and classic Nile-Delta urban life.", url: "https://en.wikipedia.org/wiki/Desouk" }
  ],
  Luxor: [
    { name: "Karnak Temple Complex", type: "Historical", description: "A monumental temple landscape that captures the scale of ancient Thebes.", url: "https://en.wikipedia.org/wiki/Karnak" },
    { name: "Valley of the Kings", type: "Historical", description: "The royal necropolis where many New Kingdom pharaohs were buried.", url: "https://en.wikipedia.org/wiki/Valley_of_the_Kings" }
  ],
  Matruh: [
    { name: "Siwa Oasis", type: "Nature", description: "A remote oasis famous for salt lakes, palm groves, mudbrick architecture, and desert trips.", url: "https://en.wikipedia.org/wiki/Siwa_Oasis" },
    { name: "Cleopatra's Beach", type: "Coastal", description: "A well-known Marsa Matruh seaside stop with clear Mediterranean water.", url: "https://en.wikipedia.org/wiki/Mersa_Matruh" }
  ],
  Minya: [
    { name: "Beni Hasan Tombs", type: "Historical", description: "Rock-cut tombs with vivid scenes from daily life and ancient sport.", url: "https://en.wikipedia.org/wiki/Beni_Hasan" },
    { name: "Tell el-Amarna", type: "Historical", description: "The remains of Akhenaten's ancient capital city.", url: "https://en.wikipedia.org/wiki/Amarna" }
  ],
  Monufia: [
    { name: "Shebin El Kom Museum", type: "Museum", description: "A regional cultural stop for exploring Monufia's local history.", url: "https://en.wikipedia.org/wiki/Shebin_El_Kom" },
    { name: "Quesna", type: "Heritage", description: "A Delta city area with ancient remains and a quieter local travel feel.", url: "https://en.wikipedia.org/wiki/Quesna" }
  ],
  "New Valley": [
    { name: "Dakhla Oasis", type: "Nature", description: "An oasis destination with mudbrick villages, temples, palm groves, and desert routes.", url: "https://en.wikipedia.org/wiki/Dakhla_Oasis" },
    { name: "Kharga Oasis", type: "Nature", description: "A Western Desert oasis with temples, museums, and ancient caravan-route history.", url: "https://en.wikipedia.org/wiki/Kharga_Oasis" }
  ],
  "North Sinai": [
    { name: "El Arish", type: "Coastal", description: "North Sinai's Mediterranean capital, known for palms, beaches, and local markets.", url: "https://en.wikipedia.org/wiki/Arish" },
    { name: "Lake Bardawil", type: "Nature", description: "A protected coastal lagoon known for birdlife and clear northern Sinai scenery.", url: "https://en.wikipedia.org/wiki/Lake_Bardawil" }
  ],
  "Port Said": [
    { name: "Port Said Lighthouse", type: "Landmark", description: "A historic lighthouse and a symbol of the canal city.", url: "https://en.wikipedia.org/wiki/Port_Said_Lighthouse" },
    { name: "Suez Canal Authority Buildings", type: "Heritage", description: "Elegant canal-era architecture at one of Egypt's most distinctive port cities.", url: "https://en.wikipedia.org/wiki/Port_Said" }
  ],
  Qalyubia: [
    { name: "Shubra El Kheima Palace Area", type: "Heritage", description: "A northern Cairo gateway with historic palaces and Nile-side urban heritage.", url: "https://en.wikipedia.org/wiki/Shubra_El_Kheima" },
    { name: "Banha", type: "Local", description: "A lively Delta city on the Nile branch, useful for seeing everyday Delta life.", url: "https://en.wikipedia.org/wiki/Banha" }
  ],
  Qena: [
    { name: "Dendera Temple Complex", type: "Historical", description: "A beautifully preserved temple complex best known for the Temple of Hathor.", url: "https://en.wikipedia.org/wiki/Dendera_Temple_complex" },
    { name: "Qift", type: "Historical", description: "An ancient town connected with trade routes between the Nile and Red Sea.", url: "https://en.wikipedia.org/wiki/Qift" }
  ],
  "Red Sea": [
    { name: "Hurghada", type: "Coastal", description: "A Red Sea resort center known for snorkeling, diving, beaches, and islands.", url: "https://en.wikipedia.org/wiki/Hurghada" },
    { name: "El Gouna", type: "Coastal", description: "A lagoon town with beaches, marinas, water sports, and relaxed resort life.", url: "https://en.wikipedia.org/wiki/El_Gouna" }
  ],
  Sharqia: [
    { name: "Bubastis", type: "Historical", description: "The ancient city of Bastet near Zagazig, with remains from Pharaonic history.", url: "https://en.wikipedia.org/wiki/Bubastis" },
    { name: "Zagazig Museum", type: "Museum", description: "A regional museum connected with Sharqia's archaeology and Delta heritage.", url: "https://en.wikipedia.org/wiki/Zagazig" }
  ],
  Sohag: [
    { name: "White Monastery", type: "Spiritual", description: "A major Coptic monastic landmark with powerful early Christian history.", url: "https://en.wikipedia.org/wiki/White_Monastery" },
    { name: "Akhmim", type: "Historical", description: "An ancient city area known for archaeological remains and links to old Panopolis.", url: "https://en.wikipedia.org/wiki/Akhmim" }
  ],
  "South Sinai": [
    { name: "Saint Catherine's Monastery", type: "Spiritual", description: "A UNESCO-listed monastery at the foot of Mount Sinai.", url: "https://en.wikipedia.org/wiki/Saint_Catherine%27s_Monastery" },
    { name: "Ras Muhammad National Park", type: "Nature", description: "A protected Red Sea park famous for reefs, clear water, and dramatic coastlines.", url: "https://en.wikipedia.org/wiki/Ras_Muhammad_National_Park" }
  ],
  Suez: [
    { name: "Ain Sokhna", type: "Coastal", description: "A quick Red Sea escape with beaches, resorts, and mountain-meets-sea scenery.", url: "https://en.wikipedia.org/wiki/Ain_Sokhna" },
    { name: "Suez National Museum", type: "Museum", description: "A museum telling the story of Suez, the canal, and regional history.", url: "https://en.wikipedia.org/wiki/Suez" }
  ]
};

const copy = {
  en: {
    title: "Explore Egypt",
    eyebrow: "Your Egypt travel companion",
    introDefault: "Mark where you have been, then discover where to go next.",
    introNamed: (name) => `${name}, mark where you have been and discover your next Egypt stops.`,
    nameLabel: "Your name",
    namePlaceholder: "Enter your name",
    themeDark: "Dark",
    themeLight: "Light",
    languageLabel: "العربية",
    selectedOf: "selected of",
    startHere: "Start here",
    welcomeTitle: "Tell us where you have been. We will show you what Egypt still has waiting.",
    welcomeBody: "Start by selecting the governorates you already visited. After that, you will get a personalized discovery guide for the places still on your map.",
    startButton: "Start selecting governorates",
    stepOne: "Step 1",
    stepOneTitle: "Select the governorates you have visited",
    stepOneBody: "Choose every governorate you already know, then continue to see your personalized Egypt guide.",
    searchGovernorates: "Search governorates",
    searchGovernoratesPlaceholder: "Search by name or region",
    selectAll: "Select all",
    clear: "Clear",
    shown: (count) => `${count} ${count === 1 ? "governorate" : "governorates"} shown`,
    submitVisited: "Submit visited governorates",
    travelPlan: "Your journey",
    cleanProgress: "Your exploration summary",
    left: (count) => `${count} left`,
    visited: "visited",
    stillMissing: "still missing",
    regionsStarted: "regions started",
    nextUp: "Still to explore",
    missingGovernorates: "Governorates waiting for you",
    allVisited: "All governorates are marked visited.",
    stepTwo: "Step 2",
    transitionTitle: "Great, your next Egypt stops are ready.",
    transitionEmpty: "You did not mark any governorates yet, so the discovery plan will include all of Egypt.",
    transitionDone: (visited, total, missing) => `You visited ${visited} of ${total} governorates. Your plan will focus on the ${missing} still missing.`,
    editVisited: "Edit visited governorates",
    showPlan: "Show my discovery guide",
    logoSmall: "Let's discover",
    logoBig: "EGYPT",
    phaseTwo: "Your discovery guide",
    discoverTitle: "Explore what is still waiting",
    discoverCopyDone: "You marked every governorate visited. The full discovery list is complete.",
    discoverCopy: (count) => `Historical and touristic highlights across ${count} unvisited governorates.`,
    visitedGovernorates: "visited governorates",
    stillWaiting: "still waiting",
    completed: "completed",
    searchPlaces: "Search places",
    searchPlacesPlaceholder: "Search by governorate, place, or type",
    places: (count) => `${count} ${count === 1 ? "place" : "places"}`,
    showPlaces: "Show places",
    hidePlaces: "Hide places",
    beautifulWork: "Beautiful work. Every governorate is already marked visited.",
    noPlaces: "No places match this search yet.",
    learnMore: "Learn more",
    loadingImage: "Loading image",
    imageUnavailable: "Image unavailable",
    regionAll: "All"
  },
  ar: {
    title: "اكتشف مصر",
    eyebrow: "دليلك لاكتشاف مصر",
    introDefault: "علّم الأماكن اللي زرتها، واكتشف رحلتك الجاية في مصر.",
    introNamed: (name) => `${name}، علّم الأماكن اللي زرتها واكتشف محطاتك الجاية في مصر.`,
    nameLabel: "اسمك",
    namePlaceholder: "اكتب اسمك",
    themeDark: "غامق",
    themeLight: "فاتح",
    languageLabel: "English",
    selectedOf: "مختار من",
    startHere: "ابدأ رحلتك",
    welcomeTitle: "قولنا زرت إيه، وإحنا نرشحلك مصر لسه فيها إيه مستنيك.",
    welcomeBody: "اختار المحافظات اللي زرتها قبل كده. بعدها هنعملك دليل بسيط بالأماكن اللي ممكن تبدأ بيها في المحافظات اللي لسه مازرتهاش.",
    startButton: "اختار المحافظات اللي زرتها",
    stepOne: "الخطوة ١",
    stepOneTitle: "اختار المحافظات اللي زرتها",
    stepOneBody: "علّم كل محافظة زرتها قبل كده، وبعدها كمل عشان تشوف دليل اكتشاف مصر بتاعك.",
    searchGovernorates: "دور في المحافظات",
    searchGovernoratesPlaceholder: "دور باسم المحافظة أو المنطقة",
    selectAll: "اختار الكل",
    clear: "امسح الاختيارات",
    shown: (count) => `${count} محافظة ظاهرة`,
    submitVisited: "كمّل لدليل الاكتشاف",
    travelPlan: "رحلتك",
    cleanProgress: "ملخص استكشافك",
    left: (count) => count === 1 ? "واحدة فاضلة" : `${count} فاضلين`,
    visited: "زرتها",
    stillMissing: "لسه مازرتهاش",
    regionsStarted: "مناطق بدأت تستكشفها",
    nextUp: "لسه قدامك",
    missingGovernorates: "محافظات مستنياك",
    allVisited: "إنت معلّم كل المحافظات كأنك زرتها.",
    stepTwo: "الخطوة ٢",
    transitionTitle: "تمام، جهزنا لك محطاتك الجاية في مصر.",
    transitionEmpty: "إنت لسه ماختارتش محافظات، فهنعرضلك دليل لاكتشاف مصر كلها.",
    transitionDone: (visited, total, missing) => `إنت اخترت ${visited} من ${total} محافظة. الدليل هيتركز على ${missing} محافظة لسه مستنياك.`,
    editVisited: "عدّل المحافظات اللي زرتها",
    showPlan: "اعرض دليل الاكتشاف",
    logoSmall: "يلا نكتشف",
    logoBig: "مصر",
    phaseTwo: "دليل الاكتشاف بتاعك",
    discoverTitle: "أماكن تستاهل تروحها",
    discoverCopyDone: "إنت اخترت كل المحافظات كأنك زرتها. دليل الاكتشاف كده كامل.",
    discoverCopy: (count) => `ترشيحات تاريخية وسياحية في ${count} محافظة لسه مازرتهاش.`,
    visitedGovernorates: "محافظات زرتها",
    stillWaiting: "محافظات لسه مستنياك",
    completed: "نسبة الاستكشاف",
    searchPlaces: "دور في الأماكن",
    searchPlacesPlaceholder: "دور باسم المحافظة أو المكان أو النوع",
    places: (count) => count === 1 ? "مكان واحد" : `${count} مكان`,
    showPlaces: "اعرض الأماكن",
    hidePlaces: "اخفي الأماكن",
    beautifulWork: "جميل جدًا. إنت اخترت كل المحافظات كأنك زرتها.",
    noPlaces: "مفيش أماكن مطابقة للبحث ده.",
    learnMore: "اعرف أكتر",
    loadingImage: "الصورة بتتحمل",
    imageUnavailable: "الصورة مش متاحة",
    regionAll: "الكل"
  }
};

const governorateArabic = {
  Alexandria: { name: "الإسكندرية", region: "البحر المتوسط" },
  Aswan: { name: "أسوان", region: "الصعيد" },
  Asyut: { name: "أسيوط", region: "الصعيد" },
  Beheira: { name: "البحيرة", region: "الدلتا" },
  "Beni Suef": { name: "بني سويف", region: "الصعيد" },
  Cairo: { name: "القاهرة", region: "القاهرة الكبرى" },
  Dakahlia: { name: "الدقهلية", region: "الدلتا" },
  Damietta: { name: "دمياط", region: "الدلتا" },
  Faiyum: { name: "الفيوم", region: "الصعيد" },
  Gharbia: { name: "الغربية", region: "الدلتا" },
  Giza: { name: "الجيزة", region: "القاهرة الكبرى" },
  Ismailia: { name: "الإسماعيلية", region: "القناة" },
  "Kafr El Sheikh": { name: "كفر الشيخ", region: "الدلتا" },
  Luxor: { name: "الأقصر", region: "الصعيد" },
  Matruh: { name: "مطروح", region: "المحافظات الحدودية" },
  Minya: { name: "المنيا", region: "الصعيد" },
  Monufia: { name: "المنوفية", region: "الدلتا" },
  "New Valley": { name: "الوادي الجديد", region: "المحافظات الحدودية" },
  "North Sinai": { name: "شمال سيناء", region: "سيناء" },
  "Port Said": { name: "بورسعيد", region: "القناة" },
  Qalyubia: { name: "القليوبية", region: "القاهرة الكبرى" },
  Qena: { name: "قنا", region: "الصعيد" },
  "Red Sea": { name: "البحر الأحمر", region: "المحافظات الحدودية" },
  Sharqia: { name: "الشرقية", region: "الدلتا" },
  Sohag: { name: "سوهاج", region: "الصعيد" },
  "South Sinai": { name: "جنوب سيناء", region: "سيناء" },
  Suez: { name: "السويس", region: "القناة" }
};

const attractionArabic = {
  "Bibliotheca Alexandrina": { name: "مكتبة الإسكندرية", type: "ثقافة", description: "معلم حديث ومهم بيعكس روح الإسكندرية كمدينة معرفة وبحر وتاريخ." },
  "Qaitbay Citadel": { name: "قلعة قايتباي", type: "تاريخي", description: "قلعة على البحر قريبة من موقع فنار الإسكندرية القديم، ومكان جميل للتمشية والتصوير." },
  "Philae Temple": { name: "معبد فيلة", type: "تاريخي", description: "معبد على جزيرة في أسوان، هادي ومميز وبيحكي جزء كبير من تاريخ مصر القديمة." },
  "Nubian Museum": { name: "متحف النوبة", type: "ثقافة", description: "متحف منظم وهادي يعرّفك على تاريخ النوبة وثقافتها بطريقة قريبة وسهلة." },
  "Meir Tombs": { name: "مقابر مير", type: "تاريخي", description: "مقابر قديمة فيها رسومات من الحياة اليومية في مصر زمان." },
  "Al-Muharraq Monastery": { name: "دير المحرق", type: "روحاني", description: "من أهم الأديرة القبطية في مصر ومكان له قيمة روحية وتاريخية كبيرة." },
  Rosetta: { name: "رشيد", type: "تراث", description: "مدينة دلتاوية جميلة مشهورة ببيوتها القديمة وحكاية حجر رشيد." },
  "Wadi El Natrun": { name: "وادي النطرون", type: "روحاني", description: "منطقة أديرة صحراوية مهمة جدًا في التاريخ القبطي المصري." },
  "Meidum Pyramid": { name: "هرم ميدوم", type: "تاريخي", description: "هرم شكله مختلف ومهم في رحلة تطور بناء الأهرامات." },
  "Wadi Sannur Cave": { name: "كهف وادي سنور", type: "طبيعة", description: "كهف محمي وفيه تكوينات جيرية نادرة ومميزة." },
  "The Egyptian Museum": { name: "المتحف المصري", type: "متحف", description: "محطة أساسية في القاهرة لو عايز تشوف كنوز وآثار مصر القديمة." },
  "Khan el-Khalili": { name: "خان الخليلي", type: "تراث", description: "منطقة تاريخية مليانة محلات وحرف وقهاوي وروح القاهرة القديمة." },
  "Dar Ibn Lockman": { name: "دار ابن لقمان", type: "تاريخي", description: "معلم في المنصورة مرتبط بحكاية أسر لويس التاسع وقت الحملة الصليبية." },
  "Lake Manzala": { name: "بحيرة المنزلة", type: "طبيعة", description: "بحيرة كبيرة في الشمال ومهمة للطيور والصيد وحياة الدلتا." },
  "Ras El Bar": { name: "رأس البر", type: "ساحلي", description: "مصيف جميل عند نقطة التقاء النيل بالبحر المتوسط." },
  "Damietta Old City": { name: "دمياط القديمة", type: "تراث", description: "مدينة لها طابع هادي، معروفة بالأثاث والنجارة وقربها من البحر والنيل." },
  "Wadi El Rayan": { name: "وادي الريان", type: "طبيعة", description: "بحيرات وشلالات وصحراء مفتوحة، اختيار مناسب لخروجة مختلفة وتصوير جميل." },
  "Tunis Village": { name: "قرية تونس", type: "ثقافة", description: "قرية على البحيرة مشهورة بالفخار والهدوء والبيوت البسيطة الجميلة." },
  "El Sayed El Badawi Mosque": { name: "مسجد السيد البدوي", type: "روحاني", description: "من أشهر معالم طنطا والدلتا، ومكان له حضور شعبي كبير." },
  "Tanta Museum": { name: "متحف طنطا", type: "متحف", description: "متحف إقليمي بيعرض جزء من تاريخ وآثار الدلتا." },
  "Giza Pyramid Complex": { name: "أهرامات الجيزة", type: "تاريخي", description: "أيقونة مصر الأولى: الأهرامات وأبو الهول ومنظر الصحراء العظيم." },
  Saqqara: { name: "سقارة", type: "تاريخي", description: "منطقة أثرية واسعة فيها هرم زوسر المدرج وحكايات كتير من مصر القديمة." },
  "Suez Canal": { name: "قناة السويس", type: "معلم", description: "مجرى عالمي مهم وجزء أساسي من شخصية مدن القناة." },
  "Lake Timsah": { name: "بحيرة التمساح", type: "طبيعة", description: "مكان لطيف في الإسماعيلية بإطلالة هادية وروح مدينة القناة." },
  "Burullus Lake": { name: "بحيرة البرلس", type: "طبيعة", description: "محمية وبحيرة ساحلية مهمة للطيور والصيد." },
  Desouk: { name: "دسوق", type: "تراث", description: "مدينة دلتاوية لها طابع شعبي وروح دينية وتراثية." },
  "Karnak Temple Complex": { name: "معابد الكرنك", type: "تاريخي", description: "واحد من أعظم مجمعات المعابد في مصر، واسع ومبهر ومليان تفاصيل." },
  "Valley of the Kings": { name: "وادي الملوك", type: "تاريخي", description: "مقابر ملوك الدولة الحديثة ومكان أساسي لأي زيارة للأقصر." },
  "Siwa Oasis": { name: "واحة سيوة", type: "طبيعة", description: "واحة ساحرة فيها بحيرات ملح ونخيل وعمارة طينية ورحلات صحراوية." },
  "Cleopatra's Beach": { name: "شاطئ كليوباترا", type: "ساحلي", description: "مكان معروف في مرسى مطروح بمياه صافية وجو بحر متوسط جميل." },
  "Beni Hasan Tombs": { name: "مقابر بني حسن", type: "تاريخي", description: "مقابر صخرية برسومات واضحة من الحياة والرياضة في مصر القديمة." },
  "Tell el-Amarna": { name: "تل العمارنة", type: "تاريخي", description: "بقايا عاصمة أخناتون القديمة ومكان مهم جدًا لعشاق التاريخ." },
  "Shebin El Kom Museum": { name: "متحف شبين الكوم", type: "متحف", description: "محطة ثقافية للتعرف على تاريخ المنوفية والمنطقة." },
  Quesna: { name: "قويسنا", type: "تراث", description: "منطقة دلتاوية هادية وفيها لمحات من التاريخ المحلي." },
  "Dakhla Oasis": { name: "واحة الداخلة", type: "طبيعة", description: "واحة فيها قرى قديمة ونخيل وطرق صحراوية وتجربة مختلفة." },
  "Kharga Oasis": { name: "واحة الخارجة", type: "طبيعة", description: "واحة في الصحراء الغربية فيها معابد ومتاحف وتاريخ طرق القوافل." },
  "El Arish": { name: "العريش", type: "ساحلي", description: "مدينة شمال سيناء على البحر، معروفة بالنخيل والشواطئ والأسواق." },
  "Lake Bardawil": { name: "بحيرة البردويل", type: "طبيعة", description: "بحيرة ساحلية محمية ومشهورة بالطيور وجمال شمال سيناء." },
  "Port Said Lighthouse": { name: "فنار بورسعيد", type: "معلم", description: "رمز تاريخي لمدينة بورسعيد وروح القناة." },
  "Suez Canal Authority Buildings": { name: "مباني هيئة قناة السويس", type: "تراث", description: "عمارة مميزة من زمن القناة وبتدي بورسعيد شكلها الخاص." },
  "Shubra El Kheima Palace Area": { name: "منطقة قصور شبرا الخيمة", type: "تراث", description: "منطقة على مدخل القاهرة فيها لمحات من التراث النيلي والعمراني." },
  Banha: { name: "بنها", type: "محلي", description: "مدينة دلتاوية نشيطة على فرع النيل، لطيفة لاكتشاف الحياة اليومية." },
  "Dendera Temple Complex": { name: "معبد دندرة", type: "تاريخي", description: "معبد محفوظ بشكل جميل ومشهور بمعبد حتحور وتفاصيله المبهرة." },
  Qift: { name: "قفط", type: "تاريخي", description: "مدينة قديمة مرتبطة بطرق التجارة بين النيل والبحر الأحمر." },
  Hurghada: { name: "الغردقة", type: "ساحلي", description: "بحر أحمر وغوص وسنوركل وشواطئ وجزر، اختيار سهل وممتع." },
  "El Gouna": { name: "الجونة", type: "ساحلي", description: "مدينة لاجونات ومارينا ورياضات مائية وأجواء هادية على البحر." },
  Bubastis: { name: "تل بسطة", type: "تاريخي", description: "مدينة باستت القديمة قرب الزقازيق، وفيها بقايا فرعونية مهمة." },
  "Zagazig Museum": { name: "متحف الزقازيق", type: "متحف", description: "متحف إقليمي مرتبط بتاريخ الشرقية وآثار الدلتا." },
  "White Monastery": { name: "الدير الأبيض", type: "روحاني", description: "معلم قبطي مهم جدًا وله تاريخ قوي في سوهاج." },
  Akhmim: { name: "أخميم", type: "تاريخي", description: "مدينة قديمة فيها آثار وحكايات مرتبطة ببنوبوليس القديمة." },
  "Saint Catherine's Monastery": { name: "دير سانت كاترين", type: "روحاني", description: "دير عالمي عند جبل موسى، مكان روحاني وتاريخي من الطراز الأول." },
  "Ras Muhammad National Park": { name: "محمية رأس محمد", type: "طبيعة", description: "شعاب مرجانية ومياه صافية ومناظر من أجمل مناطق البحر الأحمر." },
  "Ain Sokhna": { name: "العين السخنة", type: "ساحلي", description: "واحدة من أقرب وجهات البحر الأحمر للقاهرة، فيها شواطئ وجبال وجو لطيف." },
  "Suez National Museum": { name: "متحف السويس", type: "متحف", description: "متحف بيحكي عن السويس والقناة وتاريخ المنطقة." }
};

const savedState = loadState();
const state = {
  selected: new Set(savedState.selected),
  query: "",
  discoverQuery: "",
  activePhase: savedState.activePhase || "welcome",
  language: savedState.language || "en",
  region: "All",
  name: savedState.name,
  theme: savedState.theme || "dark"
};

const thumbnailCache = new Map();
const expandedDiscoverGroups = new Set();
const collapsedDiscoverGroups = new Set();
let thumbnailObserver;

const grid = document.querySelector("#governorateGrid");
const searchInput = document.querySelector("#searchInput");
const nameInput = document.querySelector("#nameInput");
const discoverSearchInput = document.querySelector("#discoverSearchInput");
const selectedCount = document.querySelector("#selectedCount");
const totalCount = document.querySelector("#totalCount");
const percentageCount = document.querySelector("#percentageCount");
const progressBar = document.querySelector("#progressBar");
const listStatus = document.querySelector("#listStatus");
const regionFilters = document.querySelector("#regionFilters");
const selectAllButton = document.querySelector("#selectAllButton");
const clearButton = document.querySelector("#clearButton");
const startJourneyButton = document.querySelector("#startJourneyButton");
const submitVisitedButton = document.querySelector("#submitVisitedButton");
const backToVisitedButton = document.querySelector("#backToVisitedButton");
const showDiscoverButton = document.querySelector("#showDiscoverButton");
const editVisitedButton = document.querySelector("#editVisitedButton");
const languageToggle = document.querySelector("#languageToggle");
const languageLabel = document.querySelector("#languageLabel");
const themeToggle = document.querySelector("#themeToggle");
const themeLabel = document.querySelector("#themeLabel");
const introText = document.querySelector("#introText");
const remainingPill = document.querySelector("#remainingPill");
const visitedMetric = document.querySelector("#visitedMetric");
const leftMetric = document.querySelector("#leftMetric");
const regionMetric = document.querySelector("#regionMetric");
const nextList = document.querySelector("#nextList");
const discoverGrid = document.querySelector("#discoverGrid");
const discoverCount = document.querySelector("#discoverCount");
const discoverCopy = document.querySelector("#discoverCopy");
const discoverSummary = document.querySelector("#discoverSummary");
const transitionCopy = document.querySelector("#transitionCopy");
const phaseViews = document.querySelectorAll(".phase-view");

totalCount.textContent = governorates.length;
nameInput.value = state.name;
document.body.dataset.theme = state.theme;

function loadState() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey));
    return {
      selected: Array.isArray(value?.selected) ? value.selected : [],
      name: value?.name || "",
      theme: value?.theme === "light" ? "light" : "dark",
      language: value?.language === "ar" ? "ar" : "en",
      activePhase: ["welcome", "counter", "transition", "discover"].includes(value?.activePhase)
        ? value.activePhase
        : "welcome"
    };
  } catch {
    return { selected: [], name: "", theme: "dark", language: "en", activePhase: "welcome" };
  }
}

function saveState() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      selected: [...state.selected],
      name: state.name,
      theme: state.theme,
      language: state.language,
      activePhase: state.activePhase
    })
  );
}

function t(key, ...args) {
  const value = copy[state.language][key];
  return typeof value === "function" ? value(...args) : value;
}

function isArabic() {
  return state.language === "ar";
}

function displayGovernorate(governorate) {
  if (!isArabic()) {
    return { name: governorate.name, region: governorate.region };
  }
  return governorateArabic[governorate.name] || { name: governorate.name, region: governorate.region };
}

function displayAttraction(attraction) {
  if (!isArabic()) return attraction;
  return { ...attraction, ...(attractionArabic[attraction.name] || {}) };
}

function regionLabelArabic(region) {
  const governorate = governorates.find((item) => item.region === region);
  return governorate ? displayGovernorate(governorate).region : region;
}

function getFilteredGovernorates() {
  const query = state.query.trim().toLowerCase();

  return governorates.filter((governorate) => {
    const display = displayGovernorate(governorate);
    const matchesRegion = state.region === "All" || governorate.region === state.region;
    const matchesQuery =
      governorate.name.toLowerCase().includes(query) ||
      governorate.region.toLowerCase().includes(query) ||
      display.name.toLowerCase().includes(query) ||
      display.region.toLowerCase().includes(query);

    return matchesRegion && matchesQuery;
  });
}

function getMissingGovernorates() {
  return governorates
    .filter((governorate) => !state.selected.has(governorate.name))
    .sort((a, b) => a.region.localeCompare(b.region) || a.name.localeCompare(b.name));
}

function getDiscoverCards() {
  const query = state.discoverQuery.trim().toLowerCase();

  return getMissingGovernorates().flatMap((governorate) =>
    (attractionsByGovernorate[governorate.name] || []).map((attraction, index) => ({
      ...attraction,
      governorate: governorate.name,
      region: governorate.region,
      featured: index === 0
    }))
  ).filter((card) => {
    if (!query) return true;
    const display = displayAttraction(card);
    const governorateDisplay = governorateArabic[card.governorate] || {};
    return [
      card.name,
      card.type,
      card.description,
      card.governorate,
      card.region,
      display.name,
      display.type,
      display.description,
      governorateDisplay.name,
      governorateDisplay.region
    ]
      .some((value) => value.toLowerCase().includes(query));
  });
}

function getDiscoverGroups() {
  const cards = getDiscoverCards();
  const groups = new Map();

  cards.forEach((card) => {
    if (!groups.has(card.governorate)) {
      groups.set(card.governorate, {
        governorate: card.governorate,
        region: card.region,
        places: []
      });
    }
    groups.get(card.governorate).places.push(card);
  });

  return [...groups.values()];
}

function getWikipediaTitle(url) {
  const rawTitle = url.split("/wiki/")[1] || "";
  return decodeURIComponent(rawTitle).replace(/_/g, " ");
}

function renderFilters() {
  const regions = ["All", ...new Set(governorates.map((governorate) => governorate.region))];

  regionFilters.innerHTML = "";
  regions.forEach((region) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${state.region === region ? " active" : ""}`;
    button.textContent = region === "All"
      ? t("regionAll")
      : (isArabic() ? regionLabelArabic(region) : region);
    button.addEventListener("click", () => {
      state.region = region;
      render();
    });
    regionFilters.appendChild(button);
  });
}

function renderGovernorates() {
  const filtered = getFilteredGovernorates();
  grid.innerHTML = "";

  filtered.forEach((governorate) => {
    const isSelected = state.selected.has(governorate.name);
    const display = displayGovernorate(governorate);
    const label = document.createElement("label");
    label.className = `governorate-card${isSelected ? " selected" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = isSelected;
    checkbox.addEventListener("change", () => {
      updateSelection(governorate.name, checkbox.checked);
    });

    const text = document.createElement("span");
    const name = document.createElement("span");
    const region = document.createElement("span");
    name.className = "governorate-name";
    region.className = "governorate-region";
    name.textContent = display.name;
    region.textContent = display.region;
    text.append(name, region);

    label.append(checkbox, text);
    grid.appendChild(label);
  });

  listStatus.textContent = t("shown", filtered.length);
}

function renderCounter() {
  const count = state.selected.size;
  const percentage = Math.round((count / governorates.length) * 100);

  selectedCount.textContent = count;
  percentageCount.textContent = `${percentage}%`;
  document.querySelector(".counter-label").innerHTML = `${t("selectedOf")} <strong id="totalCount">${governorates.length}</strong>`;
  progressBar.style.width = `${percentage}%`;
}

function renderIntro() {
  const cleanName = state.name.trim();
  introText.textContent = cleanName
    ? `${cleanName}, track your Egypt governorates and plan the next missing stops.`
    : "Track, search, and count Egypt's governorates in one focused view.";
}

function renderTheme() {
  document.body.dataset.theme = state.theme;
  const isDark = state.theme === "dark";
  themeLabel.textContent = isDark ? t("themeDark") : t("themeLight");
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

function renderLanguage() {
  document.documentElement.lang = state.language;
  document.documentElement.dir = isArabic() ? "rtl" : "ltr";
  document.body.dataset.language = state.language;
  languageLabel.textContent = t("languageLabel");
  languageToggle.setAttribute("aria-pressed", String(isArabic()));
}

function renderStaticCopy() {
  document.title = t("title");
  document.querySelector(".summary-panel .eyebrow").textContent = t("eyebrow");
  document.querySelector("#app-title").textContent = t("title");
  document.querySelector(".name-field span").textContent = t("nameLabel");
  nameInput.placeholder = t("namePlaceholder");
  document.querySelector("#welcomeView .eyebrow").textContent = t("startHere");
  document.querySelector("#welcome-title").textContent = t("welcomeTitle");
  document.querySelector("#welcomeView .welcome-copy p:last-child").textContent = t("welcomeBody");
  startJourneyButton.textContent = t("startButton");
  document.querySelector(".step-number").textContent = t("stepOne");
  document.querySelector(".step-banner h2").textContent = t("stepOneTitle");
  document.querySelector(".step-banner p").textContent = t("stepOneBody");
  document.querySelector(".toolbar .search-field span").textContent = t("searchGovernorates");
  searchInput.placeholder = t("searchGovernoratesPlaceholder");
  selectAllButton.textContent = t("selectAll");
  clearButton.textContent = t("clear");
  submitVisitedButton.textContent = t("submitVisited");
  document.querySelector(".insights-panel .eyebrow").textContent = t("travelPlan");
  document.querySelector(".insights-panel h2").textContent = t("cleanProgress");
  document.querySelectorAll(".metric-label")[0].textContent = t("visited");
  document.querySelectorAll(".metric-label")[1].textContent = t("stillMissing");
  document.querySelectorAll(".metric-label")[2].textContent = t("regionsStarted");
  document.querySelector(".next-card .eyebrow").textContent = t("nextUp");
  document.querySelector(".next-card h2").textContent = t("missingGovernorates");
  document.querySelector("#transitionView .eyebrow").textContent = t("stepTwo");
  document.querySelector("#transition-title").textContent = t("transitionTitle");
  backToVisitedButton.textContent = t("editVisited");
  showDiscoverButton.textContent = t("showPlan");
  document.querySelector(".discover-logo span").textContent = t("logoSmall");
  document.querySelector(".discover-logo strong").textContent = t("logoBig");
  document.querySelector(".discover-header .eyebrow").textContent = t("phaseTwo");
  document.querySelector("#discover-title").textContent = t("discoverTitle");
  editVisitedButton.textContent = t("editVisited");
  document.querySelector(".discover-toolbar .search-field span").textContent = t("searchPlaces");
  discoverSearchInput.placeholder = t("searchPlacesPlaceholder");
}

function renderPhase() {
  phaseViews.forEach((view) => {
    view.classList.toggle("active", view.id === `${state.activePhase}View`);
  });
}

function renderTransition() {
  const visited = state.selected.size;
  const missing = governorates.length - visited;
  transitionCopy.textContent = visited === 0
    ? t("transitionEmpty")
    : t("transitionDone", visited, governorates.length, missing);
}

function renderInsights() {
  const missing = getMissingGovernorates();
  const visited = state.selected.size;
  const remaining = governorates.length - state.selected.size;
  const regions = [...new Set(governorates.map((governorate) => governorate.region))];
  const startedRegions = regions.filter((region) =>
    governorates.some((governorate) => governorate.region === region && state.selected.has(governorate.name))
  );

  remainingPill.textContent = remaining === 1 ? "1 left" : `${remaining} left`;
  remainingPill.textContent = t("left", remaining);
  visitedMetric.textContent = visited;
  leftMetric.textContent = remaining;
  regionMetric.textContent = `${startedRegions.length}/${regions.length}`;
  nextList.innerHTML = "";

  if (missing.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = t("allVisited");
    nextList.appendChild(empty);
    return;
  }

  missing.slice(0, 8).forEach((governorate) => {
    const item = document.createElement("button");
    const display = displayGovernorate(governorate);
    item.className = "next-item";
    item.type = "button";
    item.innerHTML = `<strong>${display.name}</strong><span>${display.region}</span>`;
    item.addEventListener("click", () => updateSelection(governorate.name, true));
    nextList.appendChild(item);
  });
}

function renderDiscover() {
  const groups = getDiscoverGroups();
  const cards = groups.flatMap((group) => group.places);
  const visited = state.selected.size;
  const missingCount = getMissingGovernorates().length;
  const hasDiscoverSearch = state.discoverQuery.trim().length > 0;
  discoverGrid.innerHTML = "";
  discoverCount.textContent = t("places", cards.length);
  discoverSummary.innerHTML = `
    <div><strong>${visited}</strong><span>${t("visitedGovernorates")}</span></div>
    <div><strong>${missingCount}</strong><span>${t("stillWaiting")}</span></div>
    <div><strong>${Math.round((visited / governorates.length) * 100)}%</strong><span>${t("completed")}</span></div>
  `;
  discoverCopy.textContent = missingCount === 0
    ? t("discoverCopyDone")
    : t("discoverCopy", missingCount);

  if (cards.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state discover-empty";
    empty.textContent = missingCount === 0
      ? t("beautifulWork")
      : t("noPlaces");
    discoverGrid.appendChild(empty);
    return;
  }

  groups.forEach((group, index) => {
    const groupDisplay = governorateArabic[group.governorate] || { name: group.governorate, region: group.region };
    const section = document.createElement("section");
    section.className = "governorate-discover-group";
    const panelId = `discover-group-${index}`;
    const isExpanded = hasDiscoverSearch
      ? !collapsedDiscoverGroups.has(group.governorate)
      : expandedDiscoverGroups.has(group.governorate);

    const heading = document.createElement("button");
    heading.type = "button";
    heading.className = "group-heading";
    heading.setAttribute("aria-expanded", String(isExpanded));
    heading.setAttribute("aria-controls", panelId);

    const titleWrap = document.createElement("span");
    titleWrap.className = "group-title";

    const region = document.createElement("span");
    region.className = "group-region";
    region.textContent = isArabic() ? groupDisplay.region : group.region;

    const title = document.createElement("span");
    title.className = "group-name";
    title.textContent = isArabic() ? groupDisplay.name : group.governorate;

    titleWrap.append(region, title);

    const actionWrap = document.createElement("span");
    actionWrap.className = "group-action";

    const count = document.createElement("strong");
    count.textContent = t("places", group.places.length);

    const toggleText = document.createElement("span");
    toggleText.textContent = isExpanded ? t("hidePlaces") : t("showPlaces");

    actionWrap.append(count, toggleText);
    heading.append(titleWrap, actionWrap);
    heading.addEventListener("click", () => {
      if (isExpanded) {
        expandedDiscoverGroups.delete(group.governorate);
        collapsedDiscoverGroups.add(group.governorate);
      } else {
        expandedDiscoverGroups.add(group.governorate);
        collapsedDiscoverGroups.delete(group.governorate);
      }
      renderDiscover();
    });

    const list = document.createElement("div");
    list.className = "group-card-grid";
    list.id = panelId;
    list.hidden = !isExpanded;

    if (isExpanded) {
      group.places.forEach((card) => {
        const display = displayAttraction(card);
        const govDisplay = governorateArabic[card.governorate] || { name: card.governorate };
        const article = document.createElement("article");
        article.className = `discover-card${card.featured ? " featured" : ""}`;

        const media = document.createElement("div");
        media.className = "discover-media loading";
        media.dataset.loadingLabel = t("loadingImage");
        const image = document.createElement("img");
        image.alt = display.name;
        image.loading = "lazy";
        image.dataset.wikiTitle = getWikipediaTitle(card.url);
        media.appendChild(image);

        const meta = document.createElement("div");
        meta.className = "discover-meta";

        const type = document.createElement("span");
        type.textContent = display.type;

        const governorate = document.createElement("span");
        governorate.textContent = isArabic() ? govDisplay.name : card.governorate;
        meta.append(type, governorate);

        const title = document.createElement("h4");
        title.textContent = display.name;

        const description = document.createElement("p");
        description.textContent = display.description;

        const link = document.createElement("a");
        link.href = card.url;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = t("learnMore");

        article.append(media, meta, title, description, link);
        list.appendChild(article);
      });
    }

    section.append(heading, list);
    discoverGrid.appendChild(section);
  });

  observeDiscoverImages();
}

function observeDiscoverImages() {
  if (thumbnailObserver) {
    thumbnailObserver.disconnect();
  }

  thumbnailObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      thumbnailObserver.unobserve(entry.target);
      loadThumbnail(entry.target);
    });
  }, { rootMargin: "160px" });

  discoverGrid.querySelectorAll(".discover-media img[data-wiki-title]").forEach((image) => {
    thumbnailObserver.observe(image);
  });
}

function loadThumbnail(image) {
  const title = image.dataset.wikiTitle;
  const media = image.closest(".discover-media");

  if (thumbnailCache.has(title)) {
    applyThumbnail(image, media, thumbnailCache.get(title));
    return;
  }

  fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`)
    .then((response) => response.ok ? response.json() : null)
    .then((data) => {
      const source = data?.thumbnail?.source || "";
      thumbnailCache.set(title, source);
      applyThumbnail(image, media, source);
    })
    .catch(() => {
      thumbnailCache.set(title, "");
      applyThumbnail(image, media, "");
    });
}

function applyThumbnail(image, media, source) {
  media.classList.remove("loading");
  if (!source) {
    media.classList.add("empty-media");
    media.dataset.loadingLabel = t("imageUnavailable");
    return;
  }
  image.src = source;
  image.removeAttribute("data-wiki-title");
}

function updateSelection(name, isSelected) {
  if (isSelected) {
    state.selected.add(name);
  } else {
    state.selected.delete(name);
  }
  saveState();
  render();
}

function render() {
  renderLanguage();
  renderStaticCopy();
  renderTheme();
  renderPhase();
  renderTransition();
  renderIntro();
  renderFilters();
  renderGovernorates();
  renderCounter();
  renderInsights();
  renderDiscover();
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

nameInput.addEventListener("input", (event) => {
  state.name = event.target.value;
  saveState();
  renderIntro();
});

themeToggle.addEventListener("click", () => {
  state.theme = state.theme === "dark" ? "light" : "dark";
  saveState();
  renderTheme();
});

languageToggle.addEventListener("click", () => {
  state.language = isArabic() ? "en" : "ar";
  saveState();
  render();
});

startJourneyButton.addEventListener("click", () => {
  state.activePhase = "counter";
  saveState();
  render();
  document.querySelector("#counterView").scrollIntoView({ behavior: "smooth", block: "start" });
});

submitVisitedButton.addEventListener("click", () => {
  state.activePhase = "transition";
  saveState();
  render();
  document.querySelector("#transitionView").scrollIntoView({ behavior: "smooth", block: "start" });
});

function returnToCounter() {
  state.activePhase = "counter";
  saveState();
  render();
  document.querySelector("#counterView").scrollIntoView({ behavior: "smooth", block: "start" });
}

backToVisitedButton.addEventListener("click", returnToCounter);
editVisitedButton.addEventListener("click", returnToCounter);

showDiscoverButton.addEventListener("click", () => {
  state.activePhase = "discover";
  saveState();
  render();
  document.querySelector("#discoverView").scrollIntoView({ behavior: "smooth", block: "start" });
});

discoverSearchInput.addEventListener("input", (event) => {
  state.discoverQuery = event.target.value;
  collapsedDiscoverGroups.clear();
  renderDiscover();
});

selectAllButton.addEventListener("click", () => {
  getFilteredGovernorates().forEach((governorate) => state.selected.add(governorate.name));
  saveState();
  render();
});

clearButton.addEventListener("click", () => {
  state.selected.clear();
  saveState();
  render();
});

render();
