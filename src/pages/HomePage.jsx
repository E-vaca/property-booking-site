import { useState } from 'react';

import { listings as staticListings } from '@/api/data/listings';
import ListingList from '@/components/ListingList';

const HomePage = () => {
    const [listings, setListings] = useState(staticListings)

    return (
    <div className = 'containter py-4'>
        <ListingList listings = {listings} />
    </div>
    )
}

export default HomePage;