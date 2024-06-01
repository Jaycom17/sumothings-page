export interface Product {
    proID?: string; // VARCHAR(128) PRIMARY KEY
    proName: string; // VARCHAR(128) UNIQUE
    proStock: number; // INT
    proHeight: number; // NUMERIC(10,2)
    proWidth: number; // NUMERIC(10,2)
    proLength: number; // NUMERIC(10,2)
    proWeight: number; // NUMERIC(10,2)
    proBuyPrice: number; // NUMERIC(14,2)
    proSellPrice: number; // NUMERIC(14,2)
    proMinStock: number; // INT
    proMaxStock: number; // INT
    proDescription: string; // TEXT
    proImage: string; // VARCHAR(255)
    proTypeID: string; // VARCHAR(128), FOREIGN KEY REFERENCES ProductType(ptID)
}