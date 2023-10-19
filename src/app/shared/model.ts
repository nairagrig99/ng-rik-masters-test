import {CurrentUserInterface} from "./interface/current-user.interface";

export const status = [
  {id: 1, displayName: 'Активен', value: 'ACTIVE'},
  {id: 2, displayName: 'Заблокирован', value: 'BLOCKED'}
]

export const role = [
  {id: 1, displayName: 'Администратор', value: true},
  {id: 2, displayName: 'Пользователь', value: false}
]

export const user: CurrentUserInterface = {
  name: 'Иванов',
  role: 'Администратор',
  image: 'assets/images/svg/input-arrow-down.svg'
}

export const userTableColumns = ['action', 'login', 'email', 'telephone', 'role', 'dateofchange', 'dateofcreate', 'status', 'presenceofep'];
