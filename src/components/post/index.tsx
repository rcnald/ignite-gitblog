export function Post() {
  return (
    <article className="flex flex-col gap-5 rounded-[0.625rem] bg-base-post p-8">
      <span className="flex justify-between gap-4">
        <h2 className="text-xl font-bold text-base-title">
          JavaScript data types and data structures
        </h2>
        <span className="whitespace-nowrap text-center text-sm text-base-span">
          Há 1 dia
        </span>
      </span>
      <p className="overflow-hidden text-ellipsis text-base-text [-webkit-box-orient:vertical;] [-webkit-line-clamp:4;] [display:-webkit-box;]">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo = bar; // foo is now a string
        foo = true; // foo is now a boolean
      </p>
    </article>
  )
}
