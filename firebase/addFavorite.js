import { collection, setDoc } from 'firebase/firestore';
import { firestore } from './clientApp';

const addFavorite = async (
  currentUser,
  selectedUserId,
  selectedUsername,
  selectedUserAvatar
) => {
  await setDoc(
    collection(firestore, 'users', currentUser, 'favorites', selectedUserId),
    {
      selectedUserId,
      selectedUserAvatar,
      selectedUsername,
    }
  );
};

export default addFavorite;
