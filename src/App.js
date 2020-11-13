import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bnb-gallery/dist/style.css'
import ReactGA from 'react-ga';
import "../node_modules/video-react/dist/video-react.css"
import "./App.css"

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutBlack from './layouts/LayoutBlack';

// Views 
import Home from './views/Home';
import Design from './views/Design';
import Visualization from './views/Visualization';
import Team from './views/Team';
import Contacts from './views/Contacts';
import GarageGomel from './views/projects/GarageGomel'
import HouseMinsk from './views/projects/HouseMinsk'
import FlatMinsk from './views/projects/FlatMinsk'
import FlatPob from './views/projects/FlatPob'
import FlatPob2 from './views/projects/FlatPob2'
import HouseGermany from './views/projects/HouseGermany'
import WGRooms from './views/projects/WGRooms'
import WGCorridors from './views/projects/WGCorridors'
import WGLounge from './views/projects/WGLounge'
import Door from './views/projects/Door'
import DoorInt from './views/projects/DoorInt'
import DoorRaz from './views/projects/DoorRaz'
import Bouffle from './views/projects/Bouffle'
import Ketchup from './views/projects/Ketchup'
import Honey from './views/projects/Honey'
import Beer from './views/projects/Beer'
import Windows from './views/projects/Windows'
import Hinges from './views/projects/Hinges'
import Handles from './views/projects/Handles'
import MattressesInt from './views/projects/MattressesInt'
import Mattresses from './views/projects/Mattresses'
import VodkaBlanka from './views/projects/VodkaBlanka'
import VodkaLumy from './views/projects/VodkaLumy'
import WindowsArchitecture from './views/projects/WindowsArchitecture'
import WoodHouse from './views/projects/WoodHouse'
import OfficeGarage from './views/projects/OfficeGarage'
import Oma from './views/projects/Oma'
import Storage from './views/projects/Storage'
import Mansard from './views/projects/Mansard'
import Mall from './views/projects/Mall'
import Kolyadzichi from './views/projects/Kolyadzichi'
import Pritytskogo from './views/projects/Pritytskogo'



// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

  let store = require('store')
  store.set('radio', 'interior-block')
const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/design" component={Design} layout={LayoutBlack}/>
          <AppRoute exact path="/visualization" component={Visualization} layout={LayoutBlack}/>
          <AppRoute exact path="/team" component={Team} layout={LayoutBlack}/>
          <AppRoute exact path="/contacts" component={Contacts} layout={LayoutBlack}/>
          <AppRoute exact path="/garageGomel" component={GarageGomel} layout={LayoutBlack}/>
          <AppRoute exact path="/houseMinsk" component={HouseMinsk} layout={LayoutBlack}/>
          <AppRoute exact path="/flatMinsk" component={FlatMinsk} layout={LayoutBlack}/>
          <AppRoute exact path="/flatPob" component={FlatPob} layout={LayoutBlack}/>
          <AppRoute exact path="/flatPob2" component={FlatPob2} layout={LayoutBlack}/>
          <AppRoute exact path="/houseGermany" component={HouseGermany} layout={LayoutBlack}/>
          <AppRoute exact path="/wg-rooms" component={WGRooms} layout={LayoutBlack}/>
          <AppRoute exact path="/wg-corridors" component={WGCorridors} layout={LayoutBlack}/>
          <AppRoute exact path="/wg-lounge" component={WGLounge} layout={LayoutBlack}/>
          <AppRoute exact path="/door" component={Door} layout={LayoutBlack}/>
          <AppRoute exact path="/door-int" component={DoorInt} layout={LayoutBlack}/>
          <AppRoute exact path="/door-raz" component={DoorRaz} layout={LayoutBlack}/>
          <AppRoute exact path="/bouffle" component={Bouffle} layout={LayoutBlack}/>
          <AppRoute exact path="/ketchup" component={Ketchup} layout={LayoutBlack}/>
          <AppRoute exact path="/honey" component={Honey} layout={LayoutBlack}/>
          <AppRoute exact path="/beer" component={Beer} layout={LayoutBlack}/>
          <AppRoute exact path="/windows" component={Windows} layout={LayoutBlack}/>
          <AppRoute exact path="/hinges" component={Hinges} layout={LayoutBlack}/>
          <AppRoute exact path="/handles" component={Handles} layout={LayoutBlack}/>
          <AppRoute exact path="/mattresses-interior" component={MattressesInt} layout={LayoutBlack}/>
          <AppRoute exact path="/mattresses" component={Mattresses} layout={LayoutBlack}/>
          <AppRoute exact path="/vodka-blanka" component={VodkaBlanka} layout={LayoutBlack}/>
          <AppRoute exact path="/vodka-lumy" component={VodkaLumy} layout={LayoutBlack}/>
          <AppRoute exact path="/windows-architecture" component={WindowsArchitecture} layout={LayoutBlack}/>
          <AppRoute exact path="/wood-house" component={WoodHouse} layout={LayoutBlack}/>
          <AppRoute exact path="/office-garage" component={OfficeGarage} layout={LayoutBlack}/>
          <AppRoute exact path="/oma" component={Oma} layout={LayoutBlack}/>
          <AppRoute exact path="/storage" component={Storage} layout={LayoutBlack}/>
          <AppRoute exact path="/mansard" component={Mansard} layout={LayoutBlack}/>
          <AppRoute exact path="/mall" component={Mall} layout={LayoutBlack}/>
          <AppRoute exact path="/kolyadzichi" component={Kolyadzichi} layout={LayoutBlack}/>
          <AppRoute exact path="/pritytskogo" component={Pritytskogo} layout={LayoutBlack}/>
        </Switch>
      )} />
  );
}

export default App;