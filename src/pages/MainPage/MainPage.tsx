import React, { useMemo, useState, useEffect, FC } from "react";
import { useQuery } from '@apollo/client';
import { ALL_SHIPS } from '../../apollo/korabli';
import { ShipLittleCard } from '../../components/ShipLittleCard/ShipLittleCard';
import { IShips } from '../../types/shipType';

import classes from './MainPage.module.css';
import { Filters } from '../../components/Filters/Filters';


export const MainPage = () => {
  const { loading, error, data } = useQuery(ALL_SHIPS);
  const [nation, setNation] = useState('all-nations');
  const [classType, setClassType] = useState('all-classes');
  const [levelFilter, setLevelFilter] = useState('ascending');

  if (loading) {
    return <h2>loading</h2>
  }

  if (error) {
    return <h2>error</h2>
  }

  return (
    <>
    <Filters 
      nation={nation}
      classType={classType}
      levelFilter={levelFilter}
      setNation={setNation}
      setClassType={setClassType}
      setLevelFilter={setLevelFilter}
      
     />
    <div className={classes.shipsContainer}>
      {data.vehicles && (
          data.vehicles
          .filter((ship: IShips, index: number, shipsArray: IShips[]) => {
            if (nation === 'all-nations') return shipsArray;
            return ship.nation.title === nation;
          })
          .filter((ship: IShips, index: number, shipsArray: IShips[]) => {
            if (classType === 'all-classes') return shipsArray;
            return ship.type.title === classType;
          })
          .sort((firstShip: IShips, secondShip: IShips) => {
            if (levelFilter === 'ascending') {
              return firstShip.level - secondShip.level;
            }
            if (levelFilter === 'descending') {
              return secondShip.level - firstShip.level;
            }
          })
          .map((ship: IShips)=> (
            <ShipLittleCard 
              key={ship.id} 
              id={ship.id} 
              title={ship.title} 
              type={ship.type.title}
              nation={ship.nation.title}
              level={ship.level}
              description={ship.description}
              image={ship.icons.medium}
              />
          ))
        )}
    </div>
    </>
  )
}