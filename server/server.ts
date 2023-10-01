import { app } from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 7000;

// create server
app.listen(PORT, () => {
  console.log(`Server is connected with port ${PORT}`);
});
