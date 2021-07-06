import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRobots } from './redux/actions/robotAction';


function App() {
  let dispatch = useDispatch();
  const { robots } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getRobots())
  }, []);


  return (
    <div className="App">
      <h1>Robot Market</h1>
      {robots && robots.length && robots.map((robot) => {
        return (
          <div>
            {robot.name}
            {robot.image}
            {robot.price}
            {robot.stock}
            {robot.material}
          </div>
        )
      })}
      {/*Add your code here*/}
    </div>
  );
}

export default App;
