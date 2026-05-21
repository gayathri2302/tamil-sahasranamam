import { useState } from 'react';
import type { God } from '../types';

interface Props {
  god: God;
  onBack: () => void;
}

export default function NamesView({ god, onBack }: Props) {
  const [search, setSearch] = useState('');

  const filtered = god.names.filter((n) =>
    n.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="names-view">
      <div className="names-header" style={{ background: god.bgGradient }}>
        <button className="back-btn" onClick={onBack}>← திரும்பு</button>
        <div className="names-header-text">
          <h1>{god.tamilName}</h1>
          <p>{god.names.length} திருநாமங்கள் போற்றி</p>
        </div>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 தேடுக..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        {search && (
          <span className="search-count">{filtered.length} / {god.names.length}</span>
        )}
      </div>

      <div className="names-list">
        {filtered.map((name, i) => (
          <div key={i} className="name-row">
            <span className="name-num" style={{ color: god.color }}>{i + 1}</span>
            <span className="name-text">{name}</span>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="no-results">"{search}" கண்டுபிடிக்கவில்லை</p>
        )}
      </div>
    </div>
  );
}
