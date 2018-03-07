//Haven't tested any of this but it should be legit
import React from 'react';

import ListingItemHome from './ListingitemHome/ListingItemHome';

import classes from '../Listing/Listing.css';

const listingHome = (props)=> {

   

    const listingItemsHome = (
        props.listing.map(item => (
            <ListingItemHome
                key={item.itemKey}
                bidcount={item.bidcount}
                img={item.imageURL}
                name={item.itemName}
                desc={item.desc}
                category={item.category}
                itemKey={item.itemKey}
                owner={item.ownerUser}
                zipCode={item.location}
                // clicked={() => this.itemClicked(item.id)}
            />
        ))
    )

    return (
        <div className={classes.ListingHome}>
            {listingItemsHome}
        </div>

    )
}

export default listingHome;
