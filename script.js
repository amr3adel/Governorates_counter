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
const mapWrap = document.querySelector("#mapWrap");
const remainingPill = document.querySelector("#remainingPill");

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
    .sort((a, b) => a.y - b.y || a.x - b.x);
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

function renderMap() {
  const missing = getMissingGovernorates();
  const routePoints = missing.map((governorate) => `${governorate.x},${governorate.y}`).join(" ");
  const points = governorates
    .map((governorate) => {
      const isVisited = state.selected.has(governorate.name);
      const labelX = governorate.x + 7;
      const labelY = governorate.y - 7;
      return `
        <g class="map-marker" role="button" tabindex="0" data-name="${governorate.name}" aria-label="${governorate.name}">
          <circle class="map-point${isVisited ? " visited" : ""}" cx="${governorate.x}" cy="${governorate.y}" r="4.7"></circle>
          <text class="map-label" x="${labelX}" y="${labelY}">${governorate.name}</text>
        </g>
      `;
    })
    .join("");

  mapWrap.innerHTML = `
    <svg class="egypt-map" viewBox="0 0 340 470" role="img" aria-label="Stylized map of Egypt with governorate markers">
      <path class="map-outline" d="M42 72 L203 72 L223 111 L258 113 L305 151 L280 191 L262 249 L237 297 L221 384 L181 448 L118 438 L96 367 L117 292 L121 229 L111 178 L70 144 Z"></path>
      <path class="map-outline" d="M217 114 L302 153 L260 211 L228 175 Z"></path>
      ${missing.length > 1 ? `<polyline class="map-route" points="${routePoints}"></polyline>` : ""}
      ${points}
    </svg>
  `;

  mapWrap.querySelectorAll(".map-marker").forEach((marker) => {
    marker.addEventListener("click", () => {
      const name = marker.dataset.name;
      updateSelection(name, !state.selected.has(name));
    });
    marker.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const name = marker.dataset.name;
        updateSelection(name, !state.selected.has(name));
      }
    });
  });
}

function renderRoute() {
  const missing = getMissingGovernorates();
  const remaining = governorates.length - state.selected.size;
  const routeCard = document.querySelector(".route-card");
  let activeRouteList = document.querySelector("#routeList");

  remainingPill.textContent = remaining === 1 ? "1 left" : `${remaining} left`;

  if (missing.length === 0) {
    const item = document.createElement("p");
    item.className = "empty-route";
    item.textContent = "All governorates are marked visited.";
    item.id = "routeList";
    activeRouteList.replaceWith(item);
    return;
  }

  if (activeRouteList.tagName !== "OL") {
    const list = document.createElement("ol");
    list.className = "route-list";
    list.id = "routeList";
    activeRouteList.replaceWith(list);
  }

  activeRouteList = routeCard.querySelector("#routeList");
  activeRouteList.innerHTML = "";
  missing.slice(0, 8).forEach((governorate) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${governorate.name}</strong>${governorate.region}`;
    activeRouteList.appendChild(item);
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
  renderMap();
  renderRoute();
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
