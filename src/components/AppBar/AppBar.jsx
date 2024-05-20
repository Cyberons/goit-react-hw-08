import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from '../AppBar/AppBar.module.css'

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <header className={css.header}>
            <Navigation></Navigation>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
  
}