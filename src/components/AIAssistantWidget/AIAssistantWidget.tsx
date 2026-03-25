import React, { useState } from 'react';
interface Props { placeholder?: string; position?: 'bottom-right' | 'bottom-left'; }
export function AIAssistantWidget({ placeholder = 'Ask a legal question...', position = 'bottom-right' }: Props) {
  const [open, setOpen] = useState(false); const [input, setInput] = useState('');
  const posClass = position === 'bottom-right' ? 'right-4' : 'left-4';
  return (<><button onClick={() => setOpen(!open)} className={`fixed bottom-4 ${posClass} w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg text-2xl z-50`}>💬</button>
    {open && <div className={`fixed bottom-20 ${posClass} w-80 bg-white rounded-lg shadow-xl z-50 border`}>
      <div className="p-3 bg-blue-600 text-white rounded-t-lg font-bold">AI Legal Assistant</div>
      <div className="h-64 p-3 overflow-y-auto"><p className="text-sm text-gray-500">How can I help you today?</p></div>
      <div className="p-2 border-t flex gap-2"><input value={input} onChange={e => setInput(e.target.value)} placeholder={placeholder} className="flex-1 p-2 border rounded text-sm" /><button className="px-3 py-2 bg-blue-600 text-white rounded text-sm">Send</button></div>
    </div>}</>);
}
