import { useState } from 'react'
import styles from './TopBar.module.css'
import { ShareIcon, SparkIcon } from './Icons'
import { socials } from '../data/links'

export default function TopBar() {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    const url = window.location.href
    const data = {
      title: 'Neumann Web Solutions',
      text: 'Sites profissionais e modernos para pequenos negócios.',
      url,
    }

    try {
      if (navigator.share) {
        await navigator.share(data)
        return
      }
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* usuário cancelou o compartilhamento */
    }
  }

  return (
    <div className={styles.bar}>
      <a
        className={styles.circle}
        href={socials.site}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visitar o site"
      >
        <SparkIcon />
      </a>

      <button
        type="button"
        className={styles.circle}
        onClick={handleShare}
        aria-label="Compartilhar"
      >
        <ShareIcon />
      </button>

      {copied && <span className={styles.toast}>Link copiado!</span>}
    </div>
  )
}
