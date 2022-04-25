export interface Price {
    /**
     * Name of the Location the price is for
     */
    location: string
    /**
     * Hourly costs for a Server type in this Location
     */
    price_hourly: PriceItem
    /**
     * Monthly costs for a Server type in this Location
     */
    price_monthly: PriceItem



}

export interface PriceItem {
    /**
     * Price with VAT added
     */
    gross: string,
    /**
     * Price without VAT
     */
    net: string
}