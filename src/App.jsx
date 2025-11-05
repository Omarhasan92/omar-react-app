import './App.css'
import { Tiriye } from './component/counter';
import Clicker from './component/EventHandling';
import Greeting from './component/Greeting';
import Header from './component/Header'
import NameInput from './component/Input.jsx';
import ShowDetails from './component/Notification.jsx';
import ThemeToggle from './component/Theme';
import Welcome from './component/WelcomeMassage.jsx';

function App() {
   return (
     <>
       <NameInput/>
       <Clicker/>
       <ThemeToggle />
       <Greeting name="Omar" lastname="Hasan" />
       <Header />
       <Greeting />
       <Tiriye />
       <Welcome/>
       <ShowDetails/>
     </>
   );
}

export default App
