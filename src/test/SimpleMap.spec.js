import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SimpleMap from '../components/Map/SimpleMap'


test('loads and displays empty map', async () => {
  
  render(<SimpleMap  />)

  const markers = screen.queryByText('Marker')
  expect(markers).not.toBeInTheDocument()
  
})

