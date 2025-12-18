import Logo from './components/Logo'

function App() {
  return (
    <div className="bg-product-foreground-dim text-neutral-foreground flex h-screen w-screen flex-col items-center justify-center gap-12 p-4 font-mono md:p-8">
      <Logo />
      <div className="w-full text-center">Crazy simple climbing grade comparator.</div>
      <div className="bg-neutral-foreground text-neutral-on-foreground w-fit -rotate-6 p-2 text-center">
        Beta coming soon.
      </div>
    </div>
  )
}

export default App
