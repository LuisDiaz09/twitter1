const UserService = require('./../../app/services/UserService')

describe("Creando prueba de unidad para clase UserService", () => {
    test('Creando nuevo usuario con la clase UserService', () => {
       const user = UserService.create(1, "luan", "Luis")
       expect(user.id).toBe(1)
       expect(user.username).toBe("luan")
       expect(user.name).toBe("Luis")
       expect(user.bio).not.toBeUndefined
    });

    test('Agregando nuevo método estático getInfo', () => {
        constuser=UserService.create(1, "luan", "Luis")
        constuserInfo=UserService.getInfo(user)
        expect(userInfo[0]).toBe(1)
        expect(userInfo[1]).toBe("luan")
        expect(userInfo[2]).toBe("Luis")
        expect(userInfo[3]).toBe("sin bio")
        });
})
