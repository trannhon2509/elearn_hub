import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import configRoute from './routes/configRoute'
import { Suspense } from 'react'
import LoadingOverlay from './components/LoadingOverlay'

function App() {
  return (
    <Router>
      <Routes>
        {configRoute.map((route, index) => {
          const Component = route.component
          const Layout = route.layout
          return (
            <Route key={index} path={route.path} element={
              <Suspense fallback={<LoadingOverlay fullScreen={true} />}>
                <Layout>
                  <Suspense fallback={<LoadingOverlay fullScreen={false} />}>
                    <Component />
                  </Suspense>
                </Layout>
              </Suspense>
            } />
          )
        })}
      </Routes>
    </Router>
  )
}

export default App
