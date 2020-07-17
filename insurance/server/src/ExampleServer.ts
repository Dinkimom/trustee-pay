/**
 * Server file for ExpressJS
 *
 * created by Sean Maxwell April 14, 2019
 */
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import * as bodyParser from 'body-parser';
import * as controllers from './controllers';
import mongoose = require('mongoose');
import cors = require('cors');

class ExampleServer extends Server {
    private readonly SERVER_STARTED = 'Example server started on port: ';

    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cors);
        // this.connectDB();
        this.setupControllers();
    }

    private setupControllers(): void {
        const ctlrInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                const controller = (controllers as any)[name];
                ctlrInstances.push(new controller());
            }
        }
        super.addControllers(ctlrInstances);
    }

    public start(port: number): void {
        this.app.get('*', (req, res) => {
            res.send(this.SERVER_STARTED + port);
        });

        // mongoose.connect(
        //     connectionString,
        //     { useNewUrlParser: true },
        //     (err: any) => {
        //         if (err) {
        //             return console.log(err);
        //         }

        //         this.app.listen(port, () => {
        //             Logger.Imp(this.SERVER_STARTED + port);
        //         });
        //     },
        // );

        this.app.listen(port, () => {
            Logger.Imp(this.SERVER_STARTED + port);
        });
    }
}

export default ExampleServer;
