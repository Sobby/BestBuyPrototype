import { Attribute } from './attribute';

export class Product {
    ProductId: number;
    CategoryId: number;
    BrandID:number;
    BrandName:string;
    //DepartmentId: number;
    //DepartmentName: string;
    CategoryName: string;
    Name: string;
    Description: string;
    PrimaryImage: string;
    SecondaryImage: string;
    Thumbnail: string;
    Display: number;
    Price: number;
    DescountedPrice: number;
    ProductCount: number;
    //Color: Attribute[];
    //Size: Attribute[];
}
