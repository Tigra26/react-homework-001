import propTypes from 'prop-types';
import s from '../friends/friendListItem.module.css';

function FriendListItem ({avatar, name, isOnline}) {
    return (
        <li className={s.item}>
           <span className={isOnline ? s.online : s.offline}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
    isOnline: propTypes.bool.isRequired, 
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired
};