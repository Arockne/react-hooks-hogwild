import React, { useState } from "react";
import Nav from "./Nav";
import HogForm from './HogForm'
import HogTiles from './HogTiles'

import hogs from "../porkers_data";


//BONUS: Implement Semantic Cards (Links to an external site.) for each hog

function App() {
  const [currentHogs, setCurrentHogs] = useState(hogs)
  
  function addHog(hog) {
		setCurrentHogs([ ...currentHogs, hog ])
	}

	return (
		<div className="App">
			<Nav />
			<HogForm addHog={addHog}/>
			<br />
			<HogTiles hogs={currentHogs} />
		</div>
	);
}

export default App;
