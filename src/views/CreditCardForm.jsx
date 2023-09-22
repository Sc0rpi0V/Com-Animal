import React from 'react';
import { Form, Field } from 'react-final-form';
import Styles from '../components/CardPaiment/Styles';
import Card from '../components/CardPaiment/Card';
import {
  formatNumCarte,
  formatCVC,
  formatDateExp
} from '../components/CardPaiment/cardUtils'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const PaiementForm = () => {
  return (
  <Styles>
    <div>
      <h1> Formulaire de Paiement </h1>
      <Form 
        onSubmit={onSubmit}
        render={({
          handleSubmit,
          form,
          envoie,
          pristine,
          values,
          active
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Card 
                number={values.number || ''}
                name={values.name || ''}
                expiry={values.expiry || ''}
                cvc={values.cvc || ''}
                focused={active}
              />
              <div>
                <Field 
                  name="number"
                  component="input"
                  type="text"
                  pattern="[\d| ]{16,22}"
                  placeholder="Numéro Carte"
                  format={formatNumCarte}
                />
              </div>
              <div>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <Field
                name="expiry"
                component="input"
                type="text"
                pattern="\d\d/\d\d"
                placeholder="Valid Thru"
                format={formatDateExp}
              />
              <Field
                name="cvc"
                component="input"
                type="text"
                pattern="\d{3,4}"
                placeholder="CVC"
                format={formatCVC}
              />
            </div>
            <div className="buttons">
              <button type="submit" disabled={envoie}>
                Valider
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={envoie || pristine}
              > Annuler
              </button>
            </div>
            <h2>Valeur</h2>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )
        }}
        />
    </div>
  </Styles>
  );
};

export default PaiementForm;