import React, {Component, Fragment} from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/section';
import {HalfSpacedHr} from '../components/spaced-hr';

import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
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
            <Form>
              <FormGroup>
                {/*<Label for="name">Name</Label>*/}
                <Input type="text" name="fullname" id="name"
                       placeholder="Name"
                       value={this.state.name}
                       onChange={this.changeHandler}/>
              </FormGroup>
              <FormGroup>
                {/*<Label for="email"></Label>*/}
                <Input type="email" name="email" id="email"
                       placeholder="Email Address"
                       value={this.state.email}
                       onChange={this.changeHandler}/>
              </FormGroup>
              <FormGroup>
                {/*<Label for="phone">Email</Label>*/}
                <Input type="tel" name="phone" id="phone"
                       placeholder="Phone Number"
                       value={this.state.phone}
                       onChange={this.changeHandler}/>
              </FormGroup>
              <FormGroup>
                {/*<Label for="exampleText">Text Area</Label>*/}
                <Input type="textarea" name="text" id="message"
                       placeholder="Message"
                       value={this.state.message}
                       onChange={this.changeHandler}/>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Section>
        </Layout>
    );
  }
}

export default Contact;
