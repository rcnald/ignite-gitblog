import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { Post } from '../../components/post'
import { Profile } from '../../components/profile'
import { SearchPostsForm } from '../../components/searchPostsForm'
import { userContext } from '../../context/userContext'

const SearchFormValidationSchema = z.object({
  query: z.string().nullable(),
})

type SearchFormType = z.infer<typeof SearchFormValidationSchema>

export function Posts() {
  const { posts, setSearchQuery } = useContext(userContext)
  const searchForm = useForm<SearchFormType>({
    resolver: zodResolver(SearchFormValidationSchema),
    defaultValues: { query: '' },
  })

  const handleSearchFormSubmit = (data: SearchFormType) => {
    event?.preventDefault()
    setSearchQuery(data.query ?? '')
  }

  const { handleSubmit } = searchForm

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
          <form onSubmit={handleSubmit(handleSearchFormSubmit)}>
            <FormProvider {...searchForm}>
              <SearchPostsForm />
            </FormProvider>
          </form>
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
