import React, { useState } from 'react';

// Profileコンポーネント
function Profile({ name, bounty, nickname }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li>懸賞金: {bounty}ベリー</li>
        <li>二つ名: {nickname}</li>
      </ul>
    </div>
  );
}

function Gallery() {
  const [selectedAffiliation, setSelectedAffiliation] = useState('麦わら海賊団');

  const characters = [
    { id: 1, name: 'ルフィ', bounty: '30億', nickname: '麦わらのルフィ', affiliation: '麦わら海賊団' },
    { id: 2, name: 'ゾロ', bounty: '11億100万', nickname: '海賊狩りのゾロ', affiliation: '麦わら海賊団' },
    { id: 3, name: 'サンジ', bounty: '11億100万', nickname: '黒足のサンジ', affiliation: '麦わら海賊団' },
    { id: 4, name: 'マーシャル・D・ティーチ', bounty: '22億4760万', nickname: '黒ひげ', affiliation: '黒ひげ海賊団' },
    { id: 5, name: 'ジーザス・バージェス', bounty: '0', nickname: 'チャンピオン', affiliation: '黒ひげ海賊団' },
  ];

  const filteredCharacters = characters.filter(character => character.affiliation === selectedAffiliation);

  return (
    <div>
      <h1>ワンピースの登場人物</h1>
      <label>
        海賊団を選択:
        <select value={selectedAffiliation} onChange={e => setSelectedAffiliation(e.target.value)}>
          <option value="麦わら海賊団">麦わら海賊団</option>
          <option value="黒ひげ海賊団">黒ひげ海賊団</option>
        </select>
      </label>
      {filteredCharacters.map(character => (
        <Profile
          key={character.id}
          name={character.name}
          bounty={character.bounty}
          nickname={character.nickname}
        />
      ))}
    </div>
  );
}

export default Gallery;
