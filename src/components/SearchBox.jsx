import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSearch = async () => {
    const fetchCoords = async (query) => {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json`);
      if (query.includes(",")) {
      const [lat, lng] = query.split(",").map(Number);
      return { lat, lng };
      }
      const data = await res.json();
      if (data.length === 0) throw new Error("Không tìm thấy địa điểm");
      return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
      
    };

    try {
      const startCoord = await fetchCoords(start);
      const endCoord = await fetchCoords(end);
      onSearch(startCoord, endCoord);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        setStart(`${latitude},${longitude}`);
      }, () => {
        alert("Không thể lấy vị trí hiện tại");
      });
    } else {
      alert("Trình duyệt không hỗ trợ định vị");
    }
  };

  return (
    <div className="search-box">
    <div className="search-inputs"   style={{
        position: "relative",
        width: "360px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}>
      <input
        type="text"
        placeholder="Điểm bắt đầu"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="text"
        placeholder="Điểm đến"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />
    </div>
    <div className="search-buttons"   style={{
          position: "relative",
          width: "360px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}>
      <button   style={{ padding: "3px 40px", fontSize: "12px" }} onClick={handleUseCurrentLocation}>Dùng vị trí của tôi</button>
      <button   style={{ padding: "3px 58px", fontSize: "12px" }} onClick={handleSearch}>Chỉ đường</button>
    </div>
    </div>
  );
};

export default SearchBox;
