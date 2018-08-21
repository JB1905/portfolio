import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Delay from 'react-delay';

import { Title } from '../../components/Title';
import { CONTACT } from '../../content/contact';

import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Title value="Kontakt" />

        <div className="contact">
          <Delay wait={520}>
            <div>
              <h1>
                <FontAwesomeIcon icon="envelope" />
              </h1>

              <div>
                <h3>E-mail:</h3>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </div>
          </Delay>

          <Delay wait={760}>
            <div>
              <h1>
                <FontAwesomeIcon icon="phone" />
              </h1>

              <div>
                <h3>Telefon:</h3>
                <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
              </div>
            </div>
          </Delay>
        </div>
      </React.Fragment>
    );
  }
}
