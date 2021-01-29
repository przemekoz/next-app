import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon?limit=20";

interface Props {
  pokeData: any[];
 }

const StaticSide = ( props: Props ) => {

  const { pokeData } = props;

  console.log( props )

  return pokeData.map( ( poke: any ) => (
    <div key={poke.name}>
      <img src={poke.imgUrl} alt={poke.name} />
      <p>{poke.name}</p>
      <hr />
    </div>
  ) );
};

export const getStaticProps = async () => {
  const response = await axios.get( url );

  const promises: any[] = [];
  response.data.results.forEach( ( result: any ) => {
    promises.push( axios.get( result.url ) );
  } );

  const responses = await Promise.all( promises );

  const pokeData = responses.map( item => {
    return {
      name: item.data.name,
      imgUrl: item.data.sprites.front_default,
    }
  } );

  return {
    props: {
      pokeData
    }
  }
}

export default StaticSide;