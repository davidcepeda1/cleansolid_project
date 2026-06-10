interface User {
    id: number;
    name: string;
}

class UserService {
    getUser( id: number ) {
        console.log('Cargando usuario con id:', id);
    }

    saveUser( user: User ) {
        console.log('Guardando en base de datos:', user );
    }
}

class Mailer {
    
    private masterEmail: string = 'fernando@google.com';

    sendEmail( emailList: string[], template: 'to-clients' | 'to-admins' ) {
        console.log('Enviando correo a los usuarios:', template);
    }
}

class UserBloc {

    constructor(
        private userService: UserService,
        private mailer: Mailer
    ) {}

    loadUser( id: number ) {
        this.userService.getUser(id);
    }

    saveUser( user: User ) {
        this.userService.saveUser(user);
    }

    notifyUser() {
        this.mailer.sendEmail(['fernando@google.com'], 'to-clients');
    }

}

class SubscriptionBloc {
    onAddSubscription( subscriptionId: number ) {
        console.log('Agregando suscripción:', subscriptionId );
    }
}

const userService      = new UserService();
const mailer           = new Mailer();

const userBloc         = new UserBloc( userService, mailer );
const subscriptionBloc = new SubscriptionBloc();

userBloc.loadUser(10);
userBloc.saveUser({ id: 10, name: 'Fernando' });
userBloc.notifyUser();
subscriptionBloc.onAddSubscription(1234);
