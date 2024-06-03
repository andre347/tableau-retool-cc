import React, { type FC, useEffect, useRef } from 'react'
import { TableauEventType } from './tableau' // Import the local file

import { Retool } from '@tryretool/custom-component-support'

export const TableauViz: FC = () => {
  // settings in Tableau
  const [vizUrl, setVizUrl] = Retool.useStateString({
    name: 'Tableau URL',
  }) // e.g. https://public.tableau.com/views/DeveloperSuperstore/Overview
  const [toolbar, setToolbar] = Retool.useStateEnumeration({
    name: 'Toolbar Location',
    enumDefinition: ['top', 'bottom', 'hidden'],
    initialValue: 'bottom',
    enumLabels: {
      top: 'Top',
      bottom: 'Bottom',
      hidden: 'Hidden',
    },
    inspector: 'select',
    description: 'Select the toolbar location',
    label: 'Toolbar Location',
  })
  const [device, setDevice] = Retool.useStateEnumeration({
    name: 'Viewing Device',
    enumDefinition: ['desktop', 'default', 'phone', 'tablet'],
    initialValue: 'desktop',
    enumLabels: {
      desktop: 'Desktop',
      default: 'Default',
      phone: 'Phone',
      tablet: 'Tablet',
    },
    inspector: 'select',
    description: 'Select the viewing device',
    label: 'Viewing Device',
  })
  const [embedType, setEmbedType] = Retool.useStateEnumeration({
    name: 'Embed Type',
    enumDefinition: ['viz', 'authoring'],
    initialValue: 'viz',
    enumLabels: {
      viz: 'Viz',
      authoring: 'Authoring',
    },
    inspector: 'select',
    description: 'Select the embed type',
    label: 'Embed Type',
  })
  const [hideTabs, setHideTabs] = Retool.useStateBoolean({
    name: 'Hide Tabs',
    inspector: 'checkbox',
  }) // true or false

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

      //   const dashboard = await viz.workbook.activateSheetAsync('Overview')
      //   const worksheet = dashboard.worksheets.find((ws: any) => ws.name === 'SaleMap')
      //   const worksheets = dashboard.worksheets.map((ws: any) => ws.name)
      //   console.log('Worksheets:', worksheets)
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
              {...(hideTabs ? { 'hide-tabs': true } : {})}
              toolbar={toolbar || 'bottom'}
            />
          ) : (
            <tableau-authoring-viz
              ref={vizContainer}
              src={vizUrl}
              device="desktop"
              {...(hideTabs ? { 'hide-tabs': true } : {})}
              toolbar={toolbar || 'bottom'}
            ></tableau-authoring-viz>
          )}
        </>
      )}
    </>
  )
}
