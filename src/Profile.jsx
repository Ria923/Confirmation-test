import React, { useState } from "react";
import storeData from "./storeData.json";

// Profileコンポーネント
function Area() {
  const [region, setRegion] = useState("Tohoku");

  return (
    <div>
      <h1>店舗情報</h1>

      <label>地域を選択：</label>

      <select
        id="region-select"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        {Object.keys(storeData.regions).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <div>
        {storeData.regions[region].map((store, index) => (
          <div key={index}>
            <h2>{store.storeName}</h2>
            <p>住所: {store.address}</p>
            <p>電話番号: {store.phoneNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Area;
