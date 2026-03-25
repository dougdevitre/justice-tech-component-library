import React, { useCallback, useState } from 'react';
interface Props { accept?: string[]; maxSize?: number; onUpload: (files: File[]) => void; }
export function FileUploader({ accept = ['.pdf','.docx','.jpg','.png'], maxSize = 25*1024*1024, onUpload }: Props) {
  const [dragging, setDragging] = useState(false);
  const handleDrop = useCallback((e: React.DragEvent) => { e.preventDefault(); setDragging(false); const files = Array.from(e.dataTransfer.files).filter(f => f.size <= maxSize); onUpload(files); }, [maxSize, onUpload]);
  return (<div onDragOver={e => { e.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={handleDrop} className={`border-2 border-dashed rounded-lg p-8 text-center ${dragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
    <p>📁 Drag files here or <label className="text-blue-600 cursor-pointer underline">browse<input type="file" className="hidden" multiple accept={accept.join(',')} onChange={e => onUpload(Array.from(e.target.files || []))} /></label></p>
    <p className="text-xs text-gray-400 mt-2">Accepted: {accept.join(', ')} · Max: {Math.round(maxSize/1024/1024)}MB</p>
  </div>);
}
