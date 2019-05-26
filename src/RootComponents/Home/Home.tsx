import React from 'react';
import './home.scss';
import Buttons from '../../components/Home/Buttons';
import HeroLogo from '../../components/Home/HeroLogo';
import HeroTitle from '../../components/Home/HeroTitle';
import axios from 'axios';

export const Home: React.SFC = () => {
  var msgArr = new Array();

  axios({
    url: 'http://localhost:4000/graphql',
    method: 'post',
    data: {
      query: `
        query {
          users {
            id
            name
            email
          }
        }
        `
    }
  })
  .then(({data}) => data.data)
  .then(({users}) => {
    console.log(users)
  }).catch((error) => {
    console.error(error);
  });

  msgArr[0] = "Hungry?";
  msgArr[1] = "Famished?";
  msgArr[2] = "You a starvin marvin?";

  const message = msgArr[Math.floor(Math.random()*msgArr.length)];

  return (
    <div>
      <HeroLogo />
      <HeroTitle />
      <Buttons />
    </div>
  )
};

export default Home;
