import React from 'react';
import Link from 'next/link';
import Nav from '../components/nav';
import axios from 'axios';
import styles from './index.scss';

const Home = ({ pets, toys }) => (
  <div>
    <Nav />
    <div className={ styles.hero }>
      <div className={ styles.row }>
      {
        pets.map(pet =>
            <Link key={ pet.id } as={`/pets/${pet.id}`} href={{ pathname: '/item', query: { toyOrPet: 'pet', id: pet.id } }}>
              <a className={ styles.card }>
                <h3>{ pet.title.rendered }</h3>
                <p>{ pet.acf.description }</p>
              </a>
            </Link>)
      }
      </div>
      <div className={ styles.row }>
      {
        toys.map(toy =>
            <Link key={ toy.id } as={`/toys/${toy.id}`} href={{ pathname: '/item', query: { toyOrPet: 'toy', id: toy.id } }}>
              <a className={ styles.card }>
                <h3>{ toy.title.rendered }</h3>
                <p>{ toy.acf.description }</p>
              </a>
            </Link>)
      }
      </div>
    </div>
  </div>
)

Home.getInitialProps = async () => {
  const [{ data: toys }, { data: pets }] = await Promise.all([
    axios.get('http://46.101.251.228/nostalgia-1/index.php/wp-json/wp/v2/toy'),
    axios.get('http://46.101.251.228/nostalgia-1/index.php/wp-json/wp/v2/pet'),
  ]);

  return {
     toys,
     pets
   };
}


export default Home;
