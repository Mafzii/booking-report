export interface Entry {
    id: number,
    
    booking_id: string,
    booker: string,
    date: string,
    
    cargo: string[],
    
    shipping_line: string,
    sl_icon: string,
    
    pickup: string,
    pickup_2: string,
    pickup_icon: string,
    dest: string,
    dest_2: string,
    dest_icon: string,
    
    cutoff: string,
    etd: string,
    eta: string,
    bl_num: string,
    
    // dropdown details
    provider_name: string,
    provider_icon: string,
    voyage_number: string,
    vessel_name: string,
    vessel_number: string,
    commodity_description: string
}