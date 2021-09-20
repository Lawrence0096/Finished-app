import { CompanyDetails } from "./Company-details";

export interface Company {
    id:   number;
    name: string;
    companyDetails?: CompanyDetails
}
