import Button from './Button'
import Logo from './Logo'

function Header() {
  return (
    <div className="bg-neutral-background/70 sticky top-0 flex items-center pt-6 pb-4 md:pt-8 lg:pt-10">
      <Logo />
      <div className="z-10 flex flex-1 items-center justify-end gap-2 md:justify-center">
        <Button value="Table" big />
        <Button value="Comparator" big />
      </div>
      <div className="hidden justify-end gap-1 md:flex">
        <Button value="Config" />
        <Button value="About" />
      </div>
    </div>
  )
}

export default Header
