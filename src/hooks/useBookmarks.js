import { useState, useEffect } from 'react'

export const useSearchTags = (tag) => {
  const [bookmarks, setBookmarks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getBookmarks = async () => {
      setLoading(true)
      setError(null)
      setBookmarks([])

      try {
        const response = await fetch(`/api/search/bookmarks/tags/${tag}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setBookmarks(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getBookmarks()
  }, [tag])

  return { bookmarks, loading, error }
}

export const useBookmarkDetail = (id) => {
  const [bookmark, setBookmark] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getBookmark = async () => {
      try {
        const response = await fetch(`/api/bookmarks/${id}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setBookmark(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getBookmark()
  }, [id])

  return { bookmark, loading, error }
}