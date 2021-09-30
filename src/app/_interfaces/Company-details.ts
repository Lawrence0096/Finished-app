export interface CompanyDetails {

        system:   System;
        mysql:    Mysql;
        tracknav: Tracknav;
        note:     string;
    }
       
    export interface Mysql {
        version:        string;
        last_start:     Date;
        ssl:            string;
        errors:         number;
        "slow queries": number;
        datadir:        string;
    }
    
    export interface System {
        os:     OS;
        cpu:    CPU;
        ram:    RAM;
        drives: Drive[];
    }
    
    export interface CPU {
        count: number;
        usage: number;
    }
    
    export interface Drive {
        volume:    string;
        installed: number;
        free:      number;
    }
    
    export interface RAM {
        installed: number;
        free:      number;
    }
    
    export interface OS {
        version: string;
        boot:    Date;
    }
    
    export interface Tracknav {
        service:       Service;
        programs:      Programs;
        vehicles:      Vehicles;
        tablets:       Tablets;
        tachodl:       Tachodl;
        communication: Communication;
    }
    
    export interface Communication {
        inbound:  Inbound;
        outbound: Outbound;
    }
    
    export interface Inbound {
        sys_tcp_io: HTTPIntin;
        intin:      HTTPIntin;
        http_intin: HTTPIntin;
    }
    
    export interface HTTPIntin {
        min: number;
        max: number;
        avg: number;
    }
    
    export interface Outbound {
        sys_tcp_io:  HTTPIntin;
        intout:      HTTPIntin;
        http_intout: HTTPIntin;
    }
    
    export interface Programs {
        active:  number;
        running: number;
    }
    
    export interface Service {
        running:             string;
        last_restart:        Date;
        planned_restart:     Date;
        managed_programs_ok: string;
    }
    
    export interface Tablets {
        count:  number;
        online: number;
    }
    
    export interface Tachodl {
        vehicles: Drivers;
        drivers:  Drivers;
    }
    
    export interface Drivers {
        state: string;
    }
    
    export interface Vehicles {
        count:  number;
        active: number;
        online: number;
    }

