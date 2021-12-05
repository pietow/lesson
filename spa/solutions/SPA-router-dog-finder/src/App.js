import { useParams } from 'react-router-dom';
import Dog from './Dog';
import whiskeyPic from './images/whiskey.jpg';
import hazelPic from './images/hazel.jpg';
import tubbyPic from './images/tubby.jpg';

import './App.css';

function App() {
  const dogsArr = [
    {
      name: 'whiskey',
      id: 0,
      image: whiskeyPic,
      age: 4,
      facts: [
        'Whiskey loves eating popcorn',
        'Whiskey is a terrible guard dog',
        'Whiskey wants to cuddle with you'
      ]
    },
    {
      name: 'hazel',
      id: 1,
      age: 0,
      image: hazelPic,
      facts: [
        'Hazel has a lot of energy',
        'Hazel is highly intelligent',
        'Hazel loves people more than dogs'
      ]
    },
    {
      name: 'tubby',
      id: 2,
      age: 4,
      image: tubbyPic,
      facts: [
        'Tubby is really stupid',
        'Tubby does not like walks',
        'Angelina hates Tubby'
      ]
    }
  ];
  let { name } = useParams();
   // { name: 'tubby' }  localhost:3000/tubby
   // const paramsObj = useParams();
   // let name = paramsObj.name;
  let currentDog;
    if (name) {
      currentDog = name;
    }
  return (
    <div>
      <h1>Hello.  We have Dogz.  Click on them for more info.</h1>
      {dogsArr.map(dog => (
        <Dog
          age={dog.age}
          currentDog={currentDog}
          facts={dog.facts}
          image={dog.image}
          key={dog.id}
          name={dog.name}
        />
      ))}
    </div>
  );
}

export default App;
