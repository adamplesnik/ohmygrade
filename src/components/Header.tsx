import Button from './Button'
import Logo from './Logo'

function Header() {
  return (
    <div className="flex">
      <Logo />
      <div className="flex flex-1 justify-center gap-2">
        <Button value="Table" big />
        <Button value="Comparator" big />
      </div>
      <div className="flex justify-end">
        <Button value="Config" />
        <Button value="About" />
      </div>
    </div>
  )
}

export default Header
