import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get(":id")
        findAll(@Param('id') id: string) {
            return {user:
                {
                    id: id
                }
            };
        }



    @Post("register")
    create(@Body('name') name: string) {
        return 'user name is  '  + name;
    }
    
}


