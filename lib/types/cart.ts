import { CartItemOptions } from 'swell-js'

export type AddToCartInput = {
  productId: string
  quantity: number
  options?: CartItemOptions[]
  purchaseOption?: {
    type: string
    planId: string
  }
}
