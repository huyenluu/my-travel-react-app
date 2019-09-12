import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import cinqueTerre from './cinque-terre.jpg';
import provence from './provence.jpg';
import amalfi from './amalfi.jpg';
import hoian from './hoian.jpg';
import krabi from './krabi.jpg';
import newYork from './new-york.jpg';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.background,
  },
  gridList: {
    width: 1500,
  },
  header: {
    textAlign: "center", 
    fontSize: 50,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    textTransform: 'capitalize',
    
  }
}));


const tileData = [
  {
    img: cinqueTerre,
    destination: 'Cinque Terre',
    country: 'Italy',
    distance: '200km',
  },
  {
    img: provence,
    destination: 'Provence',
    country: 'France',
    distance: '200km',
  },
  {
    img: newYork,
    destination: 'New York',
    country: 'USA',
    distance: '200km',
  },
  {
    img: amalfi,
    destination: 'Amalfi',
    country: 'Italy',
    distance: '200km',
  },
  {
    img: krabi,
    destination: 'Krabi',
    country: 'Thailand',
    distance: '200km',
  },
  {
    img: hoian,
    destination: 'Hoi An',
    country: 'Viet Nam',
    distance: '200km',
  },
 
]


export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={350} cols= {3} spacing = {10} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader color ='primary' component="h2" className={classes.header} > travel with me </ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img} className={classes.tile}>
            <img src={tile.img} alt={tile.destination} />
            <GridListTileBar
              title = {tile.destination}
              subtitle={
               <>
                 <div> Country: {tile.country}</div>
                 <div> Distance: {tile.distance}</div>
              </> 
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}