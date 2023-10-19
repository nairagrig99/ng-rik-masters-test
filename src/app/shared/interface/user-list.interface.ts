export interface UserListInterface {
  page: Page,
  users: UserListItem[],
  data: Data[]
}

export interface Page {
  total: number,
  current: number,
  size: number
}

export interface UserListItem {
  id: number,
  name: string,
  email: string,
  phone: string,
  role: string,
  status: string,
  create_at: Date,
  update_at: Date,
  ept: boolean,
  checked?: boolean
}

export interface Data {
  user_id: number,
  is_admin: boolean,
  is_ecp: boolean,
  status: string
}
