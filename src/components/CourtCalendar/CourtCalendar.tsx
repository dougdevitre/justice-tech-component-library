import React from 'react';
interface CalendarEvent { id: string; title: string; date: string; type: 'hearing' | 'deadline' | 'event'; }
interface Props { events: CalendarEvent[]; onDateClick?: (date: string) => void; }
const COLORS = { hearing: 'bg-red-100 text-red-800', deadline: 'bg-amber-100 text-amber-800', event: 'bg-blue-100 text-blue-800' };
export function CourtCalendar({ events, onDateClick }: Props) {
  return (<div className="bg-white rounded-lg shadow p-4"><h3 className="font-bold mb-3">📅 Court Calendar</h3>
    <div className="space-y-2">{events.sort((a,b) => a.date.localeCompare(b.date)).map(e => (
      <div key={e.id} onClick={() => onDateClick?.(e.date)} className={`p-2 rounded cursor-pointer ${COLORS[e.type]}`}>
        <span className="text-xs font-mono">{e.date}</span> <span className="font-medium ml-2">{e.title}</span>
      </div>))}</div></div>);
}
