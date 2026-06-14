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

const savedState = loadState();
const state = {
  selected: new Set(savedState.selected),
  query: "",
  region: "All",
  name: savedState.name,
  theme: savedState.theme || "dark"
};

const grid = document.querySelector("#governorateGrid");
const searchInput = document.querySelector("#searchInput");
const nameInput = document.querySelector("#nameInput");
const selectedCount = document.querySelector("#selectedCount");
const totalCount = document.querySelector("#totalCount");
const percentageCount = document.querySelector("#percentageCount");
const progressBar = document.querySelector("#progressBar");
const listStatus = document.querySelector("#listStatus");
const regionFilters = document.querySelector("#regionFilters");
const selectAllButton = document.querySelector("#selectAllButton");
const clearButton = document.querySelector("#clearButton");
const themeToggle = document.querySelector("#themeToggle");
const themeLabel = document.querySelector("#themeLabel");
const introText = document.querySelector("#introText");
const remainingPill = document.querySelector("#remainingPill");
const visitedMetric = document.querySelector("#visitedMetric");
const leftMetric = document.querySelector("#leftMetric");
const regionMetric = document.querySelector("#regionMetric");
const nextList = document.querySelector("#nextList");

totalCount.textContent = governorates.length;
nameInput.value = state.name;
document.body.dataset.theme = state.theme;

function loadState() {
  try {
    const value = JSON.parse(localStorage.getItem(storageKey));
    return {
      selected: Array.isArray(value?.selected) ? value.selected : [],
      name: value?.name || "",
      theme: value?.theme === "light" ? "light" : "dark"
    };
  } catch {
    return { selected: [], name: "", theme: "dark" };
  }
}

function saveState() {
  localStorage.setItem(
    storageKey,
    JSON.stringify({
      selected: [...state.selected],
      name: state.name,
      theme: state.theme
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
  renderIntro();
  renderFilters();
  renderGovernorates();
  renderCounter();
  renderInsights();
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
