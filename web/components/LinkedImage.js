import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './LinkedImage.module.css'
import client from '../client'

const builder = imageUrlBuilder(client)

function LinkedImage ({node}) {
  const {alt, linkUrl, asset} = node
  if (!asset) {
    return undefined
  }
  return (
    <a href={linkUrl}>
      <img
        src={builder
          .image(asset)
          .auto('format')
          .height(300)
          .url()}
        className={styles.image}
        alt={alt}
      />
    </a>
  )
}

LinkedImage.propTypes = {
  node: PropTypes.shape({
    alt: PropTypes.string,
    linkUrl: PropTypes.string,
    asset: PropTypes.shape({
      _ref: PropTypes.string
    })
  })
}
export default LinkedImage
