import Profile from './components/profile/Profile';
import user from './Json/user.json';
import Statistics from './components/statistics/Statistics';
import statistics from './Json/data.json';
import FriendList from './components/friends/FriendList';
import friends from './Json/friends.json';
import TransactionHistory from './components/transactions/TransactionHistory';
import transactions from './Json/transactions.json';


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
<FriendList friends={friends} />
<TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;


