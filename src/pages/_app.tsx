import React from 'react';
import '../styles/globals.css';
import './_app.css';
import Layout from '../components/Layout';
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
import { createUploadLink } from 'apollo-upload-client';

import { AUTH_TOKEN } from '../components/constants';
import config from '../config';

Bugsnag.start({
  apiKey: config.BUGSNAG_KEY,
  plugins: [new BugsnagPluginReact()],
});
const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React);
//@ts-ignore
const httpLink = createUploadLink({
  uri: 'https://hightable-gateway.herokuapp.com/',
});

const authLink = setContext((_, { headers }) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem(AUTH_TOKEN);
    return {
      headers: {
        ...headers,
        authorization: token ? `${token}` : '',
      },
    };
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  uri: 'https://hightable-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
          <ApolloProvider client={client}>
            <Layout pageMeta={{}}>
              <Component {...pageProps} />
            </Layout>
          </ApolloProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
