const governorates = [
  { name: "Alexandria", region: "Mediterranean" },
  { name: "Aswan", region: "Upper Egypt" },
  { name: "Asyut", region: "Upper Egypt" },
  { name: "Beheira", region: "Delta" },
  { name: "Beni Suef", region: "Upper Egypt" },
  { name: "Cairo", region: "Greater Cairo" },
  { name: "Dakahlia", region: "Delta" },
  { name: "Damietta", region: "Delta" },
  { name: "Faiyum", region: "Upper Egypt" },
  { name: "Gharbia", region: "Delta" },
  { name: "Giza", region: "Greater Cairo" },
  { name: "Ismailia", region: "Canal" },
  { name: "Kafr El Sheikh", region: "Delta" },
  { name: "Luxor", region: "Upper Egypt" },
  { name: "Matruh", region: "Frontier" },
  { name: "Minya", region: "Upper Egypt" },
  { name: "Monufia", region: "Delta" },
  { name: "New Valley", region: "Frontier" },
  { name: "North Sinai", region: "Sinai" },
  { name: "Port Said", region: "Canal" },
  { name: "Qalyubia", region: "Greater Cairo" },
  { name: "Qena", region: "Upper Egypt" },
  { name: "Red Sea", region: "Frontier" },
  { name: "Sharqia", region: "Delta" },
  { name: "Sohag", region: "Upper Egypt" },
  { name: "South Sinai", region: "Sinai" },
  { name: "Suez", region: "Canal" }
];

const state = {
  selected: new Set(),
  query: "",
  region: "All"
};

const grid = document.querySelector("#governorateGrid");
const searchInput = document.querySelector("#searchInput");
const selectedCount = document.querySelector("#selectedCount");
const totalCount = document.querySelector("#totalCount");
const progressBar = document.querySelector("#progressBar");
const listStatus = document.querySelector("#listStatus");
const regionFilters = document.querySelector("#regionFilters");
const selectAllButton = document.querySelector("#selectAllButton");
const clearButton = document.querySelector("#clearButton");

totalCount.textContent = governorates.length;

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
      if (checkbox.checked) {
        state.selected.add(governorate.name);
      } else {
        state.selected.delete(governorate.name);
      }
      render();
    });

    const text = document.createElement("span");
    text.innerHTML = `
      <span class="governorate-name">${governorate.name}</span>
      <span class="governorate-region">${governorate.region}</span>
    `;

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
  progressBar.style.width = `${percentage}%`;
}

function render() {
  renderFilters();
  renderGovernorates();
  renderCounter();
}

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

selectAllButton.addEventListener("click", () => {
  getFilteredGovernorates().forEach((governorate) => state.selected.add(governorate.name));
  render();
});

clearButton.addEventListener("click", () => {
  state.selected.clear();
  render();
});

render();
