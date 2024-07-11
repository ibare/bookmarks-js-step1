import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useBookmarkDetail } from '../hooks/useBookmarks'
import Tag from '../components/Tag'

export default function BookmarkDetail() {
  const { id } = useParams()
  const { bookmark, loading, error } = useBookmarkDetail(id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const { 
    name, 
    thumbnail, 
    description, 
    tags,
    npm, 
    github 
  } = bookmark

  return (
    <Wrapper>
      <Item>
        <img src={thumbnail} width="100%" />
      </Item>
      <Item>
        <h2>{name}</h2>
        <p>{description}</p>
        {tags.split(',').map((tag, idx) =>
          <Tag key={idx} url={`/tags/${tag}`}>{tag}</Tag>
        )}
      </Item>      
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`

const Item = styled.div`
  flex: 1;
`
