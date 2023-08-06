import data from "../data/salary/2023-06.json"
import currency from 'currency.js'
import './App.css'
type Data = {
  cod: string,
  nome: string,
  salarioBase: number,
  totalDescontos: number,
  total: number
  tipoCargo: string
  cargo: string
}

const formatCurrency = (value: number) =>
  currency(value, { symbol: "R$", decimal: ",", separator: "." }).format()

function THead({ fields }: { fields: string[] }) {
  return (
    <thead>
      <tr> {fields.map((field) => <th>{field}</th>)} </tr>
    </thead>
  )
}

function Table<Element extends object>({ elements, params }: { elements: Element[], params: { fields: string[]; keys: (keyof Element)[] } }) {

  const { keys, fields } = params

  return (
    <table>
      <THead fields={fields} />
      <tbody>
        {elements.map((element) => (
          <tr>{keys.map((key) => <td>{element[key]}</td>)}</tr>
        ))}
      </tbody>
    </table>
  )
}

function App() {

  type Key = keyof Data

  const result = data.result as unknown as Data[]
  const sorted = ((a: Data, b: Data) => a.salarioBase - b.salarioBase)
  const filterByEfetivo = ((item: Data) => item.tipoCargo === '0-Efetivo')
  const mapped = (item: Data) => ({
    ...item,
    salarioBase: formatCurrency(item.salarioBase),
    totalDescontos: formatCurrency(item.totalDescontos)
  })

  const list = result
    .filter(filterByEfetivo)
    .sort(sorted)
    .map(mapped)

  const fields = ['cod', 'nome', 'Salario Bruto']
  const keys: Key[] = [ 'cod', 'nome', 'salarioBase' ]

  return (<Table elements={list} params={{ keys, fields}} />)
}





export default App
