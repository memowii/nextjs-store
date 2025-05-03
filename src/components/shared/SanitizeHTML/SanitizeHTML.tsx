import { HTMLAttributes } from "react"
import sanitize from "sanitize-html"
import { createElement } from "react"

type SanitizeHTMLProps = {
  children: string
  tag: string
} & HTMLAttributes<HTMLDivElement>

export const SanitizeHTML = ({ tag, children, ...rest }: SanitizeHTMLProps) => {
  const sanitizedHTML = sanitize(children, {
    allowedTags: ['b', 'i', 'em', 'strong'],
  })

  return createElement(
    tag,
    { ...rest },
    sanitizedHTML,
  )
}