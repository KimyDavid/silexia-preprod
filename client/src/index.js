import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from './store'

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import admin_fr from "./translations/fr/admin.json";

import 'react-quill/dist/quill.snow.css';

require("./assets/scss/styles.scss");

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'fr',
  resources: {
    fr: {
        admin: admin_fr
    },
},
});

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);