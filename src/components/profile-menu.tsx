import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export const ProfileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="/img/shadcn.jpg" alt="CN" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Subscription
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
