export function MatrixSVG() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full animate-rotate-slow"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="80" y="80" width="240" height="240" transform="rotate(45 200 200)" stroke="hsl(42,55%,52%)" strokeWidth="0.8" className="matrix-line" />
      <rect x="110" y="110" width="180" height="180" transform="rotate(45 200 200)" stroke="hsl(42,55%,52%)" strokeWidth="0.5" opacity="0.5" className="matrix-line" />
      <rect x="140" y="140" width="120" height="120" transform="rotate(45 200 200)" stroke="hsl(42,55%,52%)" strokeWidth="0.5" opacity="0.3" className="matrix-line" />
      <line x1="200" y1="30" x2="200" y2="370" stroke="hsl(42,55%,52%)" strokeWidth="0.4" opacity="0.3" className="matrix-line" />
      <line x1="30" y1="200" x2="370" y2="200" stroke="hsl(42,55%,52%)" strokeWidth="0.4" opacity="0.3" className="matrix-line" />
      <line x1="50" y1="50" x2="350" y2="350" stroke="hsl(42,55%,52%)" strokeWidth="0.3" opacity="0.2" className="matrix-line" />
      <line x1="350" y1="50" x2="50" y2="350" stroke="hsl(42,55%,52%)" strokeWidth="0.3" opacity="0.2" className="matrix-line" />
      <circle cx="200" cy="200" r="8" fill="hsl(42,55%,52%)" opacity="0.9" />
      <circle cx="200" cy="30" r="4" fill="hsl(42,55%,52%)" opacity="0.7" />
      <circle cx="200" cy="370" r="4" fill="hsl(42,55%,52%)" opacity="0.7" />
      <circle cx="30" cy="200" r="4" fill="hsl(42,55%,52%)" opacity="0.7" />
      <circle cx="370" cy="200" r="4" fill="hsl(42,55%,52%)" opacity="0.7" />
      <circle cx="80" cy="80" r="3" fill="hsl(42,55%,52%)" opacity="0.5" />
      <circle cx="320" cy="80" r="3" fill="hsl(42,55%,52%)" opacity="0.5" />
      <circle cx="80" cy="320" r="3" fill="hsl(42,55%,52%)" opacity="0.5" />
      <circle cx="320" cy="320" r="3" fill="hsl(42,55%,52%)" opacity="0.5" />
    </svg>
  );
}

export function MatrixSmall() {
  return (
    <svg viewBox="0 0 120 120" className="w-8 h-8 opacity-60" fill="none">
      <rect x="20" y="20" width="80" height="80" transform="rotate(45 60 60)" stroke="hsl(42,55%,52%)" strokeWidth="1.5" />
      <rect x="35" y="35" width="50" height="50" transform="rotate(45 60 60)" stroke="hsl(42,55%,52%)" strokeWidth="1" opacity="0.6" />
      <circle cx="60" cy="60" r="5" fill="hsl(42,55%,52%)" />
    </svg>
  );
}
