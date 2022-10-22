import classes from './Footer.module.css'

import { faker } from '@faker-js/faker'

const createRandomLink = () => {
  return {
    id: faker.datatype.uuid(),
    href: faker.internet.url(),
    text: faker.lorem.words(3),
  }
}

const capitalize = (s: string) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const FAKE_FOOTER_LINKS = Array.from({ length: 15 }, createRandomLink)

export const Footer = () => {
  const FakeFooterLinks = FAKE_FOOTER_LINKS.map((link) => (
    <li key={link.id}>
      <a href={link.href}>{capitalize(link.text)}</a>
    </li>
  ))

  return (
    <footer className={classes.root}>
      <h2>Super shop {new Date().getFullYear()}</h2>
      <ul className={classes.list}>{FakeFooterLinks}</ul>
    </footer>
  )
}
