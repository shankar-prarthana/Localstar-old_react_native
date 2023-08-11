import { createStackNavigator  } from 'react-navigation';
import Home from './Home';
import Login from './Login'
import SocialMedia from './SocialMedia';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import Business from './Business';
import Campaign from './Campaign';
import Services from './Services';
import Influcencers from './Influcencers';

const Navigator = createStackNavigator({
    home: { screen: Home },
    login: { screen: Login },
    socialMedia: { screen: SocialMedia },
    signUp: { screen: SignUp },
    forgotPassword: { screen: ForgotPassword },
    business: { screen: Business },
    campaign: { screen: Campaign },
    services: { screen: Services },
    influcencers: { screen: Influcencers }
});
