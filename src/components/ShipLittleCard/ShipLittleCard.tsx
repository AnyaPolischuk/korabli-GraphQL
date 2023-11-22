import { IShips } from "../../types/shipType";
import classes from './ShipLittleCard.module.css';

interface IInfo {
  id: string,
  title: string,
  type: string,
  nation: string,
  level: number,
  description: string,
  image: string,
}

export const ShipLittleCard: React.FC<IInfo> = ({
  id,
  title,
  type,
  nation,
  level,
  description,
  image
  }) => {

  return (
    <>
      <div className={classes.cardContainer}>
        <h1>{title}</h1>
        <h2>{type}</h2>
        <h3>{nation}</h3>
        <h3>{level}</h3>
        <p>{description}</p>
        <img alt={title} src={image} />
      </div>
    </>
  )
}