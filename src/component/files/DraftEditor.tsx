import  { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js'
import 'draft-js/dist/Draft.css';

function DraftEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleKeyCommand = (command: any, editorState: any) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onChange = (editorState: any) => setEditorState(editorState);

  return (
    <div style={{ height: '500px', border: '1px solid #ccc' }}>
      <Editor editorState={editorState} handleKeyCommand={handleKeyCommand} onChange={onChange} />
    </div>
  );
}

export default DraftEditor;