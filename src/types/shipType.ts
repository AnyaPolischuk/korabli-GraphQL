export interface IShips {
  id: string
  title: string
  description: string
  icons: Icons
  level: number
  type: Type
  nation: Nation
  __typename: string
}
interface Icons {
  large: string
  medium: string
}
interface Type {
  name: string
  title: string
  icons: Icons2
}
interface Icons2 {
  default: string
}
interface Nation {
  name: string
  title: string
  color: string
  icons: Icons3
}
interface Icons3 {
  small: string
  medium: any
  large: string
}