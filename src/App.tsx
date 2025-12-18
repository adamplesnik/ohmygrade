import Logo from './components/Logo'

function App() {
  return (
    <div className="bg-product-foreground text-product-on-foreground flex h-screen w-screen flex-col items-center justify-center gap-12 p-6 font-mono md:p-8 lg:p-10">
      <Logo large colorful={false} />
      <div className="w-full text-center">Crazy simple climbing grade comparator.</div>
      <div className="bg-product-on-foreground text-neutral-on-foreground-contrast w-fit -rotate-6 p-2 text-center">
        Beta coming soon.
      </div>
    </div>
  )
}

export default App
