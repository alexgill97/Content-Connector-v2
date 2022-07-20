import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorState } from 'draft-js';
import { firestore } from '../firebase/clientApp';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { convertFromRaw, convertToRaw } from 'draft-js';
import Draft from 'draft-js';
import { useRouter } from 'next/dist/client/router';
import styles from '../styles/text_editor.module.scss';
import { async } from '@firebase/util';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
);

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter();
  const { id } = router.query;

  useEffect(async () => {
    const docRef = doc(firestore, 'profiles', '30WctPIRBpVWV1WUdGnzmaKLsbg1');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setEditorState(
        Draft.EditorState.createWithContent(
          convertFromRaw(docSnap.data().editorState)
        )
      );
    }
  }, []);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);

    const docRef = collection(firestore, 'profiles');
    setDoc(doc(docRef, '30WctPIRBpVWV1WUdGnzmaKLsbg1'), {
      editorState: convertToRaw(editorState.getCurrentContent()),
    });
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName={styles.toolbar}
        editorClassName={styles.editor}
      />
    </div>
  );
};

export default TextEditor;
