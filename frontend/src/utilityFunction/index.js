export const formatCurrency = (amount) => {
    return amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}