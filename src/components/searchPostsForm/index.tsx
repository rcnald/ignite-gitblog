import { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'

interface SearchPostsFormProps extends ComponentProps<'input'> {}

export function SearchPostsForm({ ...props }: SearchPostsFormProps) {
  const { register } = useFormContext()
  return (
    <>
      <label
        htmlFor="query"
        className="flex rounded-md border border-solid border-base-border bg-base-input px-4 py-3 has-[:focus]:border-brand"
      >
        <span className="sr-only">Buscar conteúdo</span>
        <input
          id="query"
          type="text"
          placeholder="Buscar conteúdo"
          {...props}
          {...register('query')}
          className="bg-transparent text-base-text placeholder:text-base-label focus:outline-none"
        />
      </label>
    </>
  )
}
