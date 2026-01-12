import '../i18n'
import Header from './components/Header'
import Table from './components/Table'

const App = () => {
  return (
    <div className="text-foreground mx-auto px-6 pb-8 md:px-8 lg:px-10">
      <Header />
      <Table />
    </div>
  )
}

export default App
