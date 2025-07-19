import React, { useState } from "react";
import SearchBox from "./SearchBox";
import MapView from "./MapView";
import "../../style/MapPage.css";

const MapPage = ({ user, onLogout }) => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  return (
    <div className="map-page-wrapper">
      <MapView start={start} end={end} />
      <div className="map-overlay">
        <div className="search-panel">
          <SearchBox onSearch={(s, e) => { setStart(s); setEnd(e); }} />
          <button onClick={onLogout}>Đăng xuất</button>
        </div>
      </div>
    </div>
  );
};

export default MapPage;