import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import {LogoJsonLd} from 'next-seo'
import Footer from './Footer'

function Layout (props) {
  const {config, children} = props

  if (!config) {
    console.error('Missing config')
    return <div>Missing config</div>
  }

  const {footerNavigation, footerText, logo, url} = config
  const logoUrl = logo && logo.asset && logo.asset.url

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
      </Head>
      <div className='container'>
        <div className='bookend' />
        <div className='content'>{children}</div>
        <h3 className='heading'>Service Opportunities</h3>
        <div className='two-column'>
          <ul className='two-column-list'>
            <li>
              Denver Rescue Mission
            </li>
            <li>
              Mango House
            </li>
            <li>
              Denver Parks and Recreation
            </li>
          </ul>
          <ul className='two-column-list'>
            <li>
              Generosity Feeds
            </li>
            <li>
              Project Worthmore
            </li>
          </ul>
        </div>
        <Footer navItems={footerNavigation} text={footerText} />
        {logoUrl && url && <LogoJsonLd url={url} logo={logoUrl} />}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  config: PropTypes.shape({
    title: PropTypes.string,
    mainNavigation: PropTypes.arrayOf(PropTypes.object),
    footerNavigation: PropTypes.arrayOf(PropTypes.object),
    footerText: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string
      })
    }),
    url: PropTypes.string
  })
}

export default Layout
