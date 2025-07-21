import React, { useState } from 'react';
import axios from 'axios';

function OverwatchStats() {
  const [battletag, setBattletag] = useState('');
  const [username, setUsername] = useState('');
  const [compTime, setCompTime] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    setUsername('');
    setCompTime('');

    if (!battletag.includes('#')) {
      setError('❌ BattleTag 형식이 잘못됐습니다. 예: KarQ#11214');
      return;
    }

    const tag = battletag.replace('#', '-');



      const statsRes = await axios.get(`https://overfast-api.tekrop.fr/players/${tag}/stats/game/competitive`);
       console.log('summaryRes:', summaryRes.data);
      setUsername(summaryRes.data.username);
      setCompTime(statsRes.data?.game?.time_played || '기록 없음');
    
      setError('❌ 조회 실패. BattleTag을 확인하세요.');
    }
  };



  return (
    <div>
      <h2>🎮 오버워치 전적 검색</h2>
      <input value={battletag} onChange={e => setBattletag(e.target.value)} placeholder="예: KarQ#11214" />
      <button onClick={handleSearch}>검색</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {username && (
        <div>
          <h3>{username} 님의 전적</h3>
          <p>경쟁전 플레이 시간: {compTime}</p>
        </div>
      )}
    </div>
  );
}

export default OverwatchStats;
