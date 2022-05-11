import Login from "./MyComponents/Login";
import Guest from "./MyComponents/Guest";
function App() {
  return (
    <div className="App">
     <center>
       <h1>Welcome To React App</h1><br></br>

        <button variant="Primary" size="lg" onClick={Login}>
          Login
        </button><br></br><br></br>
        <button variant="secondary" size="lg" onClick={Guest}>
          Guest
        </button>
     </center>
    </div>
  );
}

export default App;
