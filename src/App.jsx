import styles from './App.module.css'
import wallpaper from './assets/wallpaper.webp'
import TopBar from './components/TopBar'
import Header from './components/Header'
import LinkButton from './components/LinkButton'
import Footer from './components/Footer'
import { links } from './data/links'

export default function App() {
  return (
    <div className={styles.page} style={{ '--wallpaper': `url(${wallpaper})` }}>
      <div className={styles.overlay} />

      <main className={styles.card}>
        <TopBar />
        <Header />

        <nav className={styles.links} aria-label="Links principais">
          {links.map((link) => (
            <LinkButton key={link.id} {...link} />
          ))}
        </nav>

        <Footer />
      </main>
    </div>
  )
}
