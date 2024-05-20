import css from "../HomePage/HomePage.module.css";


export default function HomePage() {
  
 
  return (
    <div className={css.homeCont}>
      <h1 className={css.title}>Welcome to PhoneBook!</h1>
          <p className={css.titleDesc}>
              PhoneBook is a web application designed to store user contact information.
              The application provides registration and authorization,
              providing secure access to each user personal address book.
              PhoneBook simplifies contact management by allowing you to store and
              organize information about friends, family, colleagues and other important contacts.
      </p>
      <ul className={css.listDesc}>
        <h3 >Main functions:</h3>
        <li>
          <strong>1. User registration:</strong>
          <p> - Create a new account using email and password.</p>
          <p>- Email confirmation for security.</p>
        </li>
        <li>
          <strong>2. User login:</strong>
          <p>- Authorization by email and password.</p>
        </li>
        <li>
          <strong>3. Contact management:</strong>
          <p>- Adding a new contact with name, phone number.</p>
          <p>- Deleting contacts that are no longer needed.</p>
        </li>
        <li>
          <strong>4. Search and filter contacts:</strong>
          <p>- Quick search for contacts by name or phone number.</p>
        </li>
        <li>
          <strong>5. Security and privacy:</strong>
          <p>- Encrypted data storage.</p>
          <p>- Using SSL/TLS to protect data during transmission.</p>
        </li>
        <li>
          <strong>6. User interface:</strong>
          <p>
            - Intuitive and user-friendly interface for easy contact management.
          </p>
        </li>
      </ul>
    </div>
  );
}