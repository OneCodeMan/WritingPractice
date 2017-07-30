import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div
    style={{
      background: '#446DF6',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{
          margin: 0,
          color: '#FFFFFA',
          textAlign: 'center',
          fontSize: '50px',
        }}>
        <Link
          to="/"
          style={{
            color: '#FFFFFA',
            textDecoration: 'none',
            letterSpacing: '2px',
          }}
        >
          My Creative Mind
            </Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({
  children
}) => (
    <div>
      <Helmet
        title="My Creative Mind"
        meta={[
          { name: 'description', content: 'My blog' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
