import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ImageSection.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

const builder = imageUrlBuilder(client)

function ImageSection (props) {
  const {heading, label, text, image, cta, layout} = props

  if (!image) {
    return null
  }

  if (layout === 'two-column') {
    return (
      <div className={styles.twoColumnContainer} >
        <div className={styles.twoColumn}>
          <img
            src={builder
              .image(image)
              .auto('format')
              .width(2000)
              .url()}
            className={styles.column}
            alt={heading}
          />
          <div className={styles.captionBoxColumn}>
            <div className={styles.columnLabel}>{label}</div>
            <h2 className={styles.columnTitle}>{heading}</h2>
            {text && <SimpleBlockContent blocks={text} />}
            {cta && <Cta {...cta} />}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.root}>
      <figure className={styles.content}>
        <img
          src={builder
            .image(image)
            .auto('format')
            .width(2000)
            .url()}
          className={styles.image}
          alt={heading}
        />
        <figcaption>
          <div className={styles.caption}>
            <div className={styles.captionBox}>
              <div className={styles.label}>{label}</div>
              <h2 className={styles.title}>{heading}</h2>
              {text && <SimpleBlockContent blocks={text} />}
              {cta && <Cta {...cta} />}
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string
    })
  }),
  layout: PropTypes.string,
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object
}

export default ImageSection
