export type Supermarket = { id: string; name: string; short: string; color: string }
export type Price = { supermarketId: string; value: number; previous: number }
export type Product = {
  id: string; barcode: string; name: string; brand: string; presentation: string; category: string; accent: string; icon: string; prices: Price[]; history: number[]
}

export const supermarkets: Supermarket[] = [
  { id: 'ahorro', name: 'Ahorro+', short: 'A+', color: '#1e8b63' },
  { id: 'fresco', name: 'Fresco Market', short: 'FM', color: '#e9783d' },
  { id: 'barrio', name: 'El Barrio', short: 'EB', color: '#4b6cb7' },
  { id: 'supermax', name: 'SuperMax', short: 'SM', color: '#7a5caf' },
]

const product = (data: Omit<Product, 'prices' | 'history'> & { prices: number[]; previous?: number[] }): Product => ({
  ...data,
  prices: data.prices.map((value, index) => ({ supermarketId: supermarkets[index].id, value, previous: data.previous?.[index] ?? value + 20 })),
  history: [data.prices[0] + 80, data.prices[0] + 45, data.prices[0] + 60, data.prices[0] + 20, data.prices[0]],
})

export const products: Product[] = [
  product({ id:'leche', barcode:'7791234560012', name:'Leche Entera', brand:'La Serenísima', presentation:'1 litro', category:'Lácteos', accent:'#e5f4ed', icon:'LT', prices:[1299,1380,1450,1510], previous:[1399,1380,1450,1510] }),
  product({ id:'cafe', barcode:'7791234560029', name:'Café Molido Intenso', brand:'Cabrales', presentation:'250 g', category:'Almacén', accent:'#f6eadf', icon:'CF', prices:[4890,5200,4999,5450], previous:[4890,5200,5250,5450] }),
  product({ id:'fideos', barcode:'7791234560036', name:'Fideos Tirabuzón', brand:'Matarazzo', presentation:'500 g', category:'Almacén', accent:'#fff0cf', icon:'FD', prices:[1190,1250,1320,1299] }),
  product({ id:'yogur', barcode:'7791234560043', name:'Yogur Natural', brand:'Ser', presentation:'190 g', category:'Lácteos', accent:'#e1eef8', icon:'YG', prices:[990,1050,920,1100], previous:[1090,1050,920,1100] }),
  product({ id:'gaseosa', barcode:'7791234560050', name:'Gaseosa Cola', brand:'Coca-Cola', presentation:'1.5 litros', category:'Bebidas', accent:'#f9e2df', icon:'GC', prices:[2450,2299,2580,2700], previous:[2450,2599,2580,2700] }),
  product({ id:'detergente', barcode:'7791234560067', name:'Detergente Limón', brand:'Ala', presentation:'750 ml', category:'Limpieza', accent:'#dff1ef', icon:'DL', prices:[1990,2150,2099,2250] }),
  product({ id:'shampoo', barcode:'7791234560074', name:'Shampoo Hidratación', brand:'Pantene', presentation:'400 ml', category:'Perfumería', accent:'#efe5f5', icon:'SH', prices:[4990,4799,5250,5100], previous:[4990,5299,5250,5100] }),
  product({ id:'arroz', barcode:'7791234560081', name:'Arroz Largo Fino', brand:'Gallo', presentation:'1 kg', category:'Almacén', accent:'#f4edda', icon:'AR', prices:[1490,1550,1399,1600] }),
  product({ id:'galletitas', barcode:'7791234560098', name:'Galletitas de Avena', brand:'Granix', presentation:'180 g', category:'Almacén', accent:'#f8e6d9', icon:'GA', prices:[1650,1590,1720,1800] }),
  product({ id:'lavandina', barcode:'7791234560104', name:'Lavandina Clásica', brand:'Ayudín', presentation:'1 litro', category:'Limpieza', accent:'#e4eef6', icon:'LV', prices:[1190,1290,1099,1350] }),
  product({ id:'manteca', barcode:'7791234560111', name:'Manteca', brand:'La Serenísima', presentation:'200 g', category:'Lácteos', accent:'#fff2c9', icon:'MA', prices:[1890,1990,1799,2100] }),
  product({ id:'agua', barcode:'7791234560128', name:'Agua Mineral', brand:'Villavicencio', presentation:'2 litros', category:'Bebidas', accent:'#dceff5', icon:'AG', prices:[1590,1499,1650,1750] }),
]

export const followedIds = ['leche', 'yogur', 'gaseosa']
export const listIds = ['leche', 'fideos', 'cafe']

export const money = (value: number) => `$${value.toLocaleString('es-AR')}`
export const lowestPrice = (p: Product) => Math.min(...p.prices.map((price) => price.value))
export const lowestPriceEntry = (p: Product) => p.prices.reduce((lowest, current) => current.value < lowest.value ? current : lowest)
