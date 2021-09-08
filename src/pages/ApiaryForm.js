import React, {useState} from 'react';
// import React, {useState, useEffect, useMemo, useCallback} from 'react';
import NavBar from '../components/Navbar';

function ApiaryForm() { 
	const [text, setText] = useState('');

  return (
    <div className="App">
      <NavBar/>
			<p>This is Apiary Form Page</p>
			{/* <input type="text" value={text} onChange={handleText} />
      <button onClick={handleSearch}>Search</button> */}

    </div>
  );
}

export default ApiaryForm;