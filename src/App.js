import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';
import LogRocket from 'logrocket';
LogRocket.init('5i2sox/chat-app');

const projectID = '7ce35b9e-9e14-4bf7-b4e1-b8baf48b659f';
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()
	  }
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
