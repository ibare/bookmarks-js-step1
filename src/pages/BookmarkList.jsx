import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Tag from '../components/Tag'

export default function BookmarkList() {
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    const getBookmarks = async () => {
      try {
        const response = await fetch('/api/bookmarks')
        const data = await response.json()
        
        setBookmarks(data)
      } catch (error) {
        console.error(error)
      }
    }

    getBookmarks()
  }, [])

  return (
    <Wrapper>
      {bookmarks.map((bookmark, idx) => (
        <Card key={idx}>
          <img src={bookmark.thumbnail} width="100%" alt={bookmark.name} />
          <p className="title">{bookmark.name}</p>
          {bookmark.tags.split(',').map((tag, idx) =>
            <Tag key={idx} url={`/tags/${tag}`}>{tag}</Tag>
          )}
          <Link to={`/bookmarks/${bookmark.id}`} className="more">...more</Link>
        </Card>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`

const Card = styled.div`
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .title {
    font-size: 14px;
    font-weight: 700;
  }

  .more {
    font-size: 11px;
    color: #666;
    margin-left: 1em;
  }
`
