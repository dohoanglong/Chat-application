import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed.jsx";
import LoginForm from "./components/LoginForm";

import "./App.css";

const projectID = "67c54b93-59ba-429f-90b2-1daba09def99";

const App = () => {
	const username= localStorage.getItem("username");
  if (!username) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      userName={username}
      userSecret="123456"
      projectID={projectID}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
