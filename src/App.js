import { Main } from './screens';
import './App.css';
import { ChatProvider } from './contexts/context.chat';

function App() {
  return (
    <ChatProvider>
      <Main />
    </ChatProvider>
  );
}

export default App;
