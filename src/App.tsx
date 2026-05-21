import { useState, useMemo } from 'react';
import { gods } from './data/gods';
import type { God } from './types';
import GodCard from './components/GodCard';
import NamesView from './components/NamesView';
import './App.css';

const ALL = 'அனைத்தும்';

export default function App() {
  const [selected, setSelected] = useState<God | null>(null);
  const [activeCategory, setActiveCategory] = useState(ALL);

  const categories = useMemo(() => {
    const cats = [ALL, ...Array.from(new Set(gods.map((g) => g.category))).sort()];
    return cats;
  }, []);

  const filtered = useMemo(
    () => (activeCategory === ALL ? gods : gods.filter((g) => g.category === activeCategory)),
    [activeCategory]
  );

  if (selected) {
    return <NamesView god={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <p className="app-om">🕉</p>
        <h1 className="app-title">108 திருநாமங்கள் போற்றி</h1>
        <p className="app-sub">அஷ்டோத்தர சதநாமாவளி</p>
        <p className="app-desc">தமிழ் தெய்வங்களின் 108 திருநாமங்கள் — ஒவ்வொரு தெய்வத்தையும் தேர்ந்தெடுக்கவும்</p>
      </header>

      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`cat-btn${activeCategory === cat ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <main className="gods-grid">
        {filtered.map((god) => (
          <GodCard key={god.id} god={god} onClick={setSelected} />
        ))}
      </main>

      <footer className="app-footer">
        <p>🕉 ஓம் நமஃ — 108 திருநாமங்கள் — தமிழ் தெய்வங்கள் 🕉</p>
      </footer>
    </div>
  );
}
