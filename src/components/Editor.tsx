import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './InitialContent'
import CodeBlockLowLight from '@tiptap/extension-code-block-lowlight';
import {lowlight} from 'lowlight';
import js from 'highlight.js/lib/languages/javascript';
import'highlight.js/styles/github-dark-dimmed.css';
import {
    RxFontBold,
    RxFontItalic,
    RxStrikethrough,
    RxCode,
    RxChevronDown,
    RxChatBubble
} from 'react-icons/rx'
import BubbleButton from './BubbleButton';

lowlight.registerLanguage('js', js);

function Editor() {
    const editor = useEditor({
        extensions: [
          StarterKit,
          CodeBlockLowLight.configure({lowlight})
        ],
        content: initialContent,
        editorProps: {
            attributes: {
                class: 'outline-none focus:outline-none'
            }
        }
      })

const teste = editor?.getJSON()
console.log('@@@@@ Teste: ', teste)

  return (
    <>
    <EditorContent className="max-w-[700px] mx-auto pt-16 prose  prose-invert" editor={editor} />
    {editor && <BubbleMenu className="z-10 bg-zinc-700 rounded-lg  shadow-xl shadow-black/20 border border-zinc-600  divide-x divide-zinc-600  flex" editor={editor} >
         <BubbleButton>Text<RxChevronDown/></BubbleButton>
         <BubbleButton>Comment<RxChatBubble/></BubbleButton>
         <div className='flex items-center'>
         <BubbleButton onClick={() => {editor.chain().focus().toggleBold().run()}} data-active={editor.isActive('bold')}><RxFontBold  className='w-4 h-4'/></BubbleButton>
         <BubbleButton onClick={() => {editor.chain().focus().toggleItalic().run()}} data-active={editor.isActive('italic')}><RxFontItalic  className='w-4 h-4'/></BubbleButton>
         <BubbleButton onClick={() => {editor.chain().focus().toggleStrike().run()}} data-active={editor.isActive('strike')}><RxStrikethrough  className='w-4 h-4'/></BubbleButton>
         <BubbleButton onClick={() => {editor.chain().focus().toggleCodeBlock().run()}} data-active={editor.isActive('codeBlock')}><RxCode  className='w-4 h-4'/></BubbleButton>
         </div>
         </BubbleMenu>}
    </>
  )
}

export default Editor   