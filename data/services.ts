export type Service = {
  id: string
  name: string
  duration: number // minutes
  price: number
  currency: string
}

const services: Service[] = [
  { id: 'corte_clasico', name: 'Corte clásico', duration: 30, price: 2000, currency: 'ARS' },
  { id: 'corte_premium', name: 'Corte premium + barba', duration: 50, price: 3500, currency: 'ARS' },
  { id: 'afeitado', name: 'Afeitado clásico', duration: 40, price: 2500, currency: 'ARS' },
]

export default services