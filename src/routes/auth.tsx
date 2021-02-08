import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const LoginPage = React.lazy(() => import('../pages/Auth/Login'));

class AuthRoutes extends Component {
    render() {
        return (
            <Suspense fallback={<h1>Carregando</h1>}>
                <Switch>
                    <Route path="/login" exact component={LoginPage} />
                    <Route exact path="/register" component={() => (<h1>Aqui</h1>)} />
                    <Route component={() => <h1>Page not found!</h1>} />
                </Switch>
            </Suspense >
        )
    }
}

export default AuthRoutes;