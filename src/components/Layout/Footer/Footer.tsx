import classes from './Footer.module.css'

const FAKE_FOOTER_LINKS = [
  {
    text: 'About',
    id: 'about',
    href: '#',
  },
  {
    text: 'About',
    id: 'about',
    href: '#',
  },
  {
    text: 'About',
    id: 'about',
    href: '#',
  },
  {
    text: 'About',
    id: 'about',
    href: '#',
  },
  {
    text: 'About',
    id: 'about',
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
