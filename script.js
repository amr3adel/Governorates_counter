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

const savedState = loadState();
const state = {
  selected: new Set(savedState.selected),
  query: "",
  discoverQuery: "",
  activePhase: savedState.activePhase || "counter",
  region: "All",
  name: savedState.name,
  theme: savedState.theme || "dark"
};

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
const submitVisitedButton = document.querySelector("#submitVisitedButton");
const editVisitedButton = document.querySelector("#editVisitedButton");
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
      activePhase: value?.activePhase === "discover" ? "discover" : "counter"
    };
  } catch {
    return { selected: [], name: "", theme: "dark", activePhase: "counter" };
  }
}

function saveState() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      selected: [...state.selected],
      name: state.name,
      theme: state.theme,
      activePhase: state.activePhase
    })
  );
}

function getFilteredGovernorates() {
  const query = state.query.trim().toLowerCase();

  return governorates.filter((governorate) => {
    const matchesRegion = state.region === "All" || governorate.region === state.region;
    const matchesQuery =
      governorate.name.toLowerCase().includes(query) ||
      governorate.region.toLowerCase().includes(query);

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
    return [card.name, card.type, card.description, card.governorate, card.region]
      .some((value) => value.toLowerCase().includes(query));
  });
}

function renderFilters() {
  const regions = ["All", ...new Set(governorates.map((governorate) => governorate.region))];

  regionFilters.innerHTML = "";
  regions.forEach((region) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${state.region === region ? " active" : ""}`;
    button.textContent = region;
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
    name.textContent = governorate.name;
    region.textContent = governorate.region;
    text.append(name, region);

    label.append(checkbox, text);
    grid.appendChild(label);
  });

  const noun = filtered.length === 1 ? "governorate" : "governorates";
  listStatus.textContent = `${filtered.length} ${noun} shown`;
}

function renderCounter() {
  const count = state.selected.size;
  const percentage = Math.round((count / governorates.length) * 100);

  selectedCount.textContent = count;
  percentageCount.textContent = `${percentage}%`;
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
  themeLabel.textContent = isDark ? "Dark" : "Light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

function renderPhase() {
  phaseViews.forEach((view) => {
    view.classList.toggle("active", view.id === `${state.activePhase}View`);
  });
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
  visitedMetric.textContent = visited;
  leftMetric.textContent = remaining;
  regionMetric.textContent = `${startedRegions.length}/${regions.length}`;
  nextList.innerHTML = "";

  if (missing.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "All governorates are marked visited.";
    nextList.appendChild(empty);
    return;
  }

  missing.slice(0, 8).forEach((governorate) => {
    const item = document.createElement("button");
    item.className = "next-item";
    item.type = "button";
    item.innerHTML = `<strong>${governorate.name}</strong><span>${governorate.region}</span>`;
    item.addEventListener("click", () => updateSelection(governorate.name, true));
    nextList.appendChild(item);
  });
}

function renderDiscover() {
  const cards = getDiscoverCards();
  const missingCount = getMissingGovernorates().length;
  discoverGrid.innerHTML = "";
  discoverCount.textContent = cards.length === 1 ? "1 place" : `${cards.length} places`;
  discoverCopy.textContent = missingCount === 0
    ? "You marked every governorate visited. The full discovery list is complete."
    : `Historical and touristic highlights across ${missingCount} unvisited governorates.`;

  if (cards.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state discover-empty";
    empty.textContent = missingCount === 0
      ? "Beautiful work. Every governorate is already marked visited."
      : "No places match this search yet.";
    discoverGrid.appendChild(empty);
    return;
  }

  cards.forEach((card) => {
    const article = document.createElement("article");
    article.className = `discover-card${card.featured ? " featured" : ""}`;

    const meta = document.createElement("div");
    meta.className = "discover-meta";

    const type = document.createElement("span");
    type.textContent = card.type;

    const governorate = document.createElement("span");
    governorate.textContent = card.governorate;
    meta.append(type, governorate);

    const title = document.createElement("h3");
    title.textContent = card.name;

    const description = document.createElement("p");
    description.textContent = card.description;

    const link = document.createElement("a");
    link.href = card.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = "Learn more";

    article.append(meta, title, description, link);
    discoverGrid.appendChild(article);
  });
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
  renderTheme();
  renderPhase();
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

submitVisitedButton.addEventListener("click", () => {
  state.activePhase = "discover";
  saveState();
  render();
  document.querySelector("#discoverView").scrollIntoView({ behavior: "smooth", block: "start" });
});

editVisitedButton.addEventListener("click", () => {
  state.activePhase = "counter";
  saveState();
  render();
  document.querySelector("#counterView").scrollIntoView({ behavior: "smooth", block: "start" });
});

discoverSearchInput.addEventListener("input", (event) => {
  state.discoverQuery = event.target.value;
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
