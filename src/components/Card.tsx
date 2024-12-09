import Image from './Image'
import Link from './Link'
import Paragraph from './Paragraph'

interface CardLink {
  /** Link location */
  href: string
  /** Link text */
  text: string
}

interface Props {
  /** Card Image Source */
  imgSrc: string
  /** Card Title */
  title: string
  /** Card Description */
  description?: string
  /** Main link location */
  mainHref?: string
  /** Additional Links */
  links?: CardLink []
  /** Additional css classes */
  className?: string
}

/** Card with Image UI Component. Can include a link from the image and title and also have additional links */
const Card = ({ imgSrc, title, description = undefined, mainHref = undefined, links = undefined, className = undefined }: Props) => (
  <div className={`md max-w-[544px] p-4 ${className}`}>
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (mainHref ? (
          <Link href={mainHref} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {mainHref ? (
            <Link href={mainHref} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        {description && (
          <Paragraph>{description}</Paragraph>
        )}
        {links && links.map(link => (
          <div>
            <Link
              href={link.href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              {link.text} &rarr;
            </Link>
          </div>
        ))
        }
      </div>
    </div>
  </div>
)

export default Card
