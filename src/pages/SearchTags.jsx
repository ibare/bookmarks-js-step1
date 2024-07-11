import { Link, useParams } from 'react-router-dom'
import { useSearchTags } from '../hooks/useBookmarks'
import styled from 'styled-components'
import Tag from '../components/Tag'

export default function SearchTags() {
  const { tag } = useParams()
  const { bookmarks, loading, error } = useSearchTags(tag)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>


  return (
    <Wrapper>
      {bookmarks.map((bookmark, idx) => (
        <Card key={idx}>
          <Thumbnail image={bookmark.thumbnail} />
          <p className="title">{bookmark.name}</p>
          {bookmark.tags.split(',').map((tagName, idx) =>
            <Tag key={idx} url={`/tags/${tagName}`} selected={tag === tagName}>{tagName}</Tag>
          )}
          <Link to={`/bookmarks/${bookmark.id}`} className="more">...more</Link>
        </Card>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`

const Thumbnail = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  position: relative;
  border: 1px solid #eee;
  border-radius: 16px;

  &:before {
    content: "";
    background-image: url(${props => props.image});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
  }

  &:hover:before {
    transform: scale(1.1); /* 줌인 효과 */
  }
`;

const Card = styled.div`
  flex: 0 0 10%;
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
