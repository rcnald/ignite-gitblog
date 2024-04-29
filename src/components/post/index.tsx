import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { PostData } from '../../context/userContext'

interface PostProps {
  post: PostData
}

export function Post({ post }: PostProps) {
  return (
    <article className="flex flex-col gap-5 rounded-[0.625rem] bg-base-post p-8">
      <span className="flex justify-between gap-4">
        <h2 className="text-xl font-bold text-base-title">{post.title}</h2>
        <time
          dateTime={post.createdAt.toString()}
          title={format(post.createdAt, "d 'de' LLLL 'ás' HH:mm'h'", {
            locale: ptBR,
          })}
          className="whitespace-nowrap text-center text-sm text-base-span"
        >
          {formatDistanceToNow(post.createdAt, {
            locale: ptBR,
            addSuffix: true,
          })}
        </time>
      </span>
      <p className="overflow-hidden text-ellipsis text-base-text [-webkit-box-orient:vertical;] [-webkit-line-clamp:4;] [display:-webkit-box;]">
        {post.body}
      </p>
    </article>
  )
}
