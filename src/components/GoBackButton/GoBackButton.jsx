import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import css from './GoBackButton.module.css';

const GoBackButton = ({ backLinkHref }) => {
  return (
    <div className={css.container}>
      <Link to={backLinkHref} className={css.link}>
        <BsArrowLeftShort size={20} />
        Go back
      </Link>
    </div>
  );
};

export default GoBackButton;
