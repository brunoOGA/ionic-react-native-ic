import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import NewPragas from '../pages/Pragas/new';
import IndexPragas from '../pages/Pragas/index';
import AlterPragas from '../pages/Pragas/alter';
import InfoPragas from '../pages/Pragas/info';

import NewInimigos from '../pages/Inimigos/new';
import IndexInimigos from '../pages/Inimigos/index';
import AlterInimigos from '../pages/Inimigos/alter';
import InfoInimigos from '../pages/Inimigos/info';

import NewDoencas from '../pages/Doencas/new';
import IndexDoencas from '../pages/Doencas/index';
import AlterDoencas from '../pages/Doencas/alter';
import InfoDoencas from '../pages/Doencas/info';

import NewAnotacao from '../pages/Anotacao/new';
import IndexAnotacao from '../pages/Anotacao/index';
import InfoAnotacao from '../pages/Anotacao/info';
import AlterAnotacao from '../pages/Anotacao/alter';

import Outros from '../pages/telas/outros';
import UnidadeDeReferencia from '../pages/telas/unidadeDeReferencia';
import Pesquisa from '../pages/telas/pesquisa';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      animationEnabled: false,
      cardStyle: {backgroundColor: 'white'},
    }}>
    <App.Screen name="UnidadeDeReferencia" component={UnidadeDeReferencia} />
    <App.Screen name="Outros" component={Outros} />
    <App.Screen name="Pesquisa" component={Pesquisa} />

    <App.Screen name="NewPragas" component={NewPragas} />
    <App.Screen name="IndexPragas" component={IndexPragas} />
    <App.Screen name="AlterPragas" component={AlterPragas} />
    <App.Screen name="InfoPragas" component={InfoPragas} />

    <App.Screen name="NewInimigos" component={NewInimigos} />
    <App.Screen name="IndexInimigos" component={IndexInimigos} />
    <App.Screen name="AlterInimigos" component={AlterInimigos} />
    <App.Screen name="InfoInimigos" component={InfoInimigos} />

    <App.Screen name="NewDoencas" component={NewDoencas} />
    <App.Screen name="IndexDoencas" component={IndexDoencas} />
    <App.Screen name="AlterDoencas" component={AlterDoencas} />
    <App.Screen name="InfoDoencas" component={InfoDoencas} />

    <App.Screen name="NewAnotacao" component={NewAnotacao} />
    <App.Screen name="IndexAnotacao" component={IndexAnotacao} />
    <App.Screen name="InfoAnotacao" component={InfoAnotacao} />
    <App.Screen name="AlterAnotacao" component={AlterAnotacao} />
  </App.Navigator>
);

export default AppRoutes;
