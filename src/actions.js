import { setUser } from './slices/userSlice';
import { setTransactions } from './slices/transactionSlice';

export const fetchUserData = () => async (dispatch) => {
  const response = await fetch('http://localhost:3001/user');
  const data = await response.json();
  dispatch(setUser(data));
};

export const fetchTransactions = () => async (dispatch) => {
  const response = await fetch('http://localhost:3001/transactions');
  const data = await response.json();
  dispatch(setTransactions(data));
};
