import {UserListItem} from "./interface/user-list.interface";
import {CurrentUserInterface} from "./interface/current-user.interface";

export const status = [
  {id: 1, displayName: 'Активен', value: 'Активен'},
  {id: 2, displayName: 'Заблокирован', value: 'Заблокирован'}
]

export const role = [
  {id: 1, displayName: 'Администратор', value: 'Администратор'},
  {id: 2, displayName: 'Пользователь', value: 'Пользователь'}
]

export const user: CurrentUserInterface = {
  name: 'Иванов',
  role: 'Администратор',
  image: 'assets/images/svg/input-arrow-down.svg'
}

export const userTableColumns = ['action', 'login', 'email', 'telephone', 'role', 'dateofchange', 'dateofcreate', 'status', 'presenceofep'];
