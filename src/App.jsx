import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import BookmarkList from './pages/BookmarkList'
import BookmarkDetail from './pages/BookmarkDetail'
import SearchTags from './pages/SearchTags'
import CommingSoon from './pages/CommingSoon'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BookmarkList />} />
          <Route path="bookmarks/:id" element={<BookmarkDetail />} />
          <Route path="tags/:tag" element={<SearchTags />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
