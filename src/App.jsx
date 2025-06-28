import React, { useState } from "react";
import MapView from "./components/MapView";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  return (
    <div>
      <SearchBox onSearch={(s, e) => { setStart(s); setEnd(e); }} />
      <MapView start={start} end={end} />
    </div>
  );
};

export default App;
