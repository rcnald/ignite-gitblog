import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { userContext } from '../../context/userContext'

export function Profile() {
  const user = useContextSelector(userContext, (context) => context.user)
  return (
    <div className="flex gap-8 rounded-[0.625rem] bg-base-profile p-8">
      <img
        className="size-[9.25rem] rounded-lg "
        src={user.avatar_url}
        alt=""
      />
      <div className="flex w-full flex-col justify-between gap-6">
        <div className="grid gap-y-2">
          <a
            href={`https://github.com/${user.login}`}
            target="_blank"
            className="row-start-1 flex h-fit items-center gap-2 justify-self-end border-solid border-brand text-xs font-bold uppercase leading-relaxed text-brand hover:border-b"
            rel="noreferrer"
          >
            github
            <ArrowSquareOut size={14} weight="bold" />
          </a>
          <h1 className="col-start-1 row-start-1 text-2xl font-bold text-base-title">
            {user.name}
          </h1>
          <p className="col-start-1 col-end-3 text-base-text">{user.bio}</p>
        </div>
        <ul className="flex gap-6 text-base-subtitle">
          <li className="flex items-center gap-1">
            <GithubLogo className="text-base-label" size={18} />
            {user.login}
          </li>
          <li className="flex items-center gap-1">
            <Buildings className="text-base-label" size={18} />
            {user.company ? user.company : 'Nenhuma'}
          </li>
          <li className="flex items-center gap-1">
            <Users className="text-base-label" size={18} />
            {user.followers} seguidores
          </li>
        </ul>
      </div>
    </div>
  )
}
