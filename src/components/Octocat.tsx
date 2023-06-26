import React from 'react'

export function OctocatComponent(props) {
  return (
    <article>
      <a href={link}>
        <img src={image} width="400" height="400" />
      </a>
      <ul>
        <li>
          {number}
          <a href={link}>
            <strong>{name}</strong>
          </a>
        </li>
        <li>
          <a href={authorLink}>
            <img src={authorImage} width="24px" height="24px" alt="cat" />
          </a>
        </li>
      </ul>
    </article>
  )
}
