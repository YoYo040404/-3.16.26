'use client'

import { useState } from 'react'
import ConceptA from '@/components/concept-a'
import ConceptB from '@/components/concept-b'
import ConceptC from '@/components/concept-c'

export default function Page() {
  const [concept, setConcept] = useState<'a' | 'b' | 'c'>('a')

  return (
    <>
      {/* Concept Switcher */}
      <div className="fixed top-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-sm border-l border-b border-border rounded-bl-lg">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium text-muted-foreground">בחר דיזיין:</p>
          <div className="flex gap-2">
            <button
              onClick={() => setConcept('a')}
              className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                concept === 'a'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-muted'
              }`}
            >
              עריכוני
            </button>
            <button
              onClick={() => setConcept('b')}
              className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                concept === 'b'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-muted'
              }`}
            >
              טקטילי
            </button>
            <button
              onClick={() => setConcept('c')}
              className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                concept === 'c'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground hover:bg-muted'
              }`}
            >
              מכירות
            </button>
          </div>
        </div>
      </div>

      {/* Concepts */}
      <div>
        {concept === 'a' && <ConceptA />}
        {concept === 'b' && <ConceptB />}
        {concept === 'c' && <ConceptC />}
      </div>
    </>
  )
}
