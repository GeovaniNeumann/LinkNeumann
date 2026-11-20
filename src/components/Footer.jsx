import styles from './Footer.module.css'
import { socials } from '../data/links'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <a
        className={styles.cta}
        href={socials.site}
        target="_blank"
        rel="noopener noreferrer"
      >
        Quero meu site profissional
      </a>

      <p className={styles.copy}>
        © {year} Neumann Web Solutions
        <br />
        Innovate. Code. Connect.
      </p>
    </footer>
  )
}
