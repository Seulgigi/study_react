// index.js
// This is the main entry point of our application
import React from 'react';
import ReactDOM from 'react-dom';

import Pages from '/pages';
import GlobalStyle from './components/GlobalStyle';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// 클라이언트 연결 - 그래프QL 쿼리와 뮤테이션을 애플리케이션에 통합 가능

const uri = process.env.API_URI;
const cache = new InMemoryCache();

const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools: true
})

const App = () => {
    return(
        <ApolloProvider client={client}>
            <Pages />
            <GlobalStyle />
        </ApolloProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));