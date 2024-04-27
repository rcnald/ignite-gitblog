import { Post } from '../../components/post'
import { Profile } from '../../components/profile'
import { SearchPostsForm } from '../../components/searchPostsForm'

export function Posts() {
  return (
    <>
      <Profile />
      <main className="mt-16 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <span className="flex justify-between">
            <h1 className="text-lg font-bold text-base-subtitle">
              Publicações
            </h1>
            <span className="text-sm text-base-span">6 publicações</span>
          </span>
          <form>
            <SearchPostsForm />
          </form>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Post />
        </div>
      </main>
    </>
  )
}
