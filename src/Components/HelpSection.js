import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const HelpSection = () => {
  return (
    <div>
      <h2>Customer Help Section</h2>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              How do I create an account?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              To create an account, go to our website and click on the "Sign Up" button. Follow the instructions to fill out your information and create your account.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              How do I view my bills?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              To view your bills, log in to your account and navigate to the "Bills" section. You will be able to view and download your bills from there.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              What payment methods do you accept?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              We accept all major credit cards and PayPal. You can add or update your payment method in your account settings.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default HelpSection;
