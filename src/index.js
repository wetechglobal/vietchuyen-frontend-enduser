import React from 'react';
import ReactDOM from 'react-dom';
import 'scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import ReduxToastr from 'react-redux-toastr';
import './common/i18n/i18n';

ReactDOM.render(
  <Provider store={store()}>
    {/* <React.StrictMode> */}
    <App />
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
