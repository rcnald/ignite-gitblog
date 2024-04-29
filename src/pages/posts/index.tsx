import { Link } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { Post } from '../../components/post'
import { Profile } from '../../components/profile'
import { SearchPostsForm } from '../../components/searchPostsForm'
import { userContext } from '../../context/userContext'

export function Posts() {
  const posts = useContextSelector(userContext, (context) => context.posts)

  return (
    <>
      <Profile />
      <main className="mt-16 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <span className="flex justify-between">
            <h1 className="text-lg font-bold text-base-subtitle">
              Publicações
            </h1>
            <span className="text-sm text-base-span">
              {posts.length} publicações
            </span>
          </span>
          <SearchPostsForm />
        </div>
        <div className="grid grid-cols-2 gap-8">
          {posts.map((post) => {
            return (
              <Link key={post.id} to={`/details/${post.number}`}>
                <Post post={post} />
              </Link>
            )
          })}
        </div>
      </main>
    </>
  )
}
