import { createAsyncThunk } from '@reduxjs/toolkit';
import history from '../../history';

export const historyPush = createAsyncThunk('history/push', (path) => {
  history.push(path);
});
