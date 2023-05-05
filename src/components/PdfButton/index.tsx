import { ProductsProps } from '@/pages/Success'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

type OrderProps = {
  products: ProductsProps[]
}

type GeneratePDFButtonProps = {
  order: OrderProps
}

export function GeneratePDFButton({ order }: GeneratePDFButtonProps) {
  const handleGeneratePDF = () => {
    const doc = new jsPDF()
    const products = order.products.map((product) => [
      product.name,
      product.price,
    ])

    autoTable(doc, {
      head: [['Nome', 'Preço']],
      body: products,
    })

    doc.save('relatorio-pdf.pdf')
  }

  return (
    <button
      onClick={handleGeneratePDF}
      className="flex items-center text-white bg-purple-800 p-3 rounded gap-1 transition-all hover:opacity-90 w-full max-w-[200px] justify-center text-sm"
    >
      Gerar pdf do pedido
    </button>
  )
}
