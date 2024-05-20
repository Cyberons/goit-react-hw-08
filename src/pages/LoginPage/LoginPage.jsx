import LoginForm from "../../components/LoginForm/LoginForm";
import css from '../LoginPage/LoginPage.module.css'

export default function LoginPage() {
  return (
    <div className={css.container}>
<h2 className={css.title}>Please fill out this form to login.</h2>
      <LoginForm></LoginForm>
    </div>
      
  )
}