import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';
import LogRocket from 'logrocket';
LogRocket.init('5i2sox/chat-app');

const projectID = '889e8a88-ce27-4629-8051-3f85c29181e1';
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      onNewMessage={(message) => fetch('https://events.sendpulse.com/events/id/e323256cfeb643398a9d06b613f2b1ce/7873933', {
        method: 'POST',
        body: JSON.stringify(message)
      }).then(response => response.json()).then(console.log).then(new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play())
      }
    />
    
  );
};

// infinite scroll, logout, more customizations...

export default App;
