/*eslint @typescript-eslint/no-explicit-any: ["error", { "ignoreRestArgs": true }]*/
import Link from 'next/link'
import styles from './styles.module.scss'

export type IButtonProps = {
  children: React.ReactNode
  url?: string
  handleClick?: (...args: any[]) => void
  as: 'button' | 'link'
}

const Button = ({ children, as, url, handleClick }: IButtonProps) => {
  return (
    <div className={styles.btn}>
      {as === 'link' && (
        <Link href={url}>
          <a>{children}</a>
        </Link>
      )}

      {as === 'button' && <button onClick={handleClick}>{children}</button>}
    </div>
  )
}

export default Button
