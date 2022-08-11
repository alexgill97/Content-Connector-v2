import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../firebase/context';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';
import { EditorState } from 'draft-js';
import { firestore } from '../firebase/clientApp';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { convertFromRaw, convertToRaw } from 'draft-js';
import Draft from 'draft-js';
import styles from '../styles/text_editor.module.scss';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
);

const TextEditor = ({ uid, userSelf }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { userData, currentUser } = useContext(AuthContext);

  const [snapshot] = useDocumentOnce(doc(firestore, 'profiles', uid));

  useEffect(() => {
    if (snapshot?.data()?.editorState) {
      console.log(snapshot.data());
      setEditorState(
        Draft.EditorState.createWithContent(
          convertFromRaw(snapshot.data().editorState)
        )
      );
    }
  }, [snapshot]);

  const updateDescription = () => {
    const docRef = collection(firestore, 'profiles');
    setDoc(doc(docRef, '30WctPIRBpVWV1WUdGnzmaKLsbg1'), {
      editorState: convertToRaw(editorState.getCurrentContent()),
    });
  };

  return (
    <div>
      <Editor
        readOnly={!userSelf}
        toolbarClassName={!userSelf && styles.toolbar}
        editorState={editorState}
        onEditorStateChange={(editorState) => setEditorState(editorState)}
        editorClassName={styles.editor}
      />
      {userSelf && (
        <button onClick={updateDescription}>Submit Description Change</button>
      )}
    </div>
  );
};

export default TextEditor;
