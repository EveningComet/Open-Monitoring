import { useState } from 'react'

// Web pages and routing
import NavigationBar from './components/NavigationBar'
import { Routes, Route, Navigate } from 'react-router'
import Home from './pages/Home'
import ManageAccount from './pages/ManageAccount'
import AlarmHistory from './pages/AlarmHistory'
import Resources from './pages/Resources'

function App()
{
  return (
    <>
      <h1>
        Open Monitoring
      </h1>
      {/* The default NavigationBar is separate so that it can always be seen */}
      <NavigationBar />
      
      {/**
       * TODO: It might be better to have some sort of page renderer, handler, etc.
       * component take care of this. */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/manage-account" element={<ManageAccount />} />
        <Route path="/alarm-history" element={<AlarmHistory />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </>
  );
}

export default App
