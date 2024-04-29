import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  ArrowLeft,
  ArrowSquareOut,
  Calendar,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'

interface PostResponse {
  title: string
  user: { login: string }
  created_at: string
  comments: number
  body: string
}

interface PostData {
  title: string
  user: { login: string }
  createdAt: Date
  comments: number
  body: string
}

export function Details() {
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<PostData>({
    body: '',
    comments: 0,
    createdAt: new Date(),
    title: '',
    user: {
      login: '',
    },
  })

  useEffect(() => {
    async function fetchPost() {
      const response = await api.get<PostResponse>(
        `/repos/rcnald/ignite-gitblog/issues/${id}`,
      )

      const {
        body,
        comments,
        created_at: createdAt,
        title,
        user,
      } = response.data

      setPost({ body, comments, createdAt: new Date(createdAt), title, user })
    }

    fetchPost()
  }, [id])

  return (
    <>
      <div className="flex flex-col gap-8 rounded-[0.625rem] bg-base-profile p-8">
        <div className="flex w-full justify-between">
          <a
            onClick={() => history.back()}
            target="_blank"
            className="row-start-1 flex h-fit cursor-pointer items-center gap-2 justify-self-end border-b border-solid border-transparent text-xs font-bold uppercase leading-relaxed text-brand hover:border-brand"
            rel="noreferrer"
          >
            <ArrowLeft size={14} weight="bold" />
            voltar
          </a>
          <a
            href={`https://github.com/rcnald/ignite-gitblog/issues/${id}`}
            target="_blank"
            className="row-start-1 flex h-fit items-center gap-2 justify-self-end border-solid border-brand text-xs font-bold uppercase leading-relaxed text-brand hover:border-b"
            rel="noreferrer"
          >
            ver no github
            <ArrowSquareOut size={14} weight="bold" />
          </a>
        </div>
        <h1 className="col-start-1 row-start-1 text-2xl font-bold text-base-title">
          {post.title ?? 'post'}
        </h1>
        <ul className="flex gap-6 text-base-subtitle">
          <li className="flex items-center gap-1">
            <GithubLogo className="text-base-label" size={18} />
            {post.user.login ?? 'rcnald'}
          </li>
          <li className="flex items-center gap-1">
            <Calendar className="text-base-label" size={18} weight="fill" />
            {formatDistanceToNow(post.createdAt ?? '2022-06-13', {
              locale: ptBR,
              addSuffix: true,
            }) ?? 'Nunca'}
          </li>
          <li className="flex items-center gap-1">
            <ChatCircle className="text-base-label" size={18} weight="fill" />
            {post.comments ?? 0} comentários
          </li>
        </ul>
      </div>
      <main className="flex px-8 py-10 text-base-text">{post.body}</main>
    </>
  )
}
