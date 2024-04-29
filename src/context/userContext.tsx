import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface UserData {
  login: string
  avatar_url: string
  followers: number
  name: string
  bio: string
  company: string | null
}

export interface PostData {
  comments: number
  id: number
  title: string
  createdAt: Date
  body: string
  number: number
}

interface PostResponse {
  comments: number
  id: number
  title: string
  created_at: string
  body: string
  number: number
}

type PostsData = PostData[]

interface UserContextType {
  user: UserData
  posts: PostsData
  setSearchQuery: (query: string) => void
}

export const userContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('')
  const [posts, setPosts] = useState<PostsData>([])
  const [user, setUser] = useState<UserData>({
    login: '',
    avatar_url: '',
    company: null,
    name: '',
    bio: '',
    followers: 0,
  })

  const setSearchQuery = (query: string) => {
    setQuery(query)
  }

  async function fetchUser(user: string) {
    const response = await api.get<UserData>(`/users/${user}`)

    const {
      avatar_url: avatarURL,
      company,
      followers,
      login,
      name,
      bio,
    } = response.data

    setUser({ avatar_url: avatarURL, company, followers, login, name, bio })
  }

  async function fetchPosts(user: string, query: string, repo: string) {
    const response = await api.get<{ items: PostResponse[] }>(
      `/search/issues`,
      {
        params: {
          q: `${query} repo:${user}/${repo}`,
        },
      },
    )

    const posts = response.data.items.map((post) => {
      return {
        comments: post.comments,
        id: post.id,
        title: post.title,
        createdAt: new Date(post.created_at),
        body: post.body,
        number: post.number,
      }
    })

    setPosts(posts)
  }

  useEffect(() => {
    fetchUser('rcnald')
  }, [])

  useEffect(() => {
    fetchPosts('rcnald', query, 'ignite-gitblog')
  }, [query])

  return (
    <userContext.Provider value={{ user, posts, setSearchQuery }}>
      {children}
    </userContext.Provider>
  )
}
