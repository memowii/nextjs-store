import Link from 'next/link'
import styles from './Header.module.css'
import { cookies } from 'next/headers'

export const Header = () => {
  const cookieStore = cookies()
  const token = cookieStore.get('accessToken')?.value

  return (
    <header>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/store">
              Store
            </Link>
          </li>
          <li>
            <Link href="/test">
              Test
            </Link>
          </li>
        </ul>
        {token ? (<p>Hola!</p>) : (<Link href="/login">Login</Link>)}
      </nav>
    </header>)
}