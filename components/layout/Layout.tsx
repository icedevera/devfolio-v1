import styles from './layout.module.scss'
import NavBar from './NavBar/NavBar'
import TopMenu from './TopMenu/TopMenu'
import dynamic from 'next/dynamic'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const Snowfall = dynamic(
    () => {
      return import('react-snowfall')
    },
    { ssr: false }
  )
  return (
    <>
      <div className={styles.layoutContainer}>
        <TopMenu />
        <NavBar />
        <div className={styles.content}>
          <Snowfall snowflakeCount={100} style={{ zIndex: 100 }} />
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
