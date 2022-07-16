import '../style/Location.css'
import { appartement } from '../data/data.js'
import LocationCard from './Location-card';


function Location() {

    return (
  
        <article className='location'>
            
            {appartement.map(({id, title, cover}) => (
                <LocationCard
                key={id}
                cover={cover}
                title={title}
            />
            ))}
   
		</article>
      
    );
  }
  
  export default Location;