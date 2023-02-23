mapboxgl.accessToken =
  "pk.eyJ1IjoiZ3JlYXRrYXJsd2FuZyIsImEiOiJjbGQwNWVmajgwcDd2M3RvMTh2dnE5cHl4In0.WwoXDdyCtz7Cl6T58dLGiw";
const beforeMap = new mapboxgl.Map({
  container: "before",
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/greatkarlwang/cleh8k2i0003v01qgh758ntdn",
  center: [-3.2558, 55.91785],
  zoom: 10.2
});

const afterMap = new mapboxgl.Map({
  container: "after",
  style: "mapbox://styles/greatkarlwang/cleh15vag001a01qbmwvaczly",
  center: [-3.2558, 55.91785],
  zoom: 10.2
});

// A selector or reference to HTML element
const container = "#comparison-container";
const map = new mapboxgl.Compare(beforeMap, afterMap, container, {});
