exports.linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === 'tag') {
    return `/tag/${doc.uid}`
  }

  // URL for a page type
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }

  // Backup for all other types
  return '/'
}