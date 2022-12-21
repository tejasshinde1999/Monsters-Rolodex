import { Monster } from '../../App';
// CardList components
import Card from '../card/card.component';
import './card-list.styles.css';

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => (
  <div className='card-list'>
    {monsters.map((monster) => { // All monsters name comes at a times.
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
