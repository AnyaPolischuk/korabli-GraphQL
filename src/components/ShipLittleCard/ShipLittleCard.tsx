import classes from './ShipLittleCard.module.css';

interface IInfo {
  id: string,
  title: string,
  type: string,
  nation: string,
  level: number,
  description: string,
  image: string,
  flagImage: string
}

export const ShipLittleCard: React.FC<IInfo> = ({
  id,
  title,
  type,
  nation,
  level,
  description,
  image,
  flagImage
  }) => {

  return (
    <>
        <div className={classes.cardsWrapper}>
          <div className={classes.cardHeader}>
            <div>
              <h2 className={classes.title}>{title}</h2>
              <h3 className={classes.shipType}>{type}</h3>
            </div>
            <div>
              <img alt={nation} src={flagImage} className={classes.flagImage} />
              <p className={classes.nation}>{nation}</p>
            </div>
          </div>
          
          <div>
            <p className={classes.description}>{description.split(' ').slice(0, 20).join(' ')}...</p>
            <button className={classes.button}>learn more</button>
          </div>
          <div className={classes.cardFooter}>
            <div>
              <img className={classes.shipImage} alt={title} src={image}></img>
            </div>
            <div className={classes.levelWrapper}>
              <p className={classes.level}>{level}</p>
              <h4 className={classes.levelText}>Level</h4>
            </div>
          </div>
        </div>
    </>
  )
}