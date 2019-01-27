import React, { Component, Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import { Section } from '../components/section'
import Layout from '../components/layout'
import FullWidthSection from '../components/full-width-section'
import TextSection from '../components/text-section'
import Grid from '../components/grid'
import ListingsGridSection from '../components/listings-grid-section'
import CircleGrid from '../components/circle-grid'
import CircleGridSection from '../components/circle-grid-section'
import UList from '../components/list'
import SEO from '../components/seo'
import { SpacedHr, HalfSpacedHr } from '../components/spaced-hr'

import { Collapse, CardBody, Card, CardHeader } from 'reactstrap'

const faqs = [
  {
    q: 'How do I receive the monthly rental payment?',
    a: 'We maintain a minimum reserve fund of 3 months rent to guarantee you will always be paid on time. We will send you a bank statement of the reserve account at your request.',
  },
  {
    q: 'What happens if an occupant damages my property',
    a: 'TrustBNB is 100% responsible for repairing any occupant-caused damage, coordinating all repairs and maintenance, paying utilities AND rent even if the property is unoccupied.',
  },
  {
    q: 'What happens if TrustBNB breaches any terms of the agreement?',
    a: 'If we default on any terms of our agreement, you have the right to end the agreement. We will return the property in excellent condition.',
  },
  {
    q: 'What happens if I breach any terms of the agreement?',
    a: 'If you default on any terms of our agreement, we have the right to end the agreement. Failing to promptly address a major issues at the property that negatively impacts the guest’s quality of life (heating, A/C, plumbing, leaking) would be considered a default on the terms of our agreement. ',
  },
  {
    q: 'What happens if I breach any terms of the agreement?',
    a: 'If you default on any terms of our agreement, we have the right to end the agreement. Failing to promptly address a major issues at the property that negatively impacts the guest’s quality of life (heating, A/C, plumbing, leaking) would be considered a default on the terms of our agreement.',
  },
  {
    q: 'Do I still get to take the depreciation tax deduction on the property?',
    a: 'Absolutely! Everything remains the same as the property owner. This is just a long term guaranteed lease.',
  },
  {
    q: 'How do I get started?',
    a: 'Please complete the Work With Us form on the home page. If your property qualifies, we will schedule a property tour and discuss the terms of the lease agreement. From now on, you can sit back, relax and collect your rent without any more hassle of landlording.',
  },
  {
    q: 'What would disqualify a property from our program?',
    a: 'Location and deferred maintenance. We pride ourselves on providing quality housing in locations close to public transportation.',
  },
]

class FAQ extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { collapse: 0 }
  }

  toggle(e) {
    let event = e.target.dataset.event
    this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) })
  }

  render() {
    const {
      kitchen,
    } = this.props.data
    const { collapse } = this.state

    return (
      <Fragment>
        <Layout>
          <SEO title="Listings"/>
          <Section>
            <h1>Frequently Asked Questions</h1>
            {/*<h6>These property owners are currently earning substantially higher*/}
            {/*rental income with BV Rental Networks.</h6>*/}
          </Section>
          <HalfSpacedHr/>
          {/* Header Image */}
          <FullWidthSection fluidImage={kitchen.childImageSharp.fluid}/>
          <SpacedHr/>

          {faqs.map((faq, i) => {
            return (
              <Card style={{ marginBottom: '1rem' }} key={i}>
                <CardHeader onClick={this.toggle} data-event={i}>
                  {faq.q}
                </CardHeader>
                <Collapse isOpen={collapse === i}>
                  <CardBody>
                    {faq.a}
                  </CardBody>
                </Collapse>
              </Card>
            )
          })}
        </Layout>
      </Fragment>
    )
  }
}

export default FAQ

export const faqQuery = graphql`
query faqQuery {
  kitchen: file(relativePath: {eq: "homes/kitchen.jpg"}) {
    ...fluidLargeImage
  }
}
`