import React from 'react';
import './App.css';


const chris = {
  name: 'Chris on Code',
  location: 'Las Vegas',
  foodType: 'Everything',
  age: 28,
  likes: 'Coding into the wee hours of the morning',
  twitterUsername: 'chrisoncode',
  avatar:
    'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
};


const User = ({ user }) => {
  return (
    <main className="user">
      <img src={user.avatar} alt={user.name} />
      <h1>{user.name}</h1>
      <p><strong>Location</strong>{user.location}</p>
      <p><strong>Eats</strong>{user.foodType}</p>
      <p><strong>Age</strong>{user.age}</p>
      <p><strong>Likes</strong>{user.likes}</p>
      <p><strong>Twitter</strong><a href={`https://twitter.com/${user.twitterUsername}`}>@{user.twitterUsername}</a></p>
    </main>
  )
}


const App = () => {
    return <User user={chris}/>
}

export default App;
