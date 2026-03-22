import { Toaster } from "@/components/ui/toaster"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ApplicationForm from './pages/ApplicationForm'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: 1 } }
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ApplicationForm" element={<ApplicationForm />} />
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  )
}