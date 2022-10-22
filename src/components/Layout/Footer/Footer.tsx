import classes from './Footer.module.css'

const FAKE_FOOTER_LINKS = [
  {
    text: 'About',
    id: 'aboutve3e',
    href: '#',
  },
  {
    text: 'About',
    id: 'abous3fgt',
    href: '#',
  },
  {
    text: 'About',
    id: 'w3f',
    href: '#',
  },
  {
    text: 'About',
    id: 's3tsfsasd2',
    href: '#',
  },
  {
    text: 'About',
    id: 'g3wfvfw',
    href: '#',
  },
]

export const Footer = () => {
  const FakeFooterLinks = FAKE_FOOTER_LINKS.map((link) => (
    <li key={link.id}>
      <a href={link.href}>{link.text}</a>
    </li>
  ))

  return (
    <footer className={`${classes.root} app-width`}>
      <p>© {new Date().getFullYear()} Super shop</p>
      <ul className={classes.list}>{FakeFooterLinks}</ul>
    </footer>
  )
}
