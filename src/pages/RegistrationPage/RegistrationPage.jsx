import RegisterForm from "../../components/RegistrationForm/RegistrationForm";
import css from '../RegistrationPage/RegistrationPage.module.css'

export default function RegistrationPage() {
  return (
      <div className={css.container}>
      <h2 className={css.title}>Please fill out this form to register.</h2>
      <RegisterForm></RegisterForm>
      </div>
  )
}