/* import Login from "./pages/login";
 */ import Header from "./components/header";
import HeadLine from "./components/headLine";
function App() {
  return (
    <div className="App">
      <Header />
      <HeadLine
        title="I am a title"
        to="https://material-ui.com/pt/components/grid/"
      />
    </div>
  );
}

export default App;
