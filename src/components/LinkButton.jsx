import styles from './LinkButton.module.css'
import { iconMap, DotsIcon } from './Icons'

export default function LinkButton({ label, href, icon, highlight = false }) {
  const Icon = iconMap[icon]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} ${highlight ? styles.highlight : ''}`}
    >
      <span className={styles.icon}>{Icon && <Icon size={22} />}</span>
      <span className={styles.label}>{label}</span>
      <span className={styles.dots}>
        <DotsIcon />
      </span>
    </a>
  )
}
