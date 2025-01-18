"use client"

import React from 'react'
import { OpenGraphProvider } from '../../lib/state/opengraph-context'

const StateComponent = ({ children } : { children: React.ReactNode }) => {
  return (
    <OpenGraphProvider>
        {children}
    </OpenGraphProvider>
  )
}

export default StateComponent