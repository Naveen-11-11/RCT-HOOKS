
import Callback from './Components /CALLBACKHOOK/Callback';
import Context1 from './Components /CONTEXTHOOK/Context 1';
import Custom from './Components /CUSTOMHOOK/Custom';
import Home from './Components /CUSTOMHOOK/Home';
import Effect from './Components /Effect';
import Memo from './Components /Memo';
import Reducer from './Components /Reducer';
import Ref from './Components /Ref';
import State from './Components /State';

function App() {
  return (
    <div className="App">
      <h1>HOOKS</h1>
      <State/><br/><br/><br/><br/><br/><br/>
      <Effect/><br/><br/><br/><br/><br/><br/>
      <Context1/><br/><br/><br/><br/><br/><br/>
      <Ref/><br/><br/><br/><br/><br/><br/>
      <Reducer/><br/><br/><br/><br/><br/><br/>
      <Memo/><br/><br/><br/><br/><br/><br/>
      <Callback/><br/><br/><br/><br/><br/><br/>
      <Custom/><br/><br/><br/><br/><br/><br/>
      <Home/>
    </div>
  );
}

export default App;
