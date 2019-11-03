import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { UsersProvider } from './Context';
import Users from './components/Users/Users';


const App = () => {

    return (
		<div className="main">
			<div className="wrapper">
				<UsersProvider>
					<BrowserRouter>
						<Route exact path="/users" component={Users} />
					</BrowserRouter>
				</UsersProvider>
			</div>
		</div>
    );
}

export default App;
