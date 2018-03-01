import React, { Component } from 'react';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import classes from './ItemDetails.css';
import WinningBidButton from './WinningBidButton/WinningBidButton';

class ItemDetails extends Component {
    //TODO: Get item from DB using props.itemID
    state = {
        item: {}

    }

    isOwner(owner){
      console.log("isowner");
      console.log(owner);
      console.log(this.props.userId);
      if (this.props.userId === owner){
        return true;
      }
      return false;
    }

    setWinner(){
      console.log('winner!');
      //make code later when other items implemented.
      //make Winner
      //remove items from invy
    }
    componentWillMount () {
        console.log('item');
        const query = new URLSearchParams(this.props.location.search);
        const item = {};
        for (let param of query.entries()){

            item[param[0]] = param[1];
        }

        this.setState({item: item});


    }

    // //Dummy Item

    // Once this is implemented using Props, need to change everything that gets info from Items
    render() {
        const item = {
            title: 'DVD Collection',
            desc: 'This is my extensive DVD collection. I have a multitude of genres. They are very rare. wow.',
            img: 'https://i.ytimg.com/vi/0S-gteTLcko/maxresdefault.jpg',
            zipCode: 92004,
            owner: 'PennyMonster38'
        }
        console.log('this.state.item');
        console.log(this.state.item);

        return (

            <div className = {classes.ItemDetails}>
                <div className = {classes.row}>
                    <div className = {classes.col1of2}>

                        <h1 className={classes.title}>{this.state.item.name}</h1>
                        <img src={this.state.item.img} className={classes.image}/>
                        <div className={classes.ownerDetails}>
                            {/* this is a placeholder for now, it should be the userIcon */}
                            <div className={classes.userIcon}></div>
                            <p className = {classes.owner}>{item.owner}</p>
                            {/* <p className = {classes.owner}>[rating]</p> */}
                        </div>

                    </div>

                    <div className = {classes.col1of2}>
                        {/*pass in item.zipCode as props to the map*/}
                        MAP
                    </div>

                </div>

                <div className = {classes.row}>
                    <h3>Item Description</h3>
                    <div className = {classes.description}>
                        <p className = {classes.descText}>{this.state.item.desc}</p>
                  { this.isOwner(item.owner) ? <WinningBidButton onClick={this.setWinner}/> : null }
                    </div>

                </div>

            </div>
        );
    }



}

const mapStateToProps = state => {
    return {
        userId: state.userId
    }
}

export default connect(mapStateToProps) (ItemDetails);