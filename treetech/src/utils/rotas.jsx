import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../pages/Home';
import Equipamento from '../pages/Equipamento';
import Alarme from '../pages/Alarme';
import AlarmeAtivado from '../pages/AlarmeAtivado';

const Rotas = (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Equipamento' component={Equipamento} />
      <Route path='/Alarme' exact component={Alarme} />
      <Route path='/AlarmesAutuados' exact component={AlarmeAtivado} />
    </Switch>
  </Router>
)

export default Rotas;