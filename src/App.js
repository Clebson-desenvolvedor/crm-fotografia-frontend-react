import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    return (
        <div className="App">
            <Aside />
            <div className="main-content">
                <Header />
                <Main />
            </div>
        </div>
    )
}

export default App;
