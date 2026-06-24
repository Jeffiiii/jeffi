// Icon — a small, consistent monoline icon set (Lucide path data, MIT).
// Replaces content emoji across the site. Usage: <window.Icon name="music" size={18} />
const ICON_PATHS = {
  'music': ['M9 18V5l12-2v13', { circle: [6, 18, 3] }, { circle: [18, 16, 3] }],
  'gamepad': ['M6 11h4', 'M8 9v4', 'M15 12h.01', 'M18 10h.01', 'M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z'],
  'code': ['m18 16 4-4-4-4', 'm6 8-4 4 4 4', 'm14.5 4-5 16'],
  'braces': ['M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1', 'M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1'],
  'coffee': ['M10 2v2', 'M14 2v2', 'M6 2v2', 'M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1'],
  'git': ['M6 3v12', { circle: [18, 6, 3] }, { circle: [6, 18, 3] }, 'M18 9a9 9 0 0 1-9 9'],
  'atom': [{ circle: [12, 12, 1] }, 'M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z', 'M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z'],
  'hexagon': ['M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'],
  'box': ['M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z', 'm3.3 7 8.7 5 8.7-5', 'M12 22V12'],
  'crosshair': [{ circle: [12, 12, 10] }, 'M22 12h-4', 'M6 12H2', 'M12 6V2', 'M12 22v-4'],
  'dice': [{ rrect: [3, 3, 18, 18, 2] }, { circle: [8, 8, 0.9] }, { circle: [16, 8, 0.9] }, { circle: [12, 12, 0.9] }, { circle: [8, 16, 0.9] }, { circle: [16, 16, 0.9] }],
  'swords': ['M14.5 17.5 3 6V3h3l11.5 11.5', 'm13 19 6-6', 'm16 16 4 4', 'm19 21 2-2'],
  'pickaxe': ['M14.5 12.5 7 20a1.4 1.4 0 1 1-2-2l7.5-7.5', 'M16 4a8 8 0 0 0-10.5 1', 'M16 4a8 8 0 0 1 1 10.5', 'M14 6l4 4'],
  'github': ['M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4', 'M9 18c-4.51 2-5-2-7-2'],
  'target': [{ circle: [12, 12, 10] }, { circle: [12, 12, 6] }, { circle: [12, 12, 2] }],
  'sparkles': ['M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z'],
  'cap': ['M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z', 'M22 10v6', 'M6 12.5V16a6 3 0 0 0 12 0v-3.5'],
};

function Icon({ name, size = 18, stroke = 'currentColor', strokeWidth = 1.7, style = {} }) {
  const items = ICON_PATHS[name] || [];
  const kids = items.map((it, i) => {
    if (typeof it === 'string') return React.createElement('path', { key: i, d: it });
    if (it.circle) return React.createElement('circle', { key: i, cx: it.circle[0], cy: it.circle[1], r: it.circle[2] });
    if (it.rrect) return React.createElement('rect', { key: i, x: it.rrect[0], y: it.rrect[1], width: it.rrect[2], height: it.rrect[3], rx: it.rrect[4] });
    return null;
  });
  return React.createElement('svg', {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round',
    style: { flexShrink: 0, display: 'block', ...style },
  }, kids);
}
window.Icon = Icon;
