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
  const [worksheets, setWorksheets] = Retool.useStateArray({
    name: 'Worksheets',
    initialValue: [],
    inspector: 'hidden',
  })

  const vizContainer = useRef<any>(null)

  useEffect(() => {
    const viz = vizContainer.current
    const initializeViz = async () => {
      if (!viz) return

      await new Promise((resolve, reject) => {
        viz.addEventListener(TableauEventType.FirstInteractive, () => {
          console.log('Viz is interactive!')
          resolve(null)
        })
        viz.addEventListener(TableauEventType.VizLoadError, (error: any) => {
          const message = JSON.parse(error.detail.message)
          const errorMessage = JSON.parse(message.errorMessage)

          const displayMessage = `ca-error-${errorMessage.result.errors[0].code}`
          reject(displayMessage)
        })
      })

      let dashboard
      let worksheets
      if (viz.workbook.activeSheet.sheetType === 'dashboard') {
        dashboard = viz.workbook.activeSheet

        // Provide the name of the worksheet you want to use from the dashboard
        worksheets = dashboard.worksheets.map((ws: any) => ws.name)
        // set the worksheets to the state
        setWorksheets(worksheets)
      } else {
        // Active sheet is already a worksheet
        worksheets = viz.workbook.activeSheet
        setWorksheets(worksheets)
      }

      // Implement additional Tableau JS API methods here...
    }

    initializeViz()
  }, [vizUrl, toolbar, device, embedType, hideTabs, worksheets])

  return (
    <>
      {embedType && vizUrl ? (
        <>
          {embedType === 'viz' ? (
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
      ) : (
        <div>Please provide a Tableau dashboard URL</div>
      )}
    </>
  )
}
