import React from 'react';
import Nav from "./Nav";
import PetProfileList from "./PetProfileList";
// import './Components/PetProfileList.css';

const props = [
	{
		_id: 'dog',
		pets: [
			{
				name: 'Rocky',
				breed: 'American pit bull cross',
				status: 'Neutered and vaccinated',
				gender: 'Female',
				yearsOld: 7,
				adopted: false,
			},
			{
				name: 'Juju',
				breed: 'American staff cross',
				status: 'Vaccindated, not neutered',
				gender: 'Male',
				yearsOld: 7,
				adopted: true,
			},
			{
				name: 'Rocky',
				breed: 'American pit bull cross',
				status: 'Neutered and vaccinated',
				gender: 'Female',
				yearsOld: 7,
				adopted: false,
			},
			{
				name: 'Juju',
				breed: 'American staff cross',
				status: 'Vaccindated, not neutered',
				gender: 'Male',
				yearsOld: 7,
				adopted: true,
			}
		]
	},
	{
		_id: 'cat',
		pets: [
			{
				name: 'Terry',
				breed: 'Domestic medium hair cross',
				status: 'Neutered, not vaccinated',
				gender: 'Male',
				yearsOld: 2,
				adopted: false,
			},
			{
				name: 'Chonker',
				breed: 'Main coone',
				status: 'Status unknown',
				gender: 'Female',
				yearsOld: 5,
				adopted: true,
			},
			{
				name: 'Terry',
				breed: 'Domestic medium hair cross',
				status: 'Neutered, not vaccinated',
				gender: 'Male',
				yearsOld: 2,
				adopted: false,
			},
			{
				name: 'Chonker',
				breed: 'Main coone',
				status: 'Status unknown',
				gender: 'Female',
				yearsOld: 5,
				adopted: true,
			}	
		]
	}
]

// console.log(props[0]);

function AdoptAPet() {
  return (
    <div >
      <Nav />
	  <main>
		<PetProfileList contents={props[0]} />
		<PetProfileList contents={props[1]} /> 
	  </main>
    </div>
  );
}

export default AdoptAPet;