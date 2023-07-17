import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './InitialContent'

function Editor() {
    const editor = useEditor({
        extensions: [
          StarterKit,
        ],
        content: initialContent,
        editorProps: {
            attributes: {
                class: 'outline-none focus:outline-none'
            }
        }
      })

  return (
    <EditorContent className="max-w-[700px] mx-auto pt-16 prose prose-zinc dark:prose-invert" editor={editor} />
  )
}

export default Editor   