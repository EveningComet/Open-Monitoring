import { useState } from 'react'

// Web pages and routing
import { Routes, Route, Navigate } from 'react-router'
import Home from './pages/Home'
import ManageAccount from './pages/ManageAccount'
import AlarmHistory from './pages/AlarmHistory'
import Resources from './pages/Resources'
import Dashboard from './components/Dashboard'

function App()
{
  return (
    <>
      <Dashboard />
      
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
