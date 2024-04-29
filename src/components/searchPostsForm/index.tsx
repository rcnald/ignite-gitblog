import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import { z } from 'zod'
import { userContext } from '../../context/userContext'

const SearchFormValidationSchema = z.object({
  query: z.string().nullable(),
})

type SearchFormType = z.infer<typeof SearchFormValidationSchema>

export function SearchPostsForm() {
  const setSearchQuery = useContextSelector(
    userContext,
    (context) => context.setSearchQuery,
  )
  const { register, handleSubmit } = useForm<SearchFormType>({
    resolver: zodResolver(SearchFormValidationSchema),
    defaultValues: { query: '' },
  })

  const handleSearchFormSubmit = (data: SearchFormType) => {
    event?.preventDefault()
    setSearchQuery(data.query ?? '')
  }

  return (
    <form onSubmit={handleSubmit(handleSearchFormSubmit)}>
      <label
        htmlFor="query"
        className="flex rounded-md border border-solid border-base-border bg-base-input px-4 py-3 has-[:focus]:border-brand"
      >
        <span className="sr-only">Buscar conteúdo</span>
        <input
          id="query"
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
          className="bg-transparent text-base-text placeholder:text-base-label focus:outline-none"
        />
      </label>
    </form>
  )
}
