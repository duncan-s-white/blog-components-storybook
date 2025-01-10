// import SearchButton from './SearchButton'
import Link from "./Link"
import Image from "./Image"
import SocialIcon from "./social-icons"
import ThemeSwitch from "./ThemeSwitch"
import MobileNav from "./MobileNav"

interface Props {
  /** Contents of the Heading */
  headerNavLinks: Array<{ href: string, title: string }>
  headerTitle: string
  email: string
}

/** Header UI Component */
const Header = ({ headerNavLinks, headerTitle, email }: Props) => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Image
                src="/static/images/logo_med.png"
                alt="logo"
                style={{ minWidth: 50, minHeight: 40 }}
                width="50"
                height="40"
              />
            </div>
            {typeof headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {headerTitle}
              </div>
            ) : (
              headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400
              sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SocialIcon kind="mail" href={`mailto:${email}`} size={6} />
        {/* <SearchButton /> */}
        <ThemeSwitch />
        <MobileNav headerNavLinks={headerNavLinks} />
      </div>
    </header>
  )
}

export default Header
