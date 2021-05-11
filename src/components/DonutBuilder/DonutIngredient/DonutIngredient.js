import red from '../../../img/red.svg'
import blue from '../../../img/blue.svg'
import brown from '../../../img/brown.svg'
import black from '../../../img/black.svg'
import pink from '../../../img/pink.svg'
import violet from '../../../img/violet.svg'


const DonutIngredient = ({type}) => {
    const types = {
        red: {
          backgroundImage: `url(${red}) `,
          width: "60px",
          height: "60px",
        },
        blue: {
          backgroundImage: `url(${blue})`,
          width: "60px",
          height: "60px"
        },
        black: {
          backgroundImage: `url(${black})`,
          width: "60px",
          height: "60px",
          backgroundSize: "cover"
        },
        brown: {
          backgroundImage: `url(${brown})`,
          backgroundSize: "cover",
          width: "60px",
          height: "60px"
        },
        violet: {
          backgroundImage: `url(${violet})`,
          width: "60px",
          height: "60px"
        },
        pink: {
          backgroundImage: `url(${pink})`,
          backgroundSize: "cover",
          width: "60px",
          height: "60px"
        },
    
    
      }
    return ( 
        <div style={types[type]}></div>
     );
}
 
export default DonutIngredient;