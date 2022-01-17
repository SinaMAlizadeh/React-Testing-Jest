import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Follower } from '../../Model/Follower';
function Followers() {
    const [followers , setFollowers] = useState<Array<Follower>>([]); 
    useEffect(() => {   
        fetchFollowers();
    },[])
  const fetchFollowers = async () => {
         const {data} = await axios.get("https://randomuser.me/api/?results=5")    
        setFollowers(data.results);
  }
    return (
        <div>          
            {
            followers?.map((follower , index) => {
            return (
             <div key={index} data-testid={`follower-item-${index}`}>
                  <img src={follower.picture.large} />
                  <span >
                  {follower.name.first} {follower.name.last}
                  </span>
            </div>) 
               }) 
            }
        </div> 
    );
}

export default Followers;