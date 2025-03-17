import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SpeechToText from './SpeechToText';

function TypingEditor() {
    const [text, setText] = useState('');

    const handleTextChange = (value: React.SetStateAction<string>) => {
      setText(value);
    };
  
    const handleSpeechToTextChange = (newText: string) => {
      setText((prevText) => prevText + ' ' + newText);
    };
  

  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // pastePlainText: true,
    }
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  return (
    <div style={{ height: '500px' }}>
      <ReactQuill
        value={text}
        onChange={handleTextChange}
        modules={modules}
        formats={formats}
      />
      <SpeechToText onTextChange={handleSpeechToTextChange} />
    </div>
  );
}

export default TypingEditor;