import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Section } from '../components/section'
import { HalfSpacedHr, SpacedHr } from '../components/spaced-hr'

import { Button, Form, FormGroup, Input } from 'reactstrap'

import colors from '../styles/colors'

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Separator = styled.div`
  margin: 5px 10px 16px 10px;
  height: 1px;
  background-color: ${colors.border.lighter};
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

class Referral extends Component {
  constructor(props) {
    super(props)
    this.state = {
      yourname: '',
      youremail: '',
      friendname: '',
      friendemail: '',
      friendphone: '',
      city: '',
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
        <SEO title="Referral Form"/>
        <Section>
          <h1>Referral Form</h1>
          <h6>Have a friend who would like to rent out their property? Refer them and earn rewards.</h6>
        </Section>
        <HalfSpacedHr/>
        <Section>
          <ContactWrapper>
            <StyledForm action={`https://formspree.io/${email}`}
                        method="POST">
              <FormGroup>
                {/*<Label for="name">Name</Label>*/}
                <Input type="text" name="fullname" id="yourname"
                       placeholder="Your Name"
                       value={this.state.yourname}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                {/*<Label for="email"></Label>*/}
                <Input type="email" name="email" id="youremail"
                       placeholder="Your Email Address"
                       value={this.state.youremail}
                       onChange={this.handleChange}/>
              </FormGroup>
              <Separator/>
              <FormGroup>
                {/*<Label for="name">Name</Label>*/}
                <Input type="text" name="fullname" id="friendname"
                       placeholder="Friend's Name"
                       value={this.state.friendname}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                {/*<Label for="email"></Label>*/}
                <Input type="email" name="email" id="friendemail"
                       placeholder="Friend's Email Address"
                       value={this.state.friendemail}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                {/*<Label for="phone">Email</Label>*/}
                <Input type="tel" name="phone" id="friendphone"
                       placeholder="Friend's Phone Number"
                       value={this.state.friendphone}
                       onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                {/*<Label for="exampleText">Text Area</Label>*/}
                <Input type="text" name="text" id="city"
                       placeholder="City of Friend's Property"
                       value={this.state.city}
                       onChange={this.handleChange}/>
              </FormGroup>
              {/*<input />*/}
              <Button type="submit" size="lg" block
                      onClick={this.handleSubmit}>Submit</Button>
            </StyledForm>
          </ContactWrapper>
        </Section>
      </Layout>
    )
  }
}

export default Referral
