import { FriendsList } from './FriendsList/FriendsList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friendList from '../data/friends.json';
import transactionHistory from '../data/transactions.json';
import { MainContainer } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <MainContainer>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friendList} />
      <TransactionHistory transactions={transactionHistory} />
      <GlobalStyle />
    </MainContainer>
  );
};
