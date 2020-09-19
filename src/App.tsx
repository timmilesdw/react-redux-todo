import React from 'react'
import Layout from 'antd/lib/layout/layout'

import { Router } from "@reach/router"
import { Navigation } from './components/Navigation'

import { routes } from './router'

const App = () => {
    return (
        <Layout style={{background: 'none'}}>
            <Navigation />
            <Router>
                { routes.map(( Route, i ) => <Route.component key={i} path={Route.path} />) }
            </Router>
        </Layout>
    )
}

export default App
