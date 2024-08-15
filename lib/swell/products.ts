import swell from '@/lib/swell/client'
import { GetProductsInput } from '@/lib/types'
import { PRODUCTS_PER_PAGE, CATEGORIES_PER_PAGE } from '@/lib/uitls/constants'
import { cache } from 'react'

export const getProducts = cache(
  async ({
    page = 1,
    sort = '',
    search = '',
    categories = [],
    limit = PRODUCTS_PER_PAGE
  }: GetProductsInput) => {
    const query = {
      page,
      limit,
      sort,
      search,
      categories,
      expand: ['variants', 'categories']
    }
    return await swell.products.list(query)
  }
)

export const getProductsBySlugOrId = cache(async (sludOrId: string) => {
  return await swell.products.get(sludOrId)
})

export const listCategories = cache(
  async (limit = CATEGORIES_PER_PAGE, page = 1) => {
    return await swell.categories.list({
      limit,
      page,
      expand: ['products']
    })
  }
)
