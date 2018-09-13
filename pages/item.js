import React from 'react';
import { withRouter } from 'next/router'
import Link from 'next/link';
import axios from 'axios';
import styles from './item.scss';

const Item = ({ item }) => <div className={ styles.itemContainer }>
  <div className={ styles.item }>
    <h3>{ item.title.rendered } </h3>
    <p> { item.acf.description } </p>
    <Link href='/'>
      <a>
        Home
      </a>
    </Link>
  </div>
</div>

Item.getInitialProps = async ({ query: { toyOrPet, id } }) => {
  const { data: item } = await axios.get(`http://46.101.251.228/nostalgia-1/index.php/wp-json/wp/v2/${toyOrPet}/${id}`);

  return { item };
}


export default withRouter(Item);
