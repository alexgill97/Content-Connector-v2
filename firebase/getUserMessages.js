import { firestore } from './clientApp';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';

const getUserMessages = async (
  currentUser,
  selectedUser,
  setMessages,
  setMessageId,
  setLoading
) => {
  //Set unique message ID

  const msgId =
    currentUser > selectedUser.uid
      ? `${currentUser + selectedUser.uid}`
      : `${selectedUser.uid + currentUser}`;
  console.log(msgId);
  setMessageId(msgId);
  //Get messages between current user and selected user
  const msgsRef = collection(firestore, 'messages', msgId, 'chat');
  const messagesQuery = query(msgsRef, orderBy('createdAt', 'asc'));
  onSnapshot(messagesQuery, (messagesSnapshot) => {
    let msgs = [];
    messagesSnapshot.forEach((doc) => {
      msgs.push(doc.data());
    });
    console.log(msgs);
    setMessages(msgs);
    setLoading(false);
  });
};

export default getUserMessages;
