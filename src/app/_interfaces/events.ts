export interface Events {
    id:           number;
    customers_id: number;
    timelocal:    Date;
    event:        string;
    priority:     number;
    bgndcolor:    Bgndcolor;
}


export enum Bgndcolor {
    Ff6060 = "#ff6060",
    Ff9060 = "#ff9060",
    Ffffff = "#ffffff",
}