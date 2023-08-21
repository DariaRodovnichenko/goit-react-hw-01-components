import { FriendsList } from './FriendsList/FriendsList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../user.json';
import data from '../data.json';
import friendList from '../friends.json';
import transactionHistory from '../transactions.json';
import { MainContainer } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <MainContainer>
      <Profile user={user} />
      <Statistics stats={data} />
      <FriendsList friends={friendList} />
      <TransactionHistory transactions={transactionHistory} />
      <GlobalStyle />
    </MainContainer>
  );
};
