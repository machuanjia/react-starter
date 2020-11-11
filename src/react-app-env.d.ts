/** @format */

/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test'
        readonly PUBLIC_URL: string
    }
}

declare module '*.avif' {
    const src: string
    export default src
}

declare module '*.bmp' {
    const src: string
    export default src
}

declare module '*.gif' {
    const src: string
    export default src
}

declare module '*.jpg' {
    const src: string
    export default src
}

declare module '*.jpeg' {
    const src: string
    export default src
}

declare module '*.png' {
    const src: string
    export default src
}

declare module '*.webp' {
    const src: string
    export default src
}

declare module '*.svg' {
    import * as React from 'react'

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {title?: string}>

    const src: string
    export default src
}

declare module '*.module.css' {
    const classes: {readonly [key: string]: string}
    export default classes
}

declare module '*.module.scss' {
    const classes: {readonly [key: string]: string}
    export default classes
}

declare module '*.module.sass' {
    const classes: {readonly [key: string]: string}
    export default classes
}

declare module '@/*'
declare module 'Assets/*'
declare module 'Components/*'
declare module 'Views/*'
declare module 'Routes/*'
declare module 'Utils/*'
declare module 'Apis/*'
declare module 'Constants/*'
declare module 'Layouts/*'
declare module 'Stores/*'
declare module 'Styles/*'
declare module 'I18n/*'
