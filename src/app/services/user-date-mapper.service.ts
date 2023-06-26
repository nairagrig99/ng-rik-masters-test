import {Injectable} from "@angular/core";
import {UserListItem} from "../shared/interface/user-list.interface";
import {StatusEnum} from "../shared/enums/status.enum";

@Injectable()

export class UserDateMapperService {

  public mapUserListGetFromApi(us: UserListItem): UserListItem {

    const statusEnum = StatusEnum;

    return {
      ...us,
      role: us?.role ?? false,
      status: us?.status ?? statusEnum.BLOCKED,
      update_at: new Date(us.update_at),
      create_at: new Date(us.create_at),
      ept: us.ept ?? false
    }
  }
}
