import "./App.css";
import Navbar from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";
import Dividers from "./components/dividers";
import Portfolio from "./components/portfolio";
import ParticlesBg from "particles-bg";

function App() {
	return (
		<>
			<div className="app">
				<Navbar />
				<Main />
				<Dividers />
				<About />
				<Dividers />
				<Portfolio />
			</div>
			<ParticlesBg color="#F6ECF1" num={3} type="circle" bg={{
				top: 0,
				position: "absolute",
				bottom: 0,
				zIndex: "-1",
				width: "100%",
				height: "150rem"
			}} />
            <ParticlesBg color="#E8F0EE" num={6} type="circle" bg={{
				top: 0,
				bottom: 0,
				position: "absolute",
				zIndex: "-1",
				width: "100%",
				height: "150rem"
			}} />
		</>
	);
}

export default App;
