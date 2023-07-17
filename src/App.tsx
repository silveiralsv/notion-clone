import Editor from "./components/Editor";

function App() {
  return (
    <div className="min-h-screen text-zinc-200 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className=" w-[80vw] bg-zinc-800 mx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-700 border-r border-r-zinc-600 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-400 tran group-hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-400 tran group-hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-400 tran group-hover:bg-green-400" />
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  );
}

export default App;
