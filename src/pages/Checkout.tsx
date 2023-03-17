import { Header } from '@/components/Header'
import { PaymentInfo } from '@/components/PaymentInfo'

export function Checkout() {
  return (
    <main className="w-full max-w-6xl m-auto">
      <Header />

      <section className="flex item-center gap-8 w-full">
        <PaymentInfo />
        {/* <Order /> */}
      </section>
    </main>
  )
}
