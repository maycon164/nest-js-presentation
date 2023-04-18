import { SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_ROUTE = 'ISPUBLIC'
export const IS_USER_ROUTE = 'ISUSER'

export const PUBLIC_ROUTE = () => SetMetadata(IS_PUBLIC_ROUTE, true)
export const USER_ROUTE = () => SetMetadata(IS_USER_ROUTE, true)