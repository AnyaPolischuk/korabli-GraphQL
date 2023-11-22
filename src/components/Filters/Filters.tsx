import React, { useMemo, useState, useEffect, FC } from "react";
import { useQuery } from '@apollo/client';
import { ALL_SHIPS } from '../../apollo/korabli';
import { IShips } from '../../types/shipType';

interface IFilters {
  nation: string,
  classType: string,
  levelFilter: string,
  setNation: (value: string) => void,
  setClassType: (value: string) => void,
  setLevelFilter: (value: string) => void
}

export const Filters: React.FC<IFilters> = ({
  nation,
  classType,
  levelFilter,
  setNation,
  setClassType,
  setLevelFilter
}) => {
  const { loading, error, data } = useQuery(ALL_SHIPS);

  const nationList = useMemo(() => {
    let nationList: string[] = [];

    data.vehicles.forEach((ship: IShips) => nationList.push(ship.nation.title));
    nationList = Array.from(new Set(nationList));

    return nationList

  }, [data]);

  const classList = useMemo(() => {
    let classList: string[] = [];

    data.vehicles.forEach((ship: IShips) => classList.push(ship.type.title));
    classList = Array.from(new Set(classList));

    return classList

  }, [data]);

  const handleNations = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setNation(e.target.value);
  }

  const handleClassType = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setClassType(e.target.value);
  }

  const handleLevelFilter = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setLevelFilter(e.target.value);
  }

  return (
    <>
      <select value={nation} onChange={handleNations}>
      <option value="all-nations">All nations</option>
        {nationList.length && (
          nationList.map((nation: string, index: number) => (
            <option key={index} value={nation}>{nation}</option>
          ))
        )}
      </select>

      <select value={classType} onChange={handleClassType}>
      <option value="all-classes">All classes</option>
        {classList.length && (
          classList.map((classType: string, index: number) => (
            <option key={index} value={classType}>{classType}</option>
          ))
        )}
      </select>

      <select value={levelFilter} onChange={handleLevelFilter}>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </>
  )
}