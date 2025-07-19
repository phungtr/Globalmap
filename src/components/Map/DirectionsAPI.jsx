
export async function fetchRoute(start, end) {
  const url = `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.code === "Ok") {
    return data.routes[0].geometry;
  } else {
    throw new Error("Không tìm được đường đi");
  }
}