export type Flag = boolean

export type PropsChildren = {
    children: JSX.Element | JSX.Element[]
}

export type JobType = {
    id: string,
    companyName: string,
    jobDate: string,
    position: string
}

export type InfoType = { info: any }
export type FormType = { current: any }
export type Response = {
    response: any
    post: string
}

export type InfoReducer = {
    state: {},
    action: {}
}

export type ValidateType = {
    title: string,
    email: string,
    message: string,
    errors?: {}
}

export type Error = {
    title: string,
    email: string,
    message: string,
}
