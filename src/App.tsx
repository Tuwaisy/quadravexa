import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'

const KNOWN_ROUTES = new Set(['', 'about', 'services', 'portfolio', 'contact'])

function resolveBasePath() {
  const configuredBase = __BASE_PATH__ ?? '/'
  if (configuredBase && configuredBase !== '/') {
    return configuredBase
  }

  if (typeof window === 'undefined') {
    return configuredBase || '/'
  }

  if (import.meta.env.DEV) {
    return '/'
  }

  const pathname = window.location.pathname

  if (!pathname || pathname === '/') {
    return '/'
  }

  const trimmed = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname

  const segments = trimmed.split('/').filter(Boolean)

  if (segments.length === 0) {
    return '/'
  }

  // If the last segment corresponds to one of our known routes, strip it to derive the base path
  const lastSegment = segments[segments.length - 1]
  if (KNOWN_ROUTES.has(lastSegment)) {
    if (segments.length === 1) {
      return '/'
    }
    return `/${segments.slice(0, -1).join('/')}`
  }

  // Fall back to using the current path (without trailing slash) as the base
  return trimmed
}

function App() {
  const basePath = resolveBasePath()

  return (
    <BrowserRouter basename={basePath}>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App