import type { God } from '../types';

interface Props {
  god: God;
  onClick: (god: God) => void;
}

export default function GodCard({ god, onClick }: Props) {
  return (
    <div className="god-card" onClick={() => onClick(god)}>
      <div className="god-card-banner" style={{ background: god.bgGradient }} />
      <div className="god-card-body">
        <h2 className="god-tamil">{god.tamilName}</h2>
        <p className="god-english">{god.englishName}</p>
        <p className="god-count">{god.names.length} நாமங்கள்</p>
        <button className="god-btn" style={{ background: god.bgGradient }}>
          போற்றி காண்க →
        </button>
      </div>
    </div>
  );
}
