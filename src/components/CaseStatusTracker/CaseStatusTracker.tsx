import React from 'react';
interface Props { caseId: string; currentStage: number; stages?: string[]; }
const DEFAULT_STAGES = ['Filed', 'Served', 'Response', 'Discovery', 'Hearing', 'Order'];
export function CaseStatusTracker({ caseId, currentStage, stages = DEFAULT_STAGES }: Props) {
  return (<div><p className="text-sm text-gray-500 mb-2">Case: {caseId}</p><div className="flex gap-1">
    {stages.map((s, i) => (<div key={s} className="flex-1 text-center"><div className={`h-2 rounded-full ${i <= currentStage ? 'bg-blue-600' : 'bg-gray-200'}`} /><p className="text-xs mt-1">{s}</p></div>))}
  </div></div>);
}
