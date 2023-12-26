import propTypes from 'prop-types';
import s from '../profile.module.css';

function Profile ({username, tag, location, avatar, stats}) {
  return (
  <div className={s.profile}>
  <div className={s.description}>
    <img className={s.avatar}
      src={avatar}
      alt={username}
    />
    <p className={s.name}>{username}</p>
    <p className={s.tag}>@{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={s.label}>Likes</span>
      <span class={s.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div> )
 
};

export default Profile;

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.shape ({
    followers: propTypes.string.isRequired,
    views: propTypes.string.isRequired,
    likes: propTypes.string.isRequired
  }).isRequired

};

