import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Main from './pages/main';
// import Admin from './admin/main';

import Loader from './components/loader';

const App = () => {
    const Admin = lazy(() => import('./admin/main'));
    const Main = lazy(() => import('./pages/main'));

  return (
    <div>
            <BrowserRouter>
                <Switch>
                    <Suspense fallback={<Loader />}>
                        <Route path="/admin" component={Admin} exact/>
                        <Route path="/" component={Main}/>
                    </Suspense>
                </Switch>
            </BrowserRouter>
    </div>
  );
}

export default App;