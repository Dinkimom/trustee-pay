/**
 * Example controller
 *
 * created by Sean Maxwell Apr 14, 2019
 */
import { Controller, Delete, Get, Post, Put } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { User } from './../models/Sample';

@Controller('api')
export class ExampleController {
    @Get(':msg')
    private getMessage(req: Request, res: Response) {
        Logger.Info(req.params.msg);

        User.find({}, function (err, users) {
            if (err) return console.log(err);
            res.send(users);
        });
    }

    @Put(':msg')
    private putMessage(req: Request, res: Response) {
        Logger.Info(req.params.msg);
        return res.status(400).json({
            error: req.params.msg,
        });
    }

    @Post(':msg')
    private postMessage(req: Request, res: Response) {
        Logger.Info(req.params.msg);
        return res.status(400).json({
            error: req.params.msg,
        });
    }

    @Delete(':msg')
    private delMessage(req: Request, res: Response) {
        try {
            throw new Error(req.params.msg);
        } catch (err) {
            Logger.Err(err, true);
            return res.status(400).json({
                error: req.params.msg,
            });
        }
    }
}
