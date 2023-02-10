export const calcTotalPrice = (item) => {
  return item.reduce((sum, item) => sum + item.price * item.count, 0)
}
export const calcTotalCount = (item) => {
    return item.reduce((sum, item) => sum + item.count, 0)
}