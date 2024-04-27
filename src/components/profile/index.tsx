import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'

export function Profile() {
  return (
    <div className="flex gap-8 rounded-[0.625rem] bg-base-profile p-8">
      <img className="size-[9.25rem] rounded-lg " src="/avatar.jpg" alt="" />
      <div className="flex flex-col gap-6">
        <div className="grid gap-y-2">
          <a
            href="#"
            className="row-start-1 flex h-fit items-center gap-2 justify-self-end border-solid border-brand text-xs font-bold uppercase leading-relaxed text-brand hover:border-b"
          >
            github
            <ArrowSquareOut size={14} weight="bold" />
          </a>
          <h1 className="col-start-1 row-start-1 text-2xl font-bold text-base-title">
            Cameron Williamson
          </h1>
          <p className="col-start-1 col-end-3 text-base-text">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </div>
        <ul className="flex gap-6 text-base-subtitle">
          <li className="flex items-center gap-1">
            <GithubLogo className="text-base-label" size={18} />
            cameronwll
          </li>
          <li className="flex items-center gap-1">
            <Buildings className="text-base-label" size={18} />
            rocketseat
          </li>
          <li className="flex items-center gap-1">
            <Users className="text-base-label" size={18} />
            32 seguidores
          </li>
        </ul>
      </div>
    </div>
  )
}
