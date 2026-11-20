import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Calendar from './pages/Calendar'
import Timeline from './pages/Timeline'
import Write from './pages/Write'
import Artists from './pages/Artists'
import Genres from './pages/Genres'
import Profile from './pages/Profile'
import AppLayout from './layouts/AppLayout'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/calendar' />} />
      <Route element={<AppLayout />}>
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/timeline' element={<Timeline />} />
        <Route path='/write' element={<Write />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/genres' element={<Genres />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App