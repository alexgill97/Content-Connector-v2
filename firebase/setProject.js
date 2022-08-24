import { setDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import { firestore } from './clientApp';

import Geocode from 'react-geocode';

const setProject = async (
  userData,
  profile,
  projectTitle,
  projectOffer,
  projectCity,
  projectLocation,
  projectOutline,
  completedBy,
  projectMediaType,
  projectCategory
) => {
  console.log(userData);
  const messagesId =
    userData.uid > profile.uid
      ? `${userData.uid + profile.uid}`
      : `${profile.uid + userData.uid}`;

  const creator = profile.isBusiness ? userData : profile;
  const business = profile.isBusiness ? profile : userData;

  Geocode.setApiKey('AIzaSyDoeEVfzN1WC3vwiDlF7HemOu35NQao-kY');
  Geocode.setLanguage('en');
  Geocode.setRegion('na');

  let projectCoordinates = {};

  // Create lat, lng from address
  await Geocode.fromAddress(projectLocation).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      projectCoordinates = { lat: lat, lng: lng };
      console.log(projectCoordinates);
    },
    (error) => {
      console.error(error);
    }
  );

  if (!projectCoordinates) console.log('Please enter valid location');

  // Create project in messages collection
  const docRef = doc(collection(firestore, 'messages', messagesId, 'chat'));
  await setDoc(docRef, {
    projectId: docRef.id,
    messageType: 'proposal',
    text: projectOutline,
    from: userData.uid,
    to: profile.uid,
    createdAt: serverTimestamp(),
    completedBy,
    projectTitle,
    projectOffer,
    businessAvatar: business.avatar,
    accepted: false,
    completed: false,
    city: projectCity,
    projectLocation,
    projectCoordinates,
  });

  // Create project in projects collection
  await setDoc(doc(firestore, 'projects', docRef.id), {
    projectId: docRef.id,
    creatorId: creator.uid,
    businessId: business.uid,
    businessUsername: business.username,
    creatorUsername: creator.username,
    projectCategory,
    projectMediaType,
    messagesId,
    projectTitle,
    projectOffer,
    projectOutline,
    businessAvatar: business.avatar,
    createdAt: serverTimestamp(),
    completedBy,
    accepted: false,
    completed: false,
    city: projectCity,
    projectLocation,
    projectCoordinates,
  });
};

export default setProject;
