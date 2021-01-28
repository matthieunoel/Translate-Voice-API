import { Get, Res, ContentType, JsonController, QueryParam } from 'routing-controllers'
import { Response } from 'express'
import { VoiceService } from './voice.service'
import bodyParser = require('body-parser')
import { Logger } from '../logSystem'
import { IVoiceRootResult } from './voice.interfaces'

const fs = require('fs')

const version = require('../../package.json').version
const appName = require('../../package.json').name

@JsonController()
export class VoiceController {

    private logger: Logger = new Logger()

    constructor(
        private voiceService: VoiceService
    ) {}

    @Get('/voice')
    root(@Res() response: Response): IVoiceRootResult {
        this.logger.reqLog('Request at "/voice".')
        return {
            name: 'Voice',
            version: 'Voice'
        }
    }

}