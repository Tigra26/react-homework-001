import Profile from './components/profile/Profile';
import user from './Json/user.json';
import Statistics from './components/statistics/Statistics';
import statistics from './Json/data.json'


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

<Statistics title='Statistics' statistics={statistics}/>  

    </div>
  );
};

export default App;


