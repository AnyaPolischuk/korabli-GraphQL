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

export interface Icons {
  large: string
  medium: string
}

export interface Type {
  name: string
  title: string
  icons: Icons2
}

export interface Icons2 {
  default: string
}

export interface Nation {
  name: string
  title: string
  color: string
  icons: Icons3
}

export interface Icons3 {
  small: string
  medium: any
  large: string
}