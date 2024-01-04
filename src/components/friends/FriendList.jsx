import propTypes from 'prop-types';
import FriendListItem from '../friends/FriendListItem';
import s from '../friends/friendList.module.css';

function FriendList ({friends}) {
    return (
        <ul className={s.friendList}>
            {friends.map(item => (
                <FriendListItem
                 key={item.id}
                 avatar={item.avatar} 
                 name={item.name}
                 isOnline={item.isOnline}
                />
            ))}
           </ul>
    )
}

export default FriendList;

FriendList.propTypes= {
    friends: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            avatar: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            isOnline: propTypes.bool.isRequired
        }).isRequired,
    ).isRequired

}