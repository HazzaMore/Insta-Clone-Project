import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Auth from "./pages/auth/auth"
import PageLayout from "./PageLayout/PageLayout"

function App() {
  return (
    <PageLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
    </PageLayout>
  )
}

export default App
