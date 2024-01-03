import Profile from './components/profile/Profile';
import user from './Json/user.json';

function App () {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}    
        />  
    </div>
  );
};

export default App;


