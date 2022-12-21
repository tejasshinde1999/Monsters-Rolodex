import { Monster } from '../../App';
// Card Components
import './card.styles.css';
// Monsters  Name's ID's and Mail's

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;

  return (
    <div className='card-container'>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`} // monster's in google.com
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
