import React from 'react'
import { Link } from 'gatsby'
import { linkResolver } from '../utils/link_resolver'

export const CustomLink = (type, element, content, children, index) => {
  if (element.data.link_type === 'Page') {
    return(
      <Link to={linkResolver(element.data)} key={element.data.id}>
        {content}
      </Link>
    );
  }

  if (element.data.link_type === 'Web') {
    return(
      <a id={element.data.id} href={element.data.url}>
       {content}
      </a>
    );
  }
  return null;
}