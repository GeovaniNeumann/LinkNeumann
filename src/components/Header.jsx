import styles from './Header.module.css'
import logo from '../assets/logo.webp'
import { profile, socials } from '../data/links'
import { InstagramIcon, WhatsAppIcon } from './Icons'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.avatarWrap}>
        <img
          className={styles.avatar}
          src={logo}
          alt="Logo Neumann Web Solutions"
          width="132"
          height="132"
        />
      </div>

      <h1 className={styles.name}>{profile.name}</h1>
      <p className={styles.bio}>{profile.bio}</p>

      <div className={styles.socials}>
        <a
          href={socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={styles.socialLink}
        >
          <InstagramIcon size={28} />
        </a>
        <a
          href={socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className={styles.socialLink}
        >
          <WhatsAppIcon size={28} />
        </a>
      </div>
    </header>
  )
}
