import React, { useEffect, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';
import { EditorState } from 'draft-js';
import { firestore } from '../firebase/clientApp';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { convertFromRaw, convertToRaw } from 'draft-js';
import Draft from 'draft-js';
import { useRouter } from 'next/dist/client/router';
import styles from '../styles/text_editor.module.scss';

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

  const [snapshot] = useDocumentOnce(
    doc(firestore, 'profiles', '30WctPIRBpVWV1WUdGnzmaKLsbg1')
  );

  useEffect(() => {
    if (snapshot?.data().editorState) {
      setEditorState(
        Draft.EditorState.createWithContent(
          convertFromRaw(snapshot.data().editorState)
        )
      );
    }
  }, [snapshot]);

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
        // toolbarClassName={styles.toolbar}
        // toolbar={{
        //   inline: { inDropdown: true },
        //   list: { inDropdown: true },
        //   textAlign: { inDropdown: true },
        //   link: { inDropdown: true },
        //   history: { inDropdown: true },
        // }}
        editorClassName={styles.editor}
      />
    </div>
  );
};

export default TextEditor;
