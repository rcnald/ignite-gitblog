export function SearchPostsForm() {
  return (
    <>
      <label
        htmlFor="search"
        className="flex rounded-md border border-solid border-base-border bg-base-input px-4 py-3 has-[:focus]:border-brand"
      >
        <span className="sr-only">Buscar conteúdo</span>
        <input
          id="search"
          type="text"
          placeholder="Buscar conteúdo"
          className="bg-transparent text-base-text placeholder:text-base-label focus:outline-none"
        />
      </label>
    </>
  )
}
