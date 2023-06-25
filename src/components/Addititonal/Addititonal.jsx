import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Addititonal.module.css';

const AdditionalItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews' },
];

const Additional = ({ location }) => {
  return (
    <div>
      <h4 className={css.title}>Addititonal information</h4>
      <ul>
        {AdditionalItems.map(({ href, text }) => (
          <li className={css.item} key={href}>
            <Link to={href} state={{ from: location }} className={css.link}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

AdditionalItems.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    hash: PropTypes.string,
    state: PropTypes.bool,
  }).isRequired,
};

export default Additional;
