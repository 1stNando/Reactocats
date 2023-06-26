import React from 'react'

type OctocatComponentProps = {
  number: number
  name: string
  image: string
  link: string
  authorLink: string
  authorImage: string
}

export function OctocatComponent(props: OctocatComponentProps) {
  return (
    <article>
      <a href={props.link}>
        <img src={props.image} width="400" height="400" />
      </a>
      <ul>
        <li>
          {props.number}
          <a href={props.link}>
            <strong>{props.name}</strong>
          </a>
        </li>
        <li>
          <a href={props.authorLink}>
            <img src={props.authorImage} width="24px" height="24px" alt="cat" />
          </a>
        </li>
      </ul>
    </article>
  )
}
