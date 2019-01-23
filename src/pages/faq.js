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
    q: 'What would disqualify a property from your program?',
    a: 'Two primary items: location and deferred maintenance. We pride ourselves on providing quality housing in specific, centrally-located geographic areas.',
  },
  {
    q: 'How do I know I get paid on time each month?',
    a: 'We maintain a reserve fund of 3 months rent for every property to make certain you are secure. Note that as of this writing, we have never had to tap into the reserve fund.',
  },
  {
    q: 'What happens if an occupant damages my property',
    a: 'GoHomeAway is 100% responsible for repairing any occupant-caused damage, coordinating all repairs and maintenance, paying utilities AND rent even if the property is unoccupied.',
  },
  {
    q: 'What happens if GoHomeAway breaches any terms of the agreement?',
    a: 'If we default on any terms of our agreement, you have the right to end the agreement and take over as landlord.',
  },
  {
    q: 'What happens if I breach any terms of the agreement?',
    a: 'If you default on any terms of our agreement, we have the right to end the agreement and let you take over as landlord. Failing to promptly address an issue at the property that negatively impacts the guest’s quality of life (heating, A/C, plumbing) would be considered a default on the terms of our agreement. Also, failing to disclose a problem with the property, like a pest control issue beforehand would be considered a default as well.',
  },
  {
    q: 'How are repair and maintenance handled?',
    a: 'If the cost of the repair is less than the monthly rent GoHomeAway pays you, GoHomeAway will pay for it upfront and deduct it from the next month’s rent. If the cost of the repair is above the monthly rent GoHomeAway pays you, you are responsible for paying for the repair upfront. All invoices are submitted to you and GoHomeAway does not charge any premiums over and above the actual costs incurred.\n' +
      '\n' +
      'We require that all repairs be handled by a highly trained professional to ensure that they are completed to the highest level of workmanship possible. If there are any repairs that you’d like to make, please do so BEFORE you sign an agreement with GoHomeAway.',
  },
  {
    q: 'Do I still get to take the depreciation tax deduction on the property?',
    a: 'Absolutely! You are still the owner. No depreciation, voting rights or equitable interest are being transferred. This is just a long term guaranteed lease with the right to sublet, nothing more, nothing less.',
  },
  {
    q: 'How do I get started?',
    a: 'Here is the order of events:\n' +
      'Complete the property qualification form on our home page\n' +
      'If your property qualifies, we will schedule an appointment to meet at the property\n' +
      'Tour property and discuss the terms of the lease agreement\n' +
      'We sign the lease and Occupied furnishes the property\n' +
      'You sit back, relax and collect your check!',
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