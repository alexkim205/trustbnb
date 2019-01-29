import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Section } from '../components/section'
import { HalfSpacedHr } from '../components/spaced-hr'

import { Button, Label, Form, FormGroup, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhoneSquare,
  faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

import colors from '../styles/colors'

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const StyledForm = styled(Form)`
  width: 50%;
  max-width: 535px;
  padding-right: 6px;
  
  @media (max-width: 768px) {
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  
  button {
    background-color: ${colors.theme.main};
    border-color: ${colors.theme.main};
    &:hover {
      background-color: ${colors.theme.lightmain};
      border-color: ${colors.theme.lightmain};
    }
  }
`
const ContactInfo = styled.div`
  background-color: rgba(0,0,0,0.08);
  width: 50%;
  max-width: 535px;
  height: 100%;
  padding: 20px 25px;
  margin-left: 6px;
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  // align-items: center;
  
  h5 {
    text-align: center;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    span {
      color: ${colors.font.light};
      white-space: nowrap; 
      overflow: hidden;
      text-overflow: ellipsis;
      &.payload {
        color: ${colors.theme.darkaccent};
        // border-bottom: 1px solid ${colors.theme.accent};
        a {
          text-decoration: none;
          color: ${colors.theme.darkaccent};
          &:hover {
            color: ${colors.theme.accent};
          }
        }
      }
    }
    svg {
      margin: 6px 10px;
      &.phone {path{fill: #24CC64}}
      &.email {path{fill: #0489c9}}
      &.fb {path{fill: #3C5A99}}
      
    }
  }
  
  @media (max-width: 768px) {
    margin: 0;
    margin-top: 40px;
    // border-top: 1px solid ${colors.border.light};
    max-width: 100%;
    width: 100%;
  }
`

const FormGroupInline = styled.div`
  display: flex;
  justify-content: space-between;
`

const InlineFormGroup2 = styled(FormGroup)`
  width: 48%;
  display: inline-block;
`

const InlineFormGroup3 = styled(FormGroup)`
  width: 32.5%;
  display: inline-block;
`

const stateOptions = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY']


const bathOptions = ['1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5+']

const bedOptions = ['0 (Studio)', '1', '2', '3', '4', '5', '6+']

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      address: '',
      city: '',
      state: 'NJ',
      zipcode: '',
      numBed: bedOptions[0],
      numBath: bathOptions[0],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {

  }

  render() {
    const email = 'elizabeth@bvrealestatepartners.com'

    return (
      <Layout>
        <SEO title="Contact Us"/>
        <Section>
          <h1>Contact Us</h1>
          <h6>Fill out our Contact Form to get started.</h6>
        </Section>
        <HalfSpacedHr/>
        <Section>
          <ContactWrapper>
            <StyledForm action={`https://formspree.io/${email}`}
                        method="POST">
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="fullname" id="name"
                       placeholder=""
                       value={this.state.name}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email Address</Label>
                <Input type="email" name="email" id="email"
                       placeholder=""
                       value={this.state.email}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone Number</Label>
                <Input type="tel" name="phone" id="phone"
                       placeholder=""
                       value={this.state.phone}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Property Address</Label>
                <Input type="textarea" name="address" id="address"
                       placeholder=""
                       value={this.state.address}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroupInline>
                <InlineFormGroup3>
                  <Label for="exampleText">City</Label>
                  <Input type="text" name="city" id="city"
                         placeholder=""
                         value={this.state.city}
                         onChange={this.handleChange}/>
                </InlineFormGroup3>
                <InlineFormGroup3>
                  <Label>State</Label>
                  <Input type="select"
                         name="state"
                         id="state"
                         value={this.state.state}
                         onChange={this.handleChange}>
                    {stateOptions.map((v, i) => <option key={i}>{v}</option>)}
                  </Input>
                </InlineFormGroup3>
                <InlineFormGroup3>
                  <Label for="exampleText">Zip Code</Label>
                  <Input type="number" name="zipcode" id="zipcode"
                         placeholder=""
                         value={this.state.zipcode}
                         onChange={this.handleChange}/>
                </InlineFormGroup3>
              </FormGroupInline>
              <FormGroupInline>
                <InlineFormGroup2>
                  <Label>Number of Bedrooms</Label>
                  <Input type="select"
                         name="numBed"
                         id="numBed"
                         value={this.state.numBed}
                         onChange={this.handleChange}>
                    {bedOptions.map((v, i) => <option key={i}>{v}</option>)}
                  </Input>
                </InlineFormGroup2>
                <InlineFormGroup2>
                  <Label>Number of Bathrooms</Label>
                  <Input type="select"
                         name="numBath"
                         id="numBath"
                         value={this.state.numBath}
                         onChange={this.handleChange}>
                    {bathOptions.map((v, i) => <option key={i}>{v}</option>)}
                  </Input>
                </InlineFormGroup2>
              </FormGroupInline>
              <FormGroup>
                <Label for="exampleText">Message</Label>
                <Input type="textarea" name="message" id="message"
                       placeholder=""
                       value={this.state.message}
                       onChange={this.handleChange}/>
              </FormGroup>
              {/*<input />*/}
              <Button type="submit" size="lg" block
                      onClick={this.handleSubmit}>Submit</Button>
            </StyledForm>
            <ContactInfo>
              <h5>Questions or concerns?</h5>
              <div className="contact-item">
                <FontAwesomeIcon className="phone" icon={faPhoneSquare}
                                 size="3x"/>
                <span>Text us at</span>&nbsp;
                <span className="payload">+1 (858)859-2807</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon className="email" icon={faEnvelopeSquare}
                                 size="3x"/>
                <span>Email us at</span>&nbsp;
                <span className="payload">
                    <a href={email}>{email}</a>
                  </span>
              </div>
              {/*<div className="contact-item">*/}
              {/*<FontAwesomeIcon className="fb" icon={faFacebookSquare}*/}
              {/*size="3x"/>*/}
              {/*<span>Visit us on</span>&nbsp;*/}
              {/*<span className="payload">*/}
              {/*<a target="_blank" href="http://facebook.com">Facebook</a>*/}
              {/*</span>*/}
              {/*</div>*/}
            </ContactInfo>
          </ContactWrapper>
        </Section>
      </Layout>
    )
  }
}

export default Contact
