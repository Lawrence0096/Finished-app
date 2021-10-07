import { CustomerDetails } from "./customer-details";

export interface Customer {
    id:   number;
    name: string;
    companyDetails?: CustomerDetails
}
