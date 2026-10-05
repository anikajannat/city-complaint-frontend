import {Nav} from "./nav";import {Footer} from "./footer";export function PublicShell({children}:{children:React.ReactNode}){return <><Nav/><main>{children}</main><Footer/></>}
