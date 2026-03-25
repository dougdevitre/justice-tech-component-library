import React from 'react';
interface Props { deadline: string; label: string; }
export function DeadlineCounter({ deadline, label }: Props) {
  const days = Math.ceil((new Date(deadline).getTime() - Date.now()) / 86400000);
  const color = days <= 3 ? 'text-red-600 bg-red-50' : days <= 7 ? 'text-amber-600 bg-amber-50' : 'text-green-600 bg-green-50';
  return (<div className={`p-3 rounded-lg ${color}`}>
    <p className="text-2xl font-bold">{days > 0 ? days : 0}</p><p className="text-xs">days until</p><p className="font-medium text-sm">{label}</p>
  </div>);
}
