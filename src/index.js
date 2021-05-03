import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import 'scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import ReduxToastr from 'react-redux-toastr';
import './common/i18n/i18n';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)

ReactDOM.render(
  <Provider store={store()}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    <ReduxToastr timeOut={3000} newestOnTop={false} preventDuplicates
      position="top-right" transitionIn="fadeIn" transitionOut="fadeOut"
      progressBar closeOnToastrClick={false} />
    {/* </React.StrictMode>, */}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
