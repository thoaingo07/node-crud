import "reflect-metadata";
import { createConnection } from "typeorm";
import { Model } from "../entities/Model";

export const pgListingConn = createConnection({
    "name": "pgListing",
    "type": "postgres",
    "host": "localhost",
    "port": 5433,
    "username": "erm_app",
    "password": "App20!",
    "database": "real_dev",
    entities: [
        Model
    ],
    synchronize: true,
    logging: false
});

