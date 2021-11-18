import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import './App.css';
import LogRocket from 'logrocket';
LogRocket.init('5i2sox/chat-app');

const projectID = '889e8a88-ce27-4629-8051-3f85c29181e1';
const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  
  const showNotification = (message) => {
    let granted = false;
		if (Notification.permission === 'granted') {
			granted = true;
		} else if (Notification.permission !== 'denied') {
			let permission = Notification.requestPermission();
			granted = permission === 'granted' ? true : false;
		}
  if (granted) {
		// create a new notification
		const notification = new Notification('New Message', {
			body: `${message.text} Click To view More or Reply`,
			icon: 'https://stem-club-chat.netlify.app/favicon.ico'
		});
		// close the notification after 10 seconds
		setTimeout(() => {
			notification.close();
		}, 10 * 1000);

		// navigate to a URL when clicked
		notification.addEventListener('click', () => {

			window.open('https://stem-club-chat.netlify.app/', '_blank');
		});
	}
}

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      onNewMessage={(message) => showNotification(message).then(console.log).then(new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play())
      }
    />
    
  );
};

export default App;
