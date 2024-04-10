import React, { type FC, useEffect, useRef } from 'react'
import { TableauEventType } from './tableau' // Import the local file

import { useRetoolState } from '@tryretool/custom-component-collections'

export const TableauViz: FC = () => {
  // settings in Tableau
  const [vizUrl, setVizUrl] = useRetoolState('VizURL', '') // e.g. https://public.tableau.com/views/DeveloperSuperstore/Overview
  const [toolbar, setToolbar] = useRetoolState('Toolbar', 'bottom') // 'top', 'bottom', or 'hidden'
  const [device, setDevice] = useRetoolState('Device', 'desktop') // 'desktop', 'default', 'phone', 'tablet'
  const [embedType, setEmbedType] = useRetoolState('Embed Type', 'Viz') // 'viz' or 'authoring'

  const vizContainer = useRef<any>(null)

  useEffect(() => {
    const viz = vizContainer.current
    const initializeViz = async () => {
      if (!viz) return

      await new Promise((resolve) => {
        viz.addEventListener(TableauEventType.FirstInteractive, () => {
          console.log('Viz is interactive!')
          resolve(null)
        })
      })

      const dashboard = await viz.workbook.activateSheetAsync('Overview')
      const worksheet = dashboard.worksheets.find((ws: any) => ws.name === 'SaleMap')

      // Implement additional Tableau JS API methods here...
    }

    initializeViz()
  }, [vizUrl, toolbar, device, embedType])

  return (
    <>
      {embedType && (
        <>
          {embedType === 'Viz' ? (
            <tableau-viz
              ref={vizContainer}
              src={vizUrl}
              device={device || 'default'}
              hideTabs
              toolbar={toolbar || 'bottom'}
            />
          ) : (
            <tableau-authoring-viz
              ref={vizContainer}
              src={vizUrl}
              device="desktop"
              hide-tabs
              toolbar="bottom"
            ></tableau-authoring-viz>
          )}
        </>
      )}
    </>
  )
}
