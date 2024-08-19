import { Product } from 'swell-js'

export type ExtendedProduct = Product & {
  purchaseOptions?: { standard?: any; subscription?: { plans?: any[] } }
}

export type ProductImage = {
  captions?: string
  file: {
    height: number
    id: string
    url: string
    width: number
  }
  id: string
}

export type ProductionOption = {
  active: boolean
  description: string
  id: string
  name: string
  values: ProductOptionValue[]
  variant: boolean
}

export type ProductOptionValue = {
  color: string
  description: string
  id: string
  images: ProductImage[]
  name: string
  price: number
  size: string
  subscriptionInterval: string
  subscriptionIntervalCout: number
}

export type ProductSubscriptionPlan = {
  active: boolean
  billingSchedule: {
    interval: string
    intervalCount: number
  }
  descroption: string
  id: string
  name: string
  orderSchedule: {
    interval: string
    intervalCount: number
  }
  price: number
}

export type GetProductsInput = {
  page?: number
  sort?: string
  search?: string
  categories?: string[]
  limit?: number
}

export type FormatCurrencyInput = {
  amount: number | undefined
  local?: string
  currency?: string
  decimalPlaces?: number
}
