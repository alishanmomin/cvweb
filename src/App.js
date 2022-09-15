import Scrollspy from 'react-scrollspy'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/app.scss'
import "./assets/fontawesome/css/all.css";
import Home from './pages/home';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App()
{
    return (
        <div>
            <h2>Hello</h2>
            <MessengerCustomerChat
                pageId="106249202238135"
                appId="604291807829619"
            />,
        </div>
        // <Home />
    );
}

export default App;