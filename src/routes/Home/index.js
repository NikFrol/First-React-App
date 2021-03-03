import Header from '../../components/Header/header';
import Layout from '../../components/Layout/layout';
import bg from '../../assets/bg3.jpg';
import PokemonCard from '../../components/PokemonCardHome/PokemonCardHome';
import POKEMONS from '../../components/Pokemons/Pokemons.json';

import s from './style.module.css';



const HomePage = ({ onChangePage }) => {

  const handleClickButton = (page) => {
    onChangePage && onChangePage(page);
  }

  return (
    <>
      <Header
        title='Pokemon Advanced'
        descr='Collection card Game'
        onClickButton={handleClickButton} />

      <Layout id='01' title='Game Rules' descr="Let's play!" urlBg={bg}>
        In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
        Each player has five cards in a hand and the aim is to capture the opponent's cards by turning
        them into the player's own color of red or blue.
        To win, a majority of the total ten cards played (including the one card that is not placed on the board)
        must be of the player's card color.
        To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the
        sides where the two cards touch will be compared.
        If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color.
        If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
   </Layout>
      <Layout id='02' title='Cards' descr='Some cards'>
        <div className={s.flex}>
          {
            POKEMONS.map((item) => <PokemonCard key={item.id}
              type={item.type} img={item.img} name={item.name} id={item.id} values={item.values} />)
          }
        </div>
      </Layout>

    </>
  );
}

export default HomePage;
