import { Component, Suspense } from 'react'
import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import FallbackLoading from "./components/loader/FallbackLoading.tsx";
import { publicRoutes } from "./routes.ts";
function App() {
  return (
    <Suspense fallback={<FallbackLoading />}>
      <Routes>
        
        {publicRoutes.map(({path, element: Component}) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </Suspense>
  )
}

export default App
