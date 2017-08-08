"use strict"

import { Router } from "express"
import * as passport from "passport"
import { ServerSettings } from "../config/server.config"
import { User } from "../api/user/user.model"

import { LocalPassport } from "./local/passport"
import { FacebookPassport } from "./facebook/passport"
import { GooglePassport } from "./google/passport"
import { TwitterPassport } from "./twitter/passport"

import { LocalApi } from "./local"
import { FacebookApi } from "./facebook"
import { TwitterApi } from "./twitter"
import { GoogleApi } from "./google"

LocalPassport.setup(User)
FacebookPassport.setup(User)
GooglePassport.setup(User)
TwitterPassport.setup(User)

export const AuthApi = Router()

AuthApi.use("/local", LocalApi)
AuthApi.use("/facebook", FacebookApi)
AuthApi.use("/twitter", TwitterApi)
AuthApi.use("/google", GoogleApi)