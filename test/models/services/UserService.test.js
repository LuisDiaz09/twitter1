const UserService = require ('./../../app/models/UserService')

describe("Creando prueba de unidad para clase UserService", () => {
    test('Creando nuevo usuario con la clase UserService', () => {
       const user = UserService.create(1, "luan", "Luis")
       expect(user.id).toBe(1)
       expect(user.username).toBe("luan")
       expect(user.name).toBe("Luis")
       expect(user.bio).not.toBeUndefined
    });

    
})
