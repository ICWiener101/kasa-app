import CardContainer from './../../components/CardContainer/index';
import Header from './../../components/Header/index';
import headerBackground from '../../assets/header-background.png';

function HomePage() {
      return (
            <>
                  <Header image={headerBackground} />
                  <CardContainer />
            </>
      );
}

export default HomePage;
