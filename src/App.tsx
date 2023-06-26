import React from 'react'
import { OctocatComponent } from './components/Octocat'
import './index.scss'
import octocats from './octocats.json'

export function App() {
  ///////////////
  return (
    <div>
      <header>
        <div className="container1">
          <nav className="flex1">
            <a className="logo" href="#">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                width="45"
                height="45"
                alt="GithubLogo"
              />
            </a>
            <div className="one">Octodex</div>
            <a className="home" href="#">
              Home
            </a>
            <a className="faq" href="https://octodex.github.com/faq/">
              FAQ
            </a>
            <a className="rss" href="/atom.xml">
              RSS
            </a>
            <a
              className="twitter"
              href="https://twitter.com/githubdesign"
              target="_blank"
              rel="noreferrer"
            >
              Follow us on Twitter
            </a>
            <a className="github" href="https://github.com">
              Back to GitHub.com
            </a>
          </nav>
        </div>
      </header>

      {octocats.map((octocat) => (
        <OctocatComponent
          key={octocat.number}
          number={octocat.number}
          name={octocat.name}
          image={octocat.image}
          link={octocat.link}
          authorLink={octocat.authors[0].link}
          authorImage={octocat.authors[0].image}
        />
      ))}

      <footer>
        <div>
          <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
