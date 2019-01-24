import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Section } from '../components/section'
import { HalfSpacedHr } from '../components/spaced-hr'

import { Button, Form, FormGroup, Input } from 'reactstrap'
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
`;

const InlineFormGroup = styled(FormGroup)`
  width: 48%;
  display: inline-block;
`;

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      address: '',
      numBed: '',
      numBath: '',
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
            <StyledForm>
              <FormGroup>
                {/*<Label for="name">Name</Label>*/}
                <Input type="text" name="fullname" id="name"
                       placeholder="Name"
                       value={this.state.name}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                {/*<Label for="email"></Label>*/}
                <Input type="email" name="email" id="email"
                       placeholder="Email Address"
                       value={this.state.email}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                {/*<Label for="phone">Email</Label>*/}
                <Input type="tel" name="phone" id="phone"
                       placeholder="Phone Number"
                       value={this.state.phone}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                {/*<Label for="exampleText">Text Area</Label>*/}
                <Input type="textarea" name="text" id="message"
                       placeholder="Message"
                       value={this.state.message}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                {/*<Label for="exampleText">Text Area</Label>*/}
                <Input type="textarea" name="text" id="address"
                       placeholder="Property Address"
                       value={this.state.address}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroupInline>
                <InlineFormGroup>
                  <Input type="number" name="number" id="numBed"
                         placeholder="Number of Beds"
                         value={this.state.numBed}
                         onChange={this.handleChange}/>
                </InlineFormGroup>
                <InlineFormGroup>
                  <Input type="number" name="number" id="numBath"
                         placeholder="Number of Bathrooms"
                         value={this.state.numBath}
                         onChange={this.handleChange}/>
                </InlineFormGroup>
              </FormGroupInline>
              <Button size="lg" block
                      onClick={this.handleSubmit}>Submit</Button>
            </StyledForm>
            <ContactInfo>
              <h5>Questions or concerns?</h5>
              <div className="contact-item">
                <FontAwesomeIcon className="phone" icon={faPhoneSquare}
                                 size="3x"/>
                <span>Call us at</span>&nbsp;
                <span className="payload">(123) 456-7890</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon className="email" icon={faEnvelopeSquare}
                                 size="3x"/>
                <span>Email us at</span>&nbsp;
                <span className="payload">
                    <a href="mailto:email@bvrealestate.partners">email@bvrealestate.partners</a>
                  </span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon className="fb" icon={faFacebookSquare}
                                 size="3x"/>
                <span>Visit us on</span>&nbsp;
                <span className="payload">
                    <a target="_blank" href="http://facebook.com">Facebook</a>
                  </span>
              </div>
            </ContactInfo>
          </ContactWrapper>
        </Section>
      </Layout>
    )
  }
}

export default Contact
