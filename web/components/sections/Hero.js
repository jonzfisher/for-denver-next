import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import SVG from 'react-inlinesvg'
import styles from './Hero.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}
function Hero (props) {
  const {heading, backgroundImage, tagline, ctas, logo} = props

  const style = backgroundImage
    ? {
      backgroundImage: `url("${urlFor(backgroundImage)
        .width(2000)
        .auto('format')
        .url()}")`
    }
    : {}

  const renderLogo = logo => {
    console.log(`logo: ${JSON.stringify(logo)}`)
    console.log(`props: ${JSON.stringify(props)}`)
    if (!logo || !logo.asset) {
      return null
    }

    if (logo.asset.extension === 'svg') {
      return <SVG src={logo.asset.url} className={styles.logo} />
    }

    return <img src={logo.asset.url} alt={logo.title} className={styles.logo} />
  }

  return (
    <div className={styles.root} style={style}>
      <div className={styles.content}>
        <SVG src={urlFor(logo).width(600).url()} className={styles.logo} />
        <div className={styles.tagline}>{tagline && <SimpleBlockContent blocks={tagline} />}</div>
        <h1 className={styles.title}>We are <strong>FOR DENVER.</strong></h1>
        {ctas && (
          <div className={styles.ctas}>
            {ctas.map(cta => (
              <Cta {...cta} key={cta._key} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  logo: PropTypes.shape({
    asset: PropTypes.shape({
      url: PropTypes.string
    }),
    logo: PropTypes.string
  })
}

export default Hero
