import React, { useState } from 'react';
interface Notification { id: string; title: string; message: string; type: 'deadline' | 'update' | 'alert'; read: boolean; }
interface Props { notifications: Notification[]; onDismiss: (id: string) => void; onMarkRead: (id: string) => void; }
export function NotificationCenter({ notifications, onDismiss, onMarkRead }: Props) {
  const [open, setOpen] = useState(false); const unread = notifications.filter(n => !n.read).length;
  return (<div className="relative"><button onClick={() => setOpen(!open)} className="relative p-2">🔔 {unread > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{unread}</span>}</button>
    {open && <div className="absolute right-0 top-10 w-72 bg-white rounded-lg shadow-xl border z-50 max-h-80 overflow-y-auto">
      {notifications.map(n => (<div key={n.id} className={`p-3 border-b ${n.read ? 'opacity-60' : ''}`}>
        <div className="flex justify-between"><span className="font-medium text-sm">{n.title}</span><button onClick={() => onDismiss(n.id)} className="text-gray-400">×</button></div>
        <p className="text-xs text-gray-500">{n.message}</p>
        {!n.read && <button onClick={() => onMarkRead(n.id)} className="text-xs text-blue-600 mt-1">Mark read</button>}
      </div>))}</div>}</div>);
}
